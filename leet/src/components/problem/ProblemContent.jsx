import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../layout/LoadingSpinner";

export default function ProblemContent() {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/questions/${id}`,
          { withCredentials: true }
        );
        console.log(res)
        setProblem(res.data.question);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching problem:",  err.res?.data || err.message);
        setError("Failed to load the question.");
        setLoading(false);
      }
    };

    fetchProblem();
  }, [id]);

  if (loading)
    return (
      <div className="loading-indicator">
        <div className="spinner"></div>
        <p>Loading Your Question...</p>
      </div>
    );
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!problem) return null;

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <h1 className="text-xl font-bold mb-2"> {problem.title}</h1>
      <div className="flex items-center space-x-2 mb-4">
        {problem.difficulty?.map((diff, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-green-900 text-green-400 rounded text-sm">
            {diff}
          </span>
        ))}
        {problem.topics?.map((topic, index) => (
          <button
            key={index}
            className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
            {topic}
          </button>
        ))}
        {problem.companies?.map((company, index) => (
          <button
            key={index}
            className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
            {company}
          </button>
        ))}
      </div>

      <p className="mb-4">{problem.description}</p>

      <div className="bg-gray-800 p-3 rounded mb-4">
        <div>
          <span className="font-bold">Input:</span> {problem.inputFormat}
        </div>
        <div>
          <span className="font-bold">Output:</span> {problem.outputFormat}
        </div>
      </div>
    </div>
  );
}

// import problemDescription from '../../data/problemData';

// export default function ProblemContent() {
//   return (
//     <div className="flex-1 overflow-y-auto p-4">
//       <h1 className="text-xl font-bold mb-2">{problemDescription.id}. {problemDescription.title}</h1>
//       <div className="flex items-center space-x-2 mb-4">
//         <span className="px-2 py-1 bg-green-900 text-green-400 rounded text-sm">{problemDescription.difficulty}</span>
//         <button className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">Topics</button>
//         <button className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">Companies</button>
//         <button className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">Hint</button>
//       </div>

//       <p className="mb-4">{problemDescription.description}</p>
//       <p className="mb-4">{problemDescription.notes}</p>

//       {problemDescription.examples.map((example, index) => (
//         <div className="mb-4" key={index}>
//           <h2 className="font-bold mb-2">Example {index + 1}:</h2>
//           <div className="bg-gray-800 p-3 rounded mb-2">
//             <div><span className="font-bold">Input:</span> {example.input}</div>
//             <div><span className="font-bold">Output:</span> {example.output}</div>
//             {example.explanation && (
//               <div><span className="font-bold">Explanation:</span> {example.explanation}</div>
//             )}
//           </div>
//         </div>
//       ))}

//       <div className="mb-4">
//         <h2 className="font-bold mb-2">Constraints:</h2>
//         <ul className="list-disc pl-5">
//           {problemDescription.constraints.map((constraint, index) => (
//             <li key={index} className="mb-1">{constraint}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
