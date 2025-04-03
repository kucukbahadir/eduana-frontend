export default class CoursesService {

  async getAllCourses(teacherId) {
    try {
      const response = await fetch(`http://localhost:8080/api/teachers/${teacherId}/classes`, {
        method: "GET", // Explicitly specify the GET method
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error fetching courses for teacher:", error.message);
      throw new Error("Failed to fetch courses. Please try again later.");
    }
  }
}