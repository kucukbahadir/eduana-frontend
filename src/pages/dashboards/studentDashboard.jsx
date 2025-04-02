import React from "react";
import Card, { CardContent } from "../../components/Card.jsx";

const Dashboard = () => {
  const leaderboard = [
    { rank: 1, name: "Christian1", status: "Beginner" },
    { rank: 2, name: "Christian2", status: "Beginner" },
    { rank: 3, name: "Christian3", status: "Beginner" },
    { rank: 4, name: "Christian4", status: "Beginner" },
    { rank: 5, name: "Christian5", status: "Beginner" },
    { rank: 6, name: "Christian6", status: "Beginner" },
    { rank: 7, name: "Christian7", status: "Beginner" },
    { rank: 8, name: "Christian8", status: "Beginner" },
    { rank: 9, name: "Christian9", status: "Beginner" }
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
    <div className="flex min-h-screen bg-muted p-6 gap-6">
      <Card className="w-1/3 bg-primary text-primary-foreground p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
        <CardContent>
          <ul>
            {leaderboard.map(({ rank, name, status }) => (
              <li
                key={rank}
                className="flex justify-between items-center bg-primary/90 p-3 rounded-lg mb-2"
              >
                <span className="font-semibold">#{rank}</span>
                <span>{name}</span>
                <span className="text-primary-foreground/60 text-sm">{status}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className="flex-1 bg-background p-6 shadow-lg rounded-lg">
        <h1 className="mb-4">Student Dashboard</h1>
        <CardContent className="grid grid-cols-3 gap-6 text-center">
          {stats.map(({ label, value }, index) => (
            <Card key={index} className="p-4 bg-gray-200 rounded-lg shadow">
              <strong className="text-3xl">{value}</strong>
              <p className="mt-2 text-sm text-muted-foreground">{label}</p>
            </Card>
          ))}
        </CardContent>
        <h3 className="text-2xl font-bold mt-6">Programming Skills</h3>
        <CardContent className="mt-4">
          {skills.map(({ skill, width }, index) => (
            <div key={index} className="mb-3">
              <p className="text-primary/70 font-medium mb-1">{skill}</p>
              <div className="w-full bg-muted h-2 rounded-full">
                <div className={`bg-primary-button h-2 rounded-full ${width}`}></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
