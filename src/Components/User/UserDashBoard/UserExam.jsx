import React, { useEffect, useState } from "react";
import "./UserExam.css";
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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

      <Container className="exam-container">
        <Typography variant="h4" gutterBottom className="exam-title">
        <EventIcon style={{ color: "#003366" }} />
        Exam Timetable
        </Typography>

        <TableContainer component={Paper}>
          <Table className="exam-table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell><AccessTimeIcon fontSize="small" /> Start Time</TableCell>
                <TableCell><AccessTimeIcon fontSize="small" /> End Time</TableCell>

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
                  <TableCell colSpan={4} className="no-data-row">
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