import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import TeacherDashboardService from "@/services/TeacherDashboardService"; // Make sure this is the correct path

const StudentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await TeacherDashboardService.getAllStudents();
        // Ensure each student has a selected field for checkbox control
        const studentsWithSelection = data.students.map((student) => ({
          ...student,
          selected: false,
        }));
        setStudents(studentsWithSelection);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) =>
    student.user?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelectStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, selected: !student.selected } : student
      )
    );
  };

  if (loading) return <div className="text-center p-6">Loading students...</div>;
  if (error) return <div className="text-center p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6 bg-muted min-h-screen">
      <div className="max-w-5xl mx-auto bg-background p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Student Management</h2>

        <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-border rounded-md"
        />

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
              <tr key={student.id} className="border-b hover:bg-muted/50">
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={student.selected}
                    onChange={() => toggleSelectStudent(student.id)}
                  />
                </td>
                <td className="p-3">{student.user.name}</td>
                <td className="p-3">{student.age}</td>
                <td className="p-3">{student.dietRestrictions}</td>
                <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-black ${
                        student.previousExperience === "High"
                          ? "bg-success"
                          : student.previousExperience === "Low"
                            ? "bg-destructive"
                            : "bg-accent"
                      }`}
                    >
                      {student.previousExperience}
                    </span>
                </td>
                <td className="p-3">{student.languagePreference}</td>
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

        <div className="text-center mt-6">
          <Button>Start Preparation</Button>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;
