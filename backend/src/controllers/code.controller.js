import { Question } from "../models/question.js";
import { UserQuestion } from "../models/userQuestionSchema.js";
import runCode from "../utils/runcode.util.js";
import { cleanJSON } from "../utils/cleanJSON.js";
import runCodes from "../utils/submitRuncode.js";

// .......... compaileCode ..........
const compaileCode = (req, res) => {
  const { language, code, input } = req.body;

  if (!language || !code) {
    return res.status(400).json({ error: "Language and code are required" });
  }

  runCode(language, code, input || "", (err, output) => {
    if (err) return res.status(500).json({ error: err.message });

    const cleanedOutput = output.trim();  // Return full output
    console.log(cleanedOutput);

    res.status(200).json({ output: cleanedOutput });
  });
};


// .......... questionUpload ..........
const questionUpload = async (req, res) => {
  try {
    const data = req.body;
    const question = new Question(data);
    // console.log(question);
    await question.save();

    res
      .status(200)
      .json({ message: "Question uploaded sucessfully", question });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to upload Question", details: error.message });
  }
};

// .......... getAllQuestion ..........
const getAllQuestion = async (req, res) => {
  try {
    // console.log(req.user)
    const questions = await Question.find(
      {},
      "id title description companies solved topics difficulty"
    );
    if (!questions || questions.length === 0) {
      return res.status(404).json({ error: "No question Found" });
    }
    res.status(200).json({ message: "Question fetch sucessfully", questions });
  } catch (error) {
    res.status(500).json({ error: "Error fetcheing Question" });
  }
};


//.......... getQuestionByUserSolvedId ..........

export const getUserQuestionStatus = async (req, res) => {
  try {
    const userId = req.user._id;

    const userQuestions = await UserQuestion.find({ userId });

    if (!userQuestions || userQuestions.length === 0) {
      return res.status(404).json({ error: "No question statuses found for this user." });
    }

    const statusList = userQuestions.map((uq) => ({
      questionId: uq.questionId,
      solved: uq.solved,
    }));

    res.status(200).json({
      message: "User question statuses fetched successfully",
      statuses: statusList,
    });
  } catch (error) {
    console.error("Error fetching question statuses:", error);
    res.status(500).json({
      error: "Internal server error while fetching statuses.",
    });
  }
};


// .......... getQuestionById ..........
const getQuestionById = async (req, res) => {
  try {
    // console.log(req.user)
    const { id } = req.params;
    const question = await Question.findById(id).select(
      "id title description companies solved topics difficulty inputFormat outputFormat"
    );
    if (!question) {
      res.status(404).json({ error: "Question not found" });
      return;
    }

    res.status(200).json({ message: "Question fetch sucessfully", question });
  } catch (error) {
    res.status(500).json({ error: "Error fetcheing Question" });
  }
};

// .......... getTestcase ..........
const getTestcase = async (req, res) => {
  try {
    const { id } = req.params;
    const testcase = await Question.findById(id).select(
      "id sampleTestCases hiddenTestCase"
    );
    if (!testcase) {
      res.status(404).json({ error: "testcase not found" });
      return;
    }

    res.status(200).json({ message: "testcase fetch sucessfully", testcase });
  } catch (error) {
    res.status(500).json({ error: "Error fetcheing Question" });
  }
};

// .......... submitCode ..........

// Function to get the function name from the code string
function getFunctionName(code) {
  const match = code.match(/function\s+([a-zA-Z0-9_]+)\s*\(/);
  return match ? match[1] : "main"; // Fallback to "main" if not found
}

const isEqual = (a, b) => {
  try {
    return JSON.stringify(JSON.parse(a)) === JSON.stringify(JSON.parse(b));
  } catch {
    return a === b;
  }
};

// Logical validator for Two Sum
const isValidAnswer = (codeOutput, testInput, expectedOutput) => {
  try {
    const inputArgs = JSON.parse(testInput);
    const expected = JSON.parse(expectedOutput);
    const output = JSON.parse(codeOutput);
    return JSON.stringify(output) === JSON.stringify(expected);
  } catch {
    return codeOutput.trim() === expectedOutput.trim();
  }
};




const submitCode = async (req, res) => {
  console.log(req.user)
  try {
    const { code, language } = req.body;
    const { id } = req.params;

    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    const allTestCases = [
      ...question.sampleTestCases
      // ...question.hiddenTestCase,
    ];

    // console.log(allTestCases)

    const result = [];
    let completed = 0;

    allTestCases.forEach((test, index) => {

      // console.log(test)
      // console.log(index)
      runCodes(language, code, test.input, async (err, output) => {
        const expected = test.expectedOutput.trim();
        // console.log(expected)
        // console.log(output)

        if (err) {
          result[index] = {
            input: test.input,
            expected,
            output: err.message,
            status: "false",
          };
        } else {
          const trimmedOutput = output.trim();
          // console.log(trimmedOutput)
          result[index] = {
            input: test.input,
            expected,
            output: trimmedOutput,
            status: trimmedOutput === expected ? "true" : "false",
          };

          console.log(result)
        }

        completed++;

        if (completed === allTestCases.length) {
          const passed = result.filter((r) => r.status === "true").length;

          // If all passed, mark the question as solved
          if (passed === allTestCases.length) {
            // await Question.findByIdAndUpdate(id, { solved: true });
            await UserQuestion.findOneAndUpdate(
              { userId: req.user.id, questionId: id },
              { solved: true },
              { upsert: true, new: true }
            );   
          }

          return res.status(200).json({
            passed,
            total: allTestCases.length,
            result,
          });
        }
      });
    });
  } catch (error) {
    res.status(500).json({
      error: "Error evaluating submission",
      details: error.message,
    });
  }
};


export {
  compaileCode,
  questionUpload,
  getAllQuestion,
  getQuestionById,
  submitCode,
  getTestcase,
};
