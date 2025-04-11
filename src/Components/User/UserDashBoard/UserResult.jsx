//UserResult.jsx
import React, { useState } from "react";
import { Container, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import axios from "axios";

const publishResults = async () => {
  try {
    await axios.put("http://localhost:8000/api/results/publish-results");
    alert("Results published successfully!");
  } catch (error) {
    console.error("Error publishing results:", error);
    alert("Failed to publish results.");
  }
};

export default function UserResult() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: "", rollNo: "", class: "", subject: "", marks: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!formData.name || !formData.rollNo || !formData.class || !formData.subject || !formData.marks) {
      alert("Please fill in all fields");
      return;
    }
    setStudents([...students, { ...formData, id: Date.now() }]);
    setFormData({ name: "", rollNo: "", class: "", subject: "", marks: "" });
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleEdit = (id) => {
    const student = students.find((s) => s.id === id);
    setFormData(student);
    setStudents(students.filter((s) => s.id !== id));
  };

  const publishResults = async () => {
    try {
      await axios.post("http://localhost:8000/api/results", { results: students });
      alert("Results Published Successfully!");
      setStudents([]); // Clear results after publishing
    } catch (error) {
      console.error("Error publishing results", error);
      alert("Failed to publish results");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>User Result Management</Typography>

      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Roll No" name="rollNo" value={formData.rollNo} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Class" name="class" value={formData.class} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Subject" name="subject" value={formData.subject} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Marks" name="marks" type="number" value={formData.marks} onChange={handleChange} fullWidth margin="normal" />

      <Button variant="contained" color="primary" onClick={handleAdd} style={{ marginRight: "10px" }}>Add</Button>
      {/*<Button variant="contained" color="secondary" onClick={handlePublish} disabled={students.length === 0}>Publish</Button>

      {/* Publish Button for Final Publishing */}
      <Button variant="contained" color="success" onClick={publishResults} style={{ marginLeft: "10px" }}>
        📢 Publish Results
      </Button>

      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Roll No</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Marks</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.rollNo}</TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>{student.subject}</TableCell>
                <TableCell>{student.marks}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(student.id)} color="primary">Edit</Button>
                  <Button onClick={() => handleDelete(student.id)} color="error">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
