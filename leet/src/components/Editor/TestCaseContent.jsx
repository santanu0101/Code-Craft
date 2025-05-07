import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TestCaseContent() {
  const { id } = useParams();
  // console.log(id);
  const [testCases, setTestCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch test cases from the backend API
  useEffect(() => {
    const fetchTestCases = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/questions/testcase/${id}`
        ); // Replace :id with actual ID
        setTestCases(response.data.testcase);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch test cases", err);
        setLoading(false);
      }
    };

    fetchTestCases();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading)
    return (
      <div className="loading-indicator">
        <div className="spinner"></div>
        <p>Loading Your Testcase...</p>
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <h2 className="text-lg font-semibold mb-4">Testcases</h2>
      {testCases.sampleTestCases?.map((testCase, index) => (
        <div key={index} className="bg-gray-800 p-4 mb-4 rounded">
          <div>
            <span className="font-bold">Input:</span> {testCase.input}
          </div>
          <div>
            <span className="font-bold">Expected Output:</span>{" "}
            {testCase.expectedOutput}
          </div>
        </div>
      ))}

      {/* <h3 className="text-md font-semibold mb-2">Hidden Test Cases</h3>
      {testCases.hiddenTestCase?.map((testCase, index) => (
        <div key={index} className="bg-gray-800 p-4 mb-4 rounded">
          <div><span className="font-bold">Input:</span> {testCase.input}</div>
          <div><span className="font-bold">Expected Output:</span> {testCase.expectedOutput}</div>
        </div>
      ))} */}
    </div>
  );
}

// import testCases from '../../data/testCaseData';

// export default function TestCaseContent() {
//   return (
//     <div className="flex-1 overflow-y-auto p-4">
//       <h2 className="text-lg font-semibold mb-4">Testcases</h2>
//       {testCases.map((testCase, index) => (
//         <div key={index} className="bg-gray-800 p-4 mb-4 rounded">
//           <div><span className="font-bold">Input:</span> {testCase.nums}, Target: {testCase.target}</div>
//         </div>
//       ))}
//     </div>
//   );
// }
