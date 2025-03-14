import { useState } from "react";

const StudentEvaluation = () => {
  const [students, setStudents] = useState([
    { name: "Bonnie Green", attendance: "Present", independence: "Independent", taskCompletion: "", creativity: 7, persistence: "Persistent", adherence: "Good", notes: "" },
    { name: "John Smith", attendance: "Absent", independence: "", taskCompletion: "", creativity: "", persistence: "", adherence: "", notes: "Vacation" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;
    setStudents(updatedStudents);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-2">03 - Leds and Breadboards</h2>
        <p className="text-center text-gray-500 mb-6">03 - Navigating Fundamental Electronics Level 1</p>
        <h3 className="text-center text-blue-500 font-semibold mb-4">Review</h3>

        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
          <tr>
            <th className="p-3 text-left">Student</th>
            <th className="p-3 text-left">Attendance</th>
            <th className="p-3 text-left">Independence</th>
            <th className="p-3 text-left">Task Completion</th>
            <th className="p-3 text-left">Creativity</th>
            <th className="p-3 text-left">Persistence</th>
            <th className="p-3 text-left">Adherence</th>
            <th className="p-3 text-left">Notes</th>
          </tr>
          </thead>
          <tbody>
          {students.map((student, index) => (
            <tr key={index} className="border-b">
              <td className="p-3">{student.name}</td>

              <td className="p-3">
                <select value={student.attendance} onChange={(e) => handleChange(index, "attendance", e.target.value)} className="px-2 py-1 border rounded text-sm">
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>

              <td className="p-3">
                <select value={student.independence} onChange={(e) => handleChange(index, "independence", e.target.value)} className="px-2 py-1 border rounded text-sm">
                  <option value="">Select</option>
                  <option value="Independent">Independent</option>
                  <option value="Occasionally">Occasionally</option>
                  <option value="Hardly">Hardly</option>
                </select>
              </td>

              <td className="p-3">
                <input type="text" value={student.taskCompletion} onChange={(e) => handleChange(index, "taskCompletion", e.target.value)} className="px-2 py-1 border rounded w-full text-sm" />
              </td>

              <td className="p-3">
                <input type="number" value={student.creativity} onChange={(e) => handleChange(index, "creativity", e.target.value)} className="px-2 py-1 border rounded w-16 text-center text-sm" />
              </td>

              <td className="p-3">
                <select value={student.persistence} onChange={(e) => handleChange(index, "persistence", e.target.value)} className="px-2 py-1 border rounded text-sm">
                  <option value="">Select</option>
                  <option value="Persistent">Persistent</option>
                  <option value="Average">Average</option>
                  <option value="Quickly gives up">Quickly gives up</option>
                </select>
              </td>

              <td className="p-3">
                <select value={student.adherence} onChange={(e) => handleChange(index, "adherence", e.target.value)} className="px-2 py-1 border rounded text-sm">
                  <option value="">Select</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Bad">Bad</option>
                </select>
              </td>

              <td className="p-3">
                <input type="text" value={student.notes} onChange={(e) => handleChange(index, "notes", e.target.value)} className="px-2 py-1 border rounded w-full text-sm" />
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentEvaluation;
