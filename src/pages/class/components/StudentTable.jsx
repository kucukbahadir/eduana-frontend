import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Column definitions for the student table
export const studentColumns = ["Name", "Language", "Dietary Restrictions", "Previous Experience", "Parent Contact Number"];

/**
 * Component for displaying a table of students in a class
 * @param {Object} props
 * @param {Array} props.students - Array of student objects
 */
const StudentTable = ({ students }) => {
  return (
    <Card className={"p-4 gap-2 h-fit grow"}>
      <h3>Students</h3>
      {students.length < 1 ? (
        <span className="text-muted-foreground">No students available</span>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className={"hover:bg-transparent"}>
              {studentColumns.map((name, index) => (
                <TableHead key={index}>{name}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.user.full_name}</TableCell>
                <TableCell>{student.user.language_preference}</TableCell>
                <TableCell>{student.user.diet_restrictions || "None"}</TableCell>
                <TableCell>{student.user.experience || "None"}</TableCell>
                <TableCell>{student.user.parent_phone_number || "None"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Card>
  );
};

export default StudentTable;