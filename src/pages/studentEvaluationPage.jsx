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
    <div>
      <h2>Student Evaluation</h2>
      <table border="1">
        <thead>
        <tr>
          <th>Student</th>
          <th>Attendance</th>
          <th>Independency</th>
          <th>Task Completion</th>
          <th>Creativity</th>
          <th>Persistence</th>
          <th>Adherence</th>
          <th>Notes</th>
        </tr>
        </thead>
        <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>
              <select value={student.attendance} onChange={(e) => handleChange(index, "attendance", e.target.value)}>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
              </select>
            </td>
            <td>
              <select value={student.independence} onChange={(e) => handleChange(index, "independence", e.target.value)}>
                <option value="">Select</option>
                <option value="Independent">Independent</option>
                <option value="Occasionally">Occasionally</option>
                <option value="Hardly">Hardly</option>
              </select>
            </td>
            <td>
              <input type="text" value={student.taskCompletion} onChange={(e) => handleChange(index, "taskCompletion", e.target.value)} />
            </td>
            <td>
              <input type="number" value={student.creativity} onChange={(e) => handleChange(index, "creativity", e.target.value)} />
            </td>
            <td>
              <select value={student.persistence} onChange={(e) => handleChange(index, "persistence", e.target.value)}>
                <option value="">Select</option>
                <option value="Persistent">Persistent</option>
                <option value="Average">Average</option>
                <option value="Quickly gives up">Quickly gives up</option>
              </select>
            </td>
            <td>
              <select value={student.adherence} onChange={(e) => handleChange(index, "adherence", e.target.value)}>
                <option value="">Select</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Bad">Bad</option>
              </select>
            </td>
            <td>
              <input type="text" value={student.notes} onChange={(e) => handleChange(index, "notes", e.target.value)} />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentEvaluation;
