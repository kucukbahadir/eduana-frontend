import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StudentEvaluation = () => {
  const STORAGE_KEY = "studentEvaluations";
  const columns = ["student", "attendance", "independence", "task completion", "creativity", "persistence", "adherence", "notes"];

  // Load students from localStorage or default values
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem(STORAGE_KEY);
    return savedStudents ? JSON.parse(savedStudents) : [
      { name: "Bonnie Green", attendance: "Present", independence: "Independent", taskCompletion: "", creativity: 7, persistence: "Persistent", adherence: "Good", notes: "" },
      { name: "John Smith", attendance: "Absent", independence: "", taskCompletion: "", creativity: "", persistence: "", adherence: "", notes: "Vacation" },
      { name: "Erik Kemp", attendance: "Present", independence: "Occasionally", taskCompletion: "Step 7", creativity: 9, persistence: "Average", adherence: "Bad", notes: "" },
    ];
  });

  // Save to localStorage whenever students change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  const getColorClass = (category, value) => {
    const colorMap = {
      attendance: { Present: "text-green-600 bg-green-100", Absent: "text-red-600 bg-red-100" },
      independence: { Independent: "text-green-600 bg-green-100", Occasionally: "text-yellow-600 bg-yellow-100", Hardly: "text-red-600 bg-red-100" },
      persistence: { Persistent: "text-green-600 bg-green-100", Average: "text-yellow-600 bg-yellow-100", "Quickly gives up": "text-red-600 bg-red-100" },
      adherence: { Good: "text-green-600 bg-green-100", Average: "text-purple-600 bg-purple-100", Bad: "text-red-600 bg-red-100" },
    };
    return colorMap[category][value] || "text-gray-700 bg-gray-100";
  };

  const handleChange = (index, field, value) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;
    setStudents(updatedStudents);
  };

  const handleEndLesson = () => {
    console.log("Final Student Evaluations:", students);
    localStorage.removeItem(STORAGE_KEY); // Clear data from localStorage
    setStudents([]); // Clear state
    console.log("Lesson ended. Data cleared.");
  };

  return (
    <div className="p-6 bg-muted min-h-screen">
      <div className="max-w-6xl mx-auto bg-background p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-2">03 - Leds and Breadboards</h2>
        <p className="text-center text-muted-foreground mb-6">03 - Navigating Fundamental Electronics Level 1</p>
        <h3 className="text-center text-primary-button font-semibold mb-4">Review</h3>

        <table className="w-full border border-border rounded-lg overflow-hidden">
          <thead className="bg-muted text-primary uppercase text-sm">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="p-3 text-left">{column}</th>
            ))}
          </tr>
          </thead>
          <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{student.name}</td>

                {/* Attendance Select */}
                <td className="p-3">
                  <select
                    value={student.attendance}
                    onChange={(e) => handleChange(index, "attendance", e.target.value)}
                    className={`px-2 py-1 border rounded text-sm ${getColorClass("attendance", student.attendance)}`}
                  >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                  </select>
                </td>

                {/* Independence Select */}
                <td className="p-3">
                  <select
                    value={student.independence}
                    onChange={(e) => handleChange(index, "independence", e.target.value)}
                    className={`px-2 py-1 border rounded text-sm ${getColorClass("independence", student.independence)}`}
                  >
                    <option value="">Select</option>
                    <option value="Independent">Independent</option>
                    <option value="Occasionally">Occasionally</option>
                    <option value="Hardly">Hardly</option>
                  </select>
                </td>

                {/* Task Completion Input */}
                <td className="p-3">
                  <input
                    type="text"
                    value={student.taskCompletion}
                    onChange={(e) => handleChange(index, "taskCompletion", e.target.value)}
                    className="px-2 py-1 border rounded w-full text-sm"
                    placeholder="Enter step..."
                  />
                </td>

                {/* Creativity Input (Number) */}
                <td className="p-3">
                  <input
                    type="number"
                    value={student.creativity}
                    onChange={(e) => handleChange(index, "creativity", e.target.value)}
                    className="px-2 py-1 border rounded w-16 text-center text-sm"
                  />
                </td>

                {/* Persistence Select */}
                <td className="p-3">
                  <select
                    value={student.persistence}
                    onChange={(e) => handleChange(index, "persistence", e.target.value)}
                    className={`px-2 py-1 border rounded text-sm ${getColorClass("persistence", student.persistence)}`}
                  >
                    <option value="">Select</option>
                    <option value="Persistent">Persistent</option>
                    <option value="Average">Average</option>
                    <option value="Quickly gives up">Quickly gives up</option>
                  </select>
                </td>

                {/* Adherence Select */}
                <td className="p-3">
                  <select
                    value={student.adherence}
                    onChange={(e) => handleChange(index, "adherence", e.target.value)}
                    className={`px-2 py-1 border rounded text-sm ${getColorClass("adherence", student.adherence)}`}
                  >
                    <option value="">Select</option>
                    <option value="Good">Good</option>
                    <option value="Average">Average</option>
                    <option value="Bad">Bad</option>
                  </select>
                </td>

                {/* Notes Input */}
                <td className="p-3">
                  <input
                    type="text"
                    value={student.notes}
                    onChange={(e) => handleChange(index, "notes", e.target.value)}
                    className="px-2 py-1 border rounded w-full text-sm"
                    placeholder="Enter notes..."
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center text-muted-foreground p-4">
                No students available. Lesson ended.
              </td>
            </tr>
          )}
          </tbody>
        </table>

        <div className="text-center mt-6">
          <Button
            variant={"primary"}
            onClick={handleEndLesson}
          >
            End Lesson
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentEvaluation;