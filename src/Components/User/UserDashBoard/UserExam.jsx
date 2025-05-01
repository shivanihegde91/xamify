import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import service from "../../../appwrite/cong"; // Adjust the path if needed

export default function UserExam() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      const res = await service.getAllExam();
      if (res) {
        const mappedEvents = res.map((exam) => ({
          id: exam.$id,
          subject: exam.subject,
          date: exam.date,
          startTime: exam.startTime,
          endTime: exam.endTime,
        }));
        setEvents(mappedEvents);
      }
    };

    fetchExams();
  }, []);

  return (
    <Container style={{ marginTop: "40px" }}>
      <Typography variant="h4" gutterBottom>
        Exam Timetable
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Subject</strong></TableCell>
              <TableCell><strong>Start Time</strong></TableCell>
              <TableCell><strong>End Time</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.date}</TableCell>
                <TableCell>{event.subject}</TableCell>
                <TableCell>{event.startTime}</TableCell>
                <TableCell>{event.endTime}</TableCell>
              </TableRow>
            ))}
            {events.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No exam schedules available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
