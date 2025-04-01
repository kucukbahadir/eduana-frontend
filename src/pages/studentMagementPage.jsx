import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const STORAGE_KEY = "studentManagement";

const StudentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem(STORAGE_KEY);
    return savedStudents
      ? JSON.parse(savedStudents)
      : [
        { id: 1, name: "Bonnie Green", age: 7, diet: "None", experience: "High", language: "English", selected: false },
        { id: 2, name: "John Smith", age: 8, diet: "None", experience: "High", language: "Dutch", selected: false },
        { id: 3, name: "Erik Kemp", age: 9, diet: "None", experience: "Low", language: "Dutch", selected: false },
        { id: 4, name: "Lana Byrd", age: 9, diet: "Halal", experience: "Very High", language: "Dutch", selected: false },
        { id: 5, name: "Jese Leos", age: 9, diet: "Vegan", experience: "High", language: "Dutch", selected: false },
      ];
  });

  // Save students to localStorage on update
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  // Handle search filtering
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle selection
  const toggleSelectStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, selected: !student.selected } : student
      )
    );
  };

  return (
    <div className="p-6 bg-muted min-h-screen">
      <div className="max-w-5xl mx-auto bg-background p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Student Management</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />

        {/* Student Table */}
        <table className="w-full border border-border rounded-lg overflow-hidden">
          <thead className="bg-muted text-primary uppercase text-sm">
          <tr>
            <th className="p-3"></th>
            <th className="p-3 text-left">Student</th>
            <th className="p-3 text-left">Age</th>
            <th className="p-3 text-left">Diet Restrictions</th>
            <th className="p-3 text-left">Experience</th>
            <th className="p-3 text-left">Language</th>
          </tr>
          </thead>
          <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={student.selected}
                    onChange={() => toggleSelectStudent(student.id)}
                  />
                </td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.age}</td>
                <td className="p-3">{student.diet}</td>
                <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        student.experience === "High"
                          ? "bg-green-500"
                          : student.experience === "Low"
                            ? "bg-red-500"
                            : "bg-purple-500"
                      }`}
                    >
                      {student.experience}
                    </span>
                </td>
                <td className="p-3">{student.language}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted-foreground p-4">
                No students found.
              </td>
            </tr>
          )}
          </tbody>
        </table>

        {/* Start Preparation Button */}
        <div className="text-center mt-6">
          <Button>
            Start Preparation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;
