import { useState } from "react";

const StudentManagement = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Bonnie Green", age: 7, selected: false },
    { id: 2, name: "John Smith", age: 8, selected: false },
    { id: 3, name: "Erik Kemp", age: 9, selected: false },
  ]);

  const toggleSelectStudent = (id) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, selected: !student.selected } : student
    ));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Student Management</h2>

      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
        <tr>
          <th className="p-3 text-left">Select</th>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Age</th>
        </tr>
        </thead>
        <tbody>
        {students.map(student => (
          <tr key={student.id} className={`border-b ${student.selected ? "bg-green-100" : "bg-white"}`}>
            <td className="p-3">
              <input
                type="checkbox"
                checked={student.selected}
                onChange={() => toggleSelectStudent(student.id)}
                className="w-4 h-4 accent-blue-500"
              />
            </td>
            <td className="p-3">{student.name}</td>
            <td className="p-3">{student.age}</td>
          </tr>
        ))}
        </tbody>
      </table>

      <button
        className={`w-full mt-4 py-2 rounded text-white font-medium ${
          students.some(s => s.selected) ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!students.some(s => s.selected)}
      >
        Start Preparation
      </button>
    </div>
  );
};

export default StudentManagement;