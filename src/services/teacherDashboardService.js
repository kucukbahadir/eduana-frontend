const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/";

export default class TeacherDashboardService {
  static async getAllClasses() {
    try {
      const response = await fetch(`${backendUrl}api/teachers/classes`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching courses for teacher:", error.message);
      throw new Error("Failed to fetch courses. Please try again later.");
    }
  }

  static async getAllStudents() {
    try {
      const response = await fetch(`${backendUrl}api/teachers/students`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching students for teacher:", error.message);
      throw new Error("Failed to fetch students. Please try again later.");
    }
  }

  static async getLessonInfo(id) {
    try {
      const response = await fetch(`${backendUrl}api/teachers/course/${id}/info`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching lesson info:", error.message);
      throw new Error("Failed to fetch lesson info. Please try again later.");
    }
  }
}
