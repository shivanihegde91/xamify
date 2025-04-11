import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from "@mui/material";

const ExamSchedule = () => {
  const [open, setOpen] = useState(false);
  const [examData, setExamData] = useState({ title: "", date: "", startTime: "", endTime: "" });
  const [events, setEvents] = useState([]);

  const handleDateClick = (arg) => {
    setExamData({ ...examData, date: arg.dateStr });
    setOpen(true);
  };

  const handleInputChange = (e) => {
    setExamData({ ...examData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!examData.title || !examData.startTime || !examData.endTime) {
      alert("Please fill all fields!");
      return;
    }

    const newEvent = {
      id: events.length + 1,
      title: `${examData.title} (${examData.startTime} - ${examData.endTime})`,
      start: `${examData.date}T${examData.startTime}`,
      end: `${examData.date}T${examData.endTime}`,
    };

    setEvents([...events, newEvent]);
    setOpen(false);
    setExamData({ title: "", date: "", startTime: "", endTime: "" }); // Reset form
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
          <Button onClick={handleSubmit} variant="contained" color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ExamSchedule;