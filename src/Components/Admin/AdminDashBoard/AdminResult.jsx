import { useState, useEffect } from "react";
import service from "../../../appwrite/cong"; // Adjust path if needed
import "./AdminResult.css"; // 💡 Add this

function AdminResult() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults();
  }, []);

  async function fetchResults() {
    try {
      const res = await service.getAllMarks();
      setResults(res);
    } catch (error) {
      console.error("Error fetching marks:", error);
    }
  }

  return (
    <div className="admin-result-container">
      <h2 className="admin-result-title">📊  Result </h2>

      <div className="table-wrapper">
        <table className="result-table">
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Class</th>
              <th>Java</th>
              <th>Python</th>
              <th>C</th>
              <th>FDS</th>
              <th>AI</th>
              <th>PHP</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.$id}>
                <td>{result.RollNumber}</td>
                <td>{result.StudentName}</td>
                <td>{result.Class}</td>
                <td className={getMarkClass(result.java)}>{result.java}</td>
                <td className={getMarkClass(result.python)}>{result.python}</td>
                <td className={getMarkClass(result.c)}>{result.c}</td>
                <td className={getMarkClass(result.fds)}>{result.fds}</td>
                <td className={getMarkClass(result.ai)}>{result.ai}</td>
                <td className={getMarkClass(result.php)}>{result.php}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 💡 Class-based color logic
function getMarkClass(mark) {
  const score = parseInt(mark);
  if (score < 21) return "mark-fail";
  if (score > 90) return "mark-top";
  return "mark-normal";
}

export default AdminResult;
