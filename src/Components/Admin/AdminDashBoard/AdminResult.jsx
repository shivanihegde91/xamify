import { useState, useEffect } from "react";
import service from "../../../appwrite/cong"; // Adjust path if cong.js is in a different folder

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
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2>Admin Result Page</h2>

      {/* Table to display results */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thStyle}>Roll No</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Class</th>
            <th style={thStyle}>Java</th>
            <th style={thStyle}>Python</th>
            <th style={thStyle}>C</th>
            <th style={thStyle}>FDS</th>
            <th style={thStyle}>AI</th>
            <th style={thStyle}>PHP</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.$id}>
              <td style={tdStyle}>{result.RollNumber}</td>
              <td style={tdStyle}>{result.StudentName}</td>
              <td style={tdStyle}>{result.Class}</td>
              <td style={getMarkStyle(result.java)}>{result.java}</td>
              <td style={getMarkStyle(result.python)}>{result.python}</td>
              <td style={getMarkStyle(result.c)}>{result.c}</td>
              <td style={getMarkStyle(result.fds)}>{result.fds}</td>
              <td style={getMarkStyle(result.ai)}>{result.ai}</td>
              <td style={getMarkStyle(result.php)}>{result.php}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Style objects
const thStyle = {
  border: "1px solid black",
  padding: "8px",
  backgroundColor: "#f2f2f2"
};

const tdStyle = {
  border: "1px solid black",
  padding: "8px"
};

// Function to conditionally color mark cells
function getMarkStyle(mark) {
  const color =
    parseInt(mark) < 21
      ? "red"
      : parseInt(mark) > 90
      ? "green"
      : "black";

  return { ...tdStyle, color };
}

export default AdminResult;
