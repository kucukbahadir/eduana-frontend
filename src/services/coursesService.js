const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/";

export default class CoursesService {

  static async getAllCourses() {
    try {
      const response = await fetch(`${backendUrl}api/teachers/courses`, {
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

