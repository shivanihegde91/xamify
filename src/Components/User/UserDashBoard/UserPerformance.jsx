import React, { useEffect, useState } from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import service from "../../../appwrite/cong"; // adjust path if needed

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Performance() {
  const [averageMarks, setAverageMarks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await service.getAllMarks();
        if (data && data.length > 0) {
          const subjects = ["java", "python", "c", "fds", "ai", "php"];
          const totals = { java: 0, python: 0, c: 0, fds: 0, ai: 0, php: 0 };

          data.forEach((student) => {
            subjects.forEach((subject) => {
              totals[subject] += parseInt(student[subject]) || 0;
            });
          });

          const averages = subjects.map(
            (subject) => totals[subject] / data.length
          );
          setAverageMarks(averages);
        }
      } catch (error) {
        console.error("Failed to fetch performance data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const chartData = {
    labels: ["Java", "Python", "C", "FDS", "AI", "PHP"],
    datasets: [
      {
        label: "Average Marks",
        data: averageMarks || [],
        backgroundColor: "#3f51b5",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Student Performance Overview" },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Performance Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        This chart shows average marks based on student results.
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : averageMarks ? (
        <Bar data={chartData} options={options} />
      ) : (
        <Typography color="error">No data available.</Typography>
      )}
    </Container>
  );
}
  