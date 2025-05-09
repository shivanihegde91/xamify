/*import { useState } from "react";
import service from "../../../appwrite/cong"; // Make sure the path is correct
import './UserResult.css';

function UserResult() {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [java, setJava] = useState('');
  const [python, setPython] = useState('');
  const [c, setC] = useState('');
  const [fds, setFds] = useState('');
  const [ai, setAi] = useState('');
  const [php, setPhp] = useState('');
  const [submittedMarks, setSubmittedMarks] = useState([]);

  async function submitMarks() {
    if (!name || !rollNo || !studentClass || !java || !python || !c || !fds || !ai || !php) {
      alert('Please fill all fields!');
      return;
    }

    try {
      const res=await service.UploadMarksData(
        name,
        rollNo,
        studentClass,
        parseInt(java),
        parseInt(python),
        parseInt(c),
        parseInt(fds),
        parseInt(ai),
        parseInt(php)
      );

      alert('Marks Submitted Successfully!');

      setSubmittedMarks([...submittedMarks, {
        name,
        rollNo,
        studentClass,
        java,
        python,
        c,
        fds,
        ai,
        php
      }]);

      setName('');
      setRollNo('');
      setStudentClass('');
      setJava('');
      setPython('');
      setC('');
      setFds('');
      setAi('');
      setPhp('');
    } catch (error) {
      console.error("Error submitting marks:", error);
      alert('Error submitting marks. Try again.');
    }
  }

  return (
    <div className="user-result-container">

      <h2>Enter Student Marks</h2>

      <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Roll Number" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
      <input type="text" placeholder="Class" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} />
      <input type="number" placeholder="Java" value={java} onChange={(e) => setJava(e.target.value)} />
      <input type="number" placeholder="Python" value={python} onChange={(e) => setPython(e.target.value)} />
      <input type="number" placeholder="C" value={c} onChange={(e) => setC(e.target.value)} />
      <input type="number" placeholder="FDS" value={fds} onChange={(e) => setFds(e.target.value)} />
      <input type="number" placeholder="AI" value={ai} onChange={(e) => setAi(e.target.value)} />
      <input type="number" placeholder="PHP" value={php} onChange={(e) => setPhp(e.target.value)} />

      <button 
        onClick={submitMarks}
        style={{ padding: '10px 20px', marginTop: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Submit Marks
      </button>

      {submittedMarks.length > 0 && (
        <>
          <h3>Submitted Marks</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Roll No</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Class</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Java</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Python</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>C</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>FDS</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>AI</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>PHP</th>
              </tr>
            </thead>
            <tbody>
              {submittedMarks.map((mark, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{mark.name}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{mark.rollNo}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{mark.studentClass}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{mark.java}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{mark.python}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{mark.c}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{mark.fds}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{mark.ai}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{mark.php}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default UserResult;*/
import React, { useState } from "react";
import service from "../../../appwrite/cong";
import './UserResult.css'; // Ensure the CSS file is properly linked

function UserResult() {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [java, setJava] = useState('');
  const [python, setPython] = useState('');
  const [c, setC] = useState('');
  const [fds, setFds] = useState('');
  const [ai, setAi] = useState('');
  const [php, setPhp] = useState('');
  const [submittedMarks, setSubmittedMarks] = useState([]);

  async function submitMarks(e) {
    e.preventDefault();

    // Validate if all fields are filled
    if (!name || !rollNo || !studentClass || !java || !python || !c || !fds || !ai || !php) {
      alert('Please fill all fields!');
      return;
    }

    // Mock submission process (replace with actual API call)
    try {
      const res=await service.UploadMarksData(
        name,
        rollNo,
        studentClass,
        parseInt(java),
        parseInt(python),
        parseInt(c),
        parseInt(fds),
        parseInt(ai),
        parseInt(php)
      );
     setSubmittedMarks([...submittedMarks, {
        name,
        rollNo,
        studentClass,
        java,
        python,
        c,
        fds,
        ai,
        php
      }]);
      alert('Marks Submitted Successfully!');
      console.log(res);
      

      // Reset the form
      setName('');
      setRollNo('');
      setStudentClass('');
      setJava('');
      setPython('');
      setC('');
      setFds('');
      setAi('');
      setPhp('');
    } catch (error) {
      console.error("Error submitting marks:", error);
      alert('Error submitting marks. Try again.');
    }
  }

  return (
    <div className="user-result-container">
      <h2>Enter Student Marks</h2>

      {/* Form to enter student marks */}
      <form className="user-result-form" onSubmit={submitMarks}>
        <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Roll Number" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
        <input type="text" placeholder="Class" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} />
        <input type="number" placeholder="Java" value={java} onChange={(e) => setJava(e.target.value)} />
        <input type="number" placeholder="Python" value={python} onChange={(e) => setPython(e.target.value)} />
        <input type="number" placeholder="C" value={c} onChange={(e) => setC(e.target.value)} />
        <input type="number" placeholder="FDS" value={fds} onChange={(e) => setFds(e.target.value)} />
        <input type="number" placeholder="AI" value={ai} onChange={(e) => setAi(e.target.value)} />
        <input type="number" placeholder="PHP" value={php} onChange={(e) => setPhp(e.target.value)} />
        <button type="submit">Submit Marks</button>
      </form>

      {/* Displaying submitted marks in a table */}
      {submittedMarks.length > 0 && (
        <>
          <h3>Submitted Marks</h3>
          <table className="marks-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
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
              {submittedMarks.map((mark, index) => (
                <tr key={index}>
                  <td>{mark.name}</td>
                  <td>{mark.rollNo}</td>
                  <td>{mark.studentClass}</td>
                  <td>{mark.java}</td>
                  <td>{mark.python}</td>
                  <td>{mark.c}</td>
                  <td>{mark.fds}</td>
                  <td>{mark.ai}</td>
                  <td>{mark.php}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default UserResult;
