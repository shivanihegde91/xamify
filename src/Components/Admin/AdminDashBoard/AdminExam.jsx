import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  DialogActions,
} from "@mui/material";

import service from "../../../appwrite/cong"; // Adjust the path based on your folder structure

const ExamSchedule = () => {
  const [open, setOpen] = useState(false);
  const [examData, setExamData] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
  });
  const [events, setEvents] = useState([]);

  // Fetch exams from Appwrite when component mounts
  useEffect(() => {
    const fetchExams = async () => {
      const res = await service.getAllExam();
      if (res) {
        const mappedEvents = res.map((exam) => ({
          id: exam.$id,
          title: `${exam.subject} (${exam.startTime} - ${exam.endTime})`,
          start: `${exam.date}T${exam.startTime}`,
          end: `${exam.date}T${exam.endTime}`,
        }));
        setEvents(mappedEvents);
      }
    };

    fetchExams();
  }, []);

  const handleDateClick = (arg) => {
    setExamData({ ...examData, date: arg.dateStr });
    setOpen(true);
  };

  const handleInputChange = (e) => {
    setExamData({ ...examData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!examData.title || !examData.startTime || !examData.endTime) {
      alert("Please fill all fields!");
      return;
    }

    if (examData.startTime >= examData.endTime) {
      alert("Start time must be before end time.");
      return;
    }

    const response = await service.UploadExamTimeTable(
      examData.title,
      examData.date,
      examData.startTime,
      examData.endTime
    );

    if (response) {
      const newEvent = {
        id: response.$id,
        title: `${examData.title} (${examData.startTime} - ${examData.endTime})`,
        start: `${examData.date}T${examData.startTime}`,
        end: `${examData.date}T${examData.endTime}`,
      };

      setEvents([...events, newEvent]);
      setOpen(false);
      setExamData({ title: "", date: "", startTime: "", endTime: "" });
    } else {
      alert("Failed to save exam schedule.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Exam Schedule</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        editable
      />

      {/* Dialog for Adding Exam */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Exam Schedule</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Subject"
            name="title"
            value={examData.title}
            onChange={handleInputChange}
            margin="dense"
          />
          <TextField
            fullWidth
            type="time"
            label="Start Time"
            name="startTime"
            value={examData.startTime}
            onChange={handleInputChange}
            margin="dense"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            type="time"
            label="End Time"
            name="endTime"  
            value={examData.endTime}
            onChange={handleInputChange}
            margin="dense"
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ExamSchedule;
