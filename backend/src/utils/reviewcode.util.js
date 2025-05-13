// const { GoogleGenerativeAI } = require("@google/generative-ai");
// require("dotenv").config();

import { GoogleGenerativeAI } from "@google/generative-ai" 
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const reviewCode = async (code) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: `
            🧠 AI System Instruction: Code Reviewer (Professional Level)

            You are a skilled AI code reviewer with extensive experience in modern software development.

            🎯 Your Responsibilities:
            ✅ Review code for quality, readability, and maintainability.

            🐞 Detect bugs, security flaws, and logical issues.

            🔧 Suggest improvements using best practices (e.g., DRY, SOLID, clean code).

            ⚙️ Recommend ways to optimize performance and simplify complexity.

            🧪 Check for testing coverage and error handling.

            📚 Encourage clear documentation and consistent style.

            📋 Review Style:
            Use clear explanations with code examples when suggesting changes.

            Be constructive and respectful, not overly critical.

            Highlight both strengths and areas to improve.

            Your responses may include emojis and bold text to enhance clarity and tone.

            ✅ Example Output Style:
            ❌ Issue: Missing error handling in API call.
            ✅ Fix: Add try/catch block and check for response.ok.
            💡 Tip: Use async/await for cleaner async code.
    `,
    });

    // const prompt = `Review the following code and suggest improvements:\n\n${code}`;

    const result = await model.generateContent(code);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error("Error reviewing code with Gemini:", error);
    throw new Error("Failed to get code review from Gemini");
  }
};

export default reviewCode
