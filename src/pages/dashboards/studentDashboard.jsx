import React from "react";
import Card, { CardContent } from "../../components/Card.jsx";


const Dashboard = () => {
  const leaderboard = [
    { rank: 1, name: "Ефим", status: "Member" },
    { rank: 2, name: "hacked", status: "Member" },
    { rank: 3, name: "cowou1234", status: "Member" },
    { rank: 4, name: "kl matria 88", status: "Member" },
    { rank: 5, name: "SARTHAK SAVANI", status: "Member" },
    { rank: 6, name: "Lemon4ik", status: "Member" },
    { rank: 7, name: "Eduardoo", status: "Member" },
    { rank: 8, name: "Cristian", status: "Member" },
    { rank: 9, name: "greatkoroglu", status: "Member" }
  ];

  const stats = [
    { label: "Lesson Time", value: "4500 min" },
    { label: "Lessons Total", value: "50" },
    { label: "Courses", value: "4" },
    { label: "Solo Projects", value: "22" },
    { label: "Team Projects", value: "10" },
    { label: "Classes Total", value: "5" }
  ];

  const skills = [
    { skill: "Scratch", width: "w-full" },
    { skill: "HTML5", width: "w-3/4" },
    { skill: "JavaScript", width: "w-1/2" },
    { skill: "Python", width: "w-1/4" }
  ];

  return (

  );
};

export default Dashboard;
