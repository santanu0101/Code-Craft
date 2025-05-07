import { Play, CheckCircle } from "lucide-react";

export default function CodeEditorHeader({ language, setLanguage, onSubmit, onRun, loadingCompile, loadingSubmit }) {
  
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <select
          className="bg-gray-800 text-white p-2 rounded"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="js">JavaScript</option>
          <option value="py">Python</option>
          <option value="cpp">C++</option>
        </select>
      </div>
      <div className="flex space-x-3">
      <button
          onClick={onRun}
          disabled={loadingCompile}
          className={`px-4 py-1 rounded flex items-center ${loadingCompile ? "bg-gray-500" : "bg-green-600"} text-white`}
        >
          {loadingCompile ? "Running..." : <><Play size={16} className="mr-1" /> Run</>}
        </button>

        <button
          onClick={onSubmit}
          disabled={loadingSubmit}
          className={`px-4 py-1 rounded flex items-center ${loadingSubmit ? "bg-gray-500" : "bg-green-600"} text-white`}
        >
          {loadingSubmit ? "Submitting..." : <><CheckCircle size={16} className="mr-1" /> Submit</>}
        </button>
      </div>
    </div>
  );
}












// import { Play, CheckCircle } from "lucide-react";

// export default function CodeEditorHeader() {
//   return (
//     <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
//       <div className="flex items-center space-x-4">
//         <select className="bg-gray-800 text-white p-2 rounded">
//           <option value="javascript">JavaScript</option>
//           <option value="python">Python</option>
//           <option value="cpp">C++</option>
//         </select>
//       </div>
//       <div className="flex space-x-3">
//       <button className="bg-green-600 text-white px-4 py-1 rounded flex items-center">
//           <Play size={16} className="mr-1" /> Run
//         </button>
//       <button className="bg-green-600 text-white px-4 py-1 rounded flex items-center">
//           <CheckCircle size={16} className="mr-1" /> Submit
//         </button>
//       </div>
//     </div>
//   );
// }
