import { useState, useRef } from "react";
import axios from "axios";
import TopNavbar from "../Layout/TopNavbar";
import BottomBar from "../Layout/BottomBar";
import ProblemTabs from "../Problem/ProblemTabs";
import ProblemContent from "../Problem/ProblemContent";
import CodeEditorHeader from "../Editor/CodeEditorHeader";
import CodeEditor from "../Editor/CodeEditor";
import TestCaseTabs from "../Editor/TestCaseTabs";
import TestCaseContent from "../Editor/TestCaseContent";
import { useParams } from "react-router-dom";

export default function LeetCodeInterface() {
  const {id} = useParams();
  const [code, setCode] = useState("");
  // const [loadingCompile, setLoadingCompile] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  // const [input, setInput] = useState("");
  const [problemTab, setProblemTab] = useState("description");
  const [testcaseTab, setTestcaseTab] = useState("testcases");
  const [language, setLanguage] = useState('js');
  const [leftWidth, setLeftWidth] = useState(50); // % width for problem panel
  const [editorHeight, setEditorHeight] = useState(60); // % height for code editor

  const resizingX = useRef(false);
  const resizingY = useRef(false);

  const handleMouseDownX = () => (resizingX.current = true);
  const handleMouseDownY = () => (resizingY.current = true);

  const handleMouseMove = (e) => {
    if (resizingX.current) {
      const newWidth = (e.clientX / window.innerWidth) * 100;
      if (newWidth > 20 && newWidth < 80) {
        setLeftWidth(newWidth);
      }
    }

    if (resizingY.current) {
      const container = document.getElementById("editor-right-panel");
      const rect = container.getBoundingClientRect();
      const offsetY = e.clientY - rect.top;
      const newHeight = (offsetY / rect.height) * 100;
      if (newHeight > 20 && newHeight < 80) {
        setEditorHeight(newHeight);
      }
    }
  };

  const handleMouseUp = () => {
    resizingX.current = false;
    resizingY.current = false;
  };

  // function getFunctionName(code) {
  //   // For JavaScript and Python, we can simply extract the function name
  //   const match = code.match(/function\s+([a-zA-Z0-9_]+)\s*\(/) || 
  //                 code.match(/def\s+([a-zA-Z0-9_]+)\s*\(/) || 
  //                 code.match(/const\s+([a-zA-Z0-9_]+)\s*=/) ||
  //                 code.match(/([a-zA-Z0-9_]+)\s*=\s*\(/); // handle const function expressions in JS and Python
  
  //   return match ? match[1] : "unknownFunction";
  // }
  
  // const handleCompile = async () => {
  //   setLoadingCompile(true);
  
  //   try {
  //     // Step 1: Fetch testcases
  //     const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/questions/testcase/${id}`);
  //     const { sampleTestCases } = data.testcase;
  
  //     // Just use the first sample test case for run
  //     const testCase = sampleTestCases[0];
  
  //     // Step 2: Prepare the user's code and input
  //     let wrappedCode;
  
  //     if (language === "js") {
  //       // For JavaScript, just ensure the function is called and result is logged
  //       wrappedCode = `
  //         ${code}
  //         console.log(${getFunctionName(code)}(...${testCase.input}));
  //       `;
  //     } else if (language === "py") {
  //       // For Python, we use print instead of console.log
  //       wrappedCode = `
  //         ${code}
  //         print(${getFunctionName(code)}(*${testCase.input}));
  //       `;
  //     } else if (language === "cpp") {
  //       // For C++, ensure that we output results with cout
  //       wrappedCode = `
  //         ${code}
  //         std::cout << ${getFunctionName(code)}(${testCase.input}) << std::endl;
  //       `;
  //     } else {
  //       // Unsupported language case
  //       alert(`⚠️ Unsupported language: ${language}. Please choose a supported language.`);
  //       setLoadingCompile(false);
  //       return; // Exit the function if unsupported language is selected
  //     }
  
  //     // Step 3: Send the wrapped code to the backend for compilation
  //     const compileRes = await axios.post(
  //       `${import.meta.env.VITE_BACKEND_URL}/api/compile`,
  //       {
  //         code: wrappedCode,
  //         language,  // Ensure that the correct language value is being passed
  //         input: "" // we have embedded input directly in the code
  //       }
  //     );
  
  //     const output = (compileRes.data.output || "").trim();
  //     const expected = (testCase.expectedOutput || "").trim();
  
  //     // Ensure both output and expected output are serialized to strings and stripped of unnecessary whitespace
  //     if (JSON.stringify(JSON.parse(output)) === JSON.stringify(JSON.parse(expected))) {
  //       alert("✅ Output matches expected output!");
  //     } else {
  //       alert(`❌ Output mismatch!\nYour Output: ${output}\nExpected: ${expected}`);
  //     }
  
  //   } catch (error) {
  //     console.error("Compile error:", error);
  //     alert("An error occurred while compiling.");
  //   } finally {
  //     setLoadingCompile(false);
  //   }
  // };
  
  
  // const cleanJSON = (str) => {
  //   try {
  //     return JSON.stringify(JSON.parse(str.replace(/\s/g, "")));
  //   } catch {
  //     return null;
  //   }
  // };
  
  const handleSubmit = async () => {
    setLoadingSubmit(true);
    console.log(language)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/questions/${id}/submit`,
        {
          code,
          language: language === "cpp" ? "cpp" : language === "py" ? "py" : "js",
        },
        { withCredentials: true }
      );
  
      const { passed, total, result } = response.data;
      console.log(passed);
  
      if (passed === total) {
        alert("🎉 All test cases passed! Question marked as solved.");
      } else {
        const failedCases = result.filter(r => r.status !== "true");
        alert(`❌ ${total - passed} test case(s) failed.\nFirst failed case:\nOutput: ${failedCases[0].output}\nExpected: ${failedCases[0].expected}`);
      }
  
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred during submission.");
    } finally {
      setLoadingSubmit(false);
    }
  };
  
  



  return (
    <div
      className="flex flex-col h-screen bg-gray-900 text-white"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}>
      {/* <TopNavbar /> */}

      <div className="flex flex-1 overflow-hidden">
        {/* Left Side - Problem Panel */}
        <div
          className="flex flex-col border-r border-gray-700 overflow-auto"
          style={{ width: `${leftWidth}%` }}>
          <ProblemTabs activeTab={problemTab} setActiveTab={setProblemTab} />
          <ProblemContent />
        </div>

        {/* Vertical Resizer */}
        <div
          className="w-1 bg-gray-600 cursor-col-resize"
          onMouseDown={handleMouseDownX}
        />

        {/* Right Side - Editor + Test Cases */}
        <div
          id="editor-right-panel"
          className="flex flex-col flex-1 overflow-hidden">
          <CodeEditorHeader language={language} setLanguage={setLanguage} onSubmit={handleSubmit}  loadingSubmit={loadingSubmit}/>

          <div
            style={{ height: `${editorHeight}%` }}
            className="overflow-hidden">
             <CodeEditor code={code} setCode={setCode} language={language} />
          </div>

          {/* Horizontal Resizer */}
          <div
            className="h-1 bg-gray-600 cursor-row-resize"
            onMouseDown={handleMouseDownY}
          />

          <div
            style={{ height: `${100 - editorHeight}%` }}
            className="overflow-y-auto">
            <TestCaseTabs
              activeTab={testcaseTab}
              setActiveTab={setTestcaseTab}
            />
            <TestCaseContent />
          </div>
        </div>
      </div>

      {/* <BottomBar /> */}
    </div>
  );
}
