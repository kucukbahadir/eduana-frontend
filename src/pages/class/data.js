import { fakerNL as faker } from "@faker-js/faker";
import { students } from "../parent/progress/data/studentData";

export const classesData = [
  // Regular Courses (RC)
  {
    id: 1,
    name: "NLAMS01-20250106-RC-00300",
    location: "Amsterdam East",
    period: "1",
    type: "regular",
    startDate: "2025-03-21",
    endDate: "2025-05-09",
    curriculumId: 1,
    students: students,
  },
  {
    id: 2,
    name: "NLAMS01-20250106-RC-00300",
    location: "Amsterdam East",
    period: "1",
    type: "regular",
    startDate: "2025-03-22",
    endDate: "2025-04-26",
    curriculumId: 2,
    students: students,
  },
  {
    id: 3,
    name: "NLDH02-20250106-RC-00300",
    location: "The Hague",
    period: "1",
    type: "regular",
    startDate: "2025-03-20",
    endDate: "2025-04-24",
    curriculumId: 3,
    students: students,
  },
  {
    id: 4,
    name: "NLAMS02-20250106-RC-00300",
    location: "Amstelveen",
    period: "1",
    type: "regular",
    startDate: "2025-03-23",
    endDate: "2025-04-27",
    curriculumId: 4,
    students: students,
  },
  {
    id: 5,
    name: "NLAMS01-20250106-RC-00300",
    location: "Amsterdam East",
    period: "1",
    type: "regular",
    startDate: "2025-03-24",
    endDate: "2025-04-28",
    curriculumId: 5,
    students: students,
  },

  // Coder Camps (CC) - New addition
  {
    id: 101,
    name: "NLAMS01-20250421-CC-00100",
    location: "Amsterdam East",
    period: "2",
    type: "camp",
    startDate: "2025-04-21",
    endDate: "2025-04-25",
    curriculumId: null,
    students: students,
  },
  {
    id: 102,
    name: "NLDH02-20250505-CC-00100",
    location: "The Hague",
    period: "2",
    type: "camp",
    startDate: "2025-05-05",
    endDate: "2025-05-09",
    curriculumId: null,
    students: students,
  },
  {
    id: 103,
    name: "NLAMS02-20250714-CC-00100",
    location: "Amstelveen",
    period: "3",
    type: "camp",
    startDate: "2025-07-14",
    endDate: "2025-07-18",
    curriculumId: null,
    students: students,
  },
];

export const lessonsData = [
  // Curriculum 1: Essential Robotics Skills
  { id: 1, name: "Simple Machines" },
  { id: 2, name: "Gears" },
  { id: 3, name: "Winch and Ratchet" },
  { id: 4, name: "Pulleys" },
  { id: 5, name: "Balance and Stability" },
  { id: 6, name: "Sensors" },
  { id: 7, name: "Force and Motion" },
  { id: 8, name: "Self Project" },

  // Curriculum 2: Essential Coding Skills
  { id: 9, name: "Introduction to Algorithms" },
  { id: 10, name: "Variables and Data Types" },
  { id: 11, name: "Control Structures" },
  { id: 12, name: "Functions and Procedures" },
  { id: 13, name: "Arrays and Lists" },
  { id: 14, name: "Debugging Techniques" },

  // Curriculum 3: Essential Fundamental Electronic Skills
  { id: 15, name: "Basic Circuit Theory" },
  { id: 16, name: "Resistors and Ohm's Law" },
  { id: 17, name: "Capacitors and Inductors" },
  { id: 18, name: "Diodes and Transistors" },
  { id: 19, name: "Digital Logic Gates" },
  { id: 20, name: "Arduino Basics" },

  // Curriculum 4: Advanced Coding Skills
  { id: 21, name: "Object-Oriented Programming" },
  { id: 22, name: "Data Structures" },
  { id: 23, name: "Algorithms and Complexity" },
  { id: 24, name: "API Integration" },
  { id: 25, name: "Database Interaction" },
  { id: 26, name: "Design Patterns" },

  // Curriculum 5: Web Development Fundamentals
  { id: 27, name: "HTML Basics" },
  { id: 28, name: "CSS Styling" },
  { id: 29, name: "JavaScript Fundamentals" },
  { id: 30, name: "Responsive Design" },
  { id: 31, name: "DOM Manipulation" },
  { id: 32, name: "Web APIs" },
];

// New scheduleData that links classes with lessons and their scheduled times
export const scheduleData = [
  // Class 1 (Amsterdam East, Essential Robotics Skills)
  { id: 1, classId: 1, lessonId: 1, startDate: "2025-03-21T15:30:00", endDate: "2025-03-21T17:30:00" },
  { id: 2, classId: 1, lessonId: 2, startDate: "2025-03-28T15:30:00", endDate: "2025-03-28T17:30:00" },
  { id: 3, classId: 1, lessonId: 3, startDate: "2025-04-04T15:30:00", endDate: "2025-04-04T17:30:00" },
  { id: 4, classId: 1, lessonId: 4, startDate: "2025-04-11T15:30:00", endDate: "2025-04-11T17:30:00" },
  { id: 5, classId: 1, lessonId: 5, startDate: "2025-04-18T15:30:00", endDate: "2025-04-18T17:30:00" },
  { id: 6, classId: 1, lessonId: 6, startDate: "2025-04-25T15:30:00", endDate: "2025-04-25T17:30:00" },
  { id: 7, classId: 1, lessonId: 7, startDate: "2025-05-02T15:30:00", endDate: "2025-05-02T17:30:00" },
  { id: 8, classId: 1, lessonId: 8, startDate: "2025-05-09T15:30:00", endDate: "2025-05-09T17:30:00" },

  // Class 2 (Amsterdam East, Essential Coding Skills)
  { id: 9, classId: 2, lessonId: 9, startDate: "2025-03-22T10:00:00", endDate: "2025-03-22T12:00:00" },
  { id: 10, classId: 2, lessonId: 10, startDate: "2025-03-29T10:00:00", endDate: "2025-03-29T12:00:00" },
  { id: 11, classId: 2, lessonId: 11, startDate: "2025-04-05T10:00:00", endDate: "2025-04-05T12:00:00" },
  { id: 12, classId: 2, lessonId: 12, startDate: "2025-04-12T10:00:00", endDate: "2025-04-12T12:00:00" },
  { id: 13, classId: 2, lessonId: 13, startDate: "2025-04-19T10:00:00", endDate: "2025-04-19T12:00:00" },
  { id: 14, classId: 2, lessonId: 14, startDate: "2025-04-26T10:00:00", endDate: "2025-04-26T12:00:00" },

  // Class 3 (The Hague, Essential Fundamental Electronic Skills)
  { id: 15, classId: 3, lessonId: 15, startDate: "2025-03-20T14:00:00", endDate: "2025-03-20T16:00:00" },
  { id: 16, classId: 3, lessonId: 16, startDate: "2025-03-27T14:00:00", endDate: "2025-03-27T16:00:00" },
  { id: 17, classId: 3, lessonId: 17, startDate: "2025-04-03T14:00:00", endDate: "2025-04-03T16:00:00" },
  { id: 18, classId: 3, lessonId: 18, startDate: "2025-04-10T14:00:00", endDate: "2025-04-10T16:00:00" },
  { id: 19, classId: 3, lessonId: 19, startDate: "2025-04-17T14:00:00", endDate: "2025-04-17T16:00:00" },
  { id: 20, classId: 3, lessonId: 20, startDate: "2025-04-24T14:00:00", endDate: "2025-04-24T16:00:00" },

  // Class 4 (Amstelveen, Advanced Coding Skills)
  { id: 21, classId: 4, lessonId: 21, startDate: "2025-03-23T13:00:00", endDate: "2025-03-23T15:00:00" },
  { id: 22, classId: 4, lessonId: 22, startDate: "2025-03-30T13:00:00", endDate: "2025-03-30T15:00:00" },
  { id: 23, classId: 4, lessonId: 23, startDate: "2025-04-06T13:00:00", endDate: "2025-04-06T15:00:00" },
  { id: 24, classId: 4, lessonId: 24, startDate: "2025-04-13T13:00:00", endDate: "2025-04-13T15:00:00" },
  { id: 25, classId: 4, lessonId: 25, startDate: "2025-04-20T13:00:00", endDate: "2025-04-20T15:00:00" },
  { id: 26, classId: 4, lessonId: 26, startDate: "2025-04-27T13:00:00", endDate: "2025-04-27T15:00:00" },

  // Class 5 (Amsterdam East, Web Development Fundamentals)
  { id: 27, classId: 5, lessonId: 27, startDate: "2025-03-24T16:00:00", endDate: "2025-03-24T18:00:00" },
  { id: 28, classId: 5, lessonId: 28, startDate: "2025-03-31T16:00:00", endDate: "2025-03-31T18:00:00" },
  { id: 29, classId: 5, lessonId: 29, startDate: "2025-04-07T16:00:00", endDate: "2025-04-07T18:00:00" },
  { id: 30, classId: 5, lessonId: 30, startDate: "2025-04-14T16:00:00", endDate: "2025-04-14T18:00:00" },
  { id: 31, classId: 5, lessonId: 31, startDate: "2025-04-21T16:00:00", endDate: "2025-04-21T18:00:00" },
  { id: 32, classId: 5, lessonId: 32, startDate: "2025-04-28T16:00:00", endDate: "2025-04-28T18:00:00" },
];

export const curriculumData = [
  { id: 1, name: "Essential Robotics Skills", level: "1", lessonIds: [1, 2, 3, 4, 5, 6, 7, 8] },
  { id: 2, name: "Essential Coding Skills", level: "2", lessonIds: [9, 10, 11, 12, 13, 14] },
  { id: 3, name: "Essential Fundamental Electronic Skills", level: "1", lessonIds: [15, 16, 17, 18, 19, 20] },
  { id: 4, name: "Advanced Coding Skills", level: "2", lessonIds: [21, 22, 23, 24, 25, 26] },
  { id: 5, name: "Web Development Fundamentals", level: "2", lessonIds: [27, 28, 29, 30, 31, 32] },
];

// Activity types for Coder Camps
export const activityTypesData = [
  { id: 1, name: "Programming" },
  { id: 2, name: "Robotics" },
  { id: 3, name: "Digital Arts" },
  { id: 4, name: "Break" },
  { id: 5, name: "Project" },
];

// Camp activities
export const campActivitiesData = [
  { id: 1, name: "Scratch Game Design", description: "Creating interactive stories and games with Scratch", typeId: 1 },
  { id: 2, name: "Kodu Game Lab", description: "3D game design with visual programming", typeId: 1 },
  { id: 3, name: "Lunch Break", description: "Time for lunch and relaxation", typeId: 4 },
  { id: 4, name: "Morning Break", description: "Short refreshment break", typeId: 4 },
  { id: 5, name: "Afternoon Break", description: "Short refreshment break", typeId: 4 },
  { id: 6, name: "Minecraft Education", description: "Learning coding concepts through Minecraft", typeId: 1 },
  { id: 7, name: "Robotics Workshop", description: "Hands-on experience with educational robots", typeId: 2 },
  { id: 8, name: "App Inventor", description: "Creating mobile applications", typeId: 1 },
  { id: 9, name: "Digital Art & Animation", description: "Creating digital artwork and animations", typeId: 3 },
  { id: 10, name: "Project Presentation", description: "Students present their weekly projects", typeId: 5 },
];

// Camp activities schedule - daily activities for the whole week
export const campScheduleData = [
  // Camp 101 (Amsterdam East) - Week of April 21-25, 2025
  // Monday
  { id: 1001, classId: 101, activityId: 1, startTime: "2025-04-21T09:00:00", endTime: "2025-04-21T10:30:00" },
  { id: 1002, classId: 101, activityId: 4, startTime: "2025-04-21T10:30:00", endTime: "2025-04-21T10:45:00" },
  { id: 1003, classId: 101, activityId: 1, startTime: "2025-04-21T10:45:00", endTime: "2025-04-21T12:00:00" },
  { id: 1004, classId: 101, activityId: 3, startTime: "2025-04-21T12:00:00", endTime: "2025-04-21T13:00:00" },
  { id: 1005, classId: 101, activityId: 7, startTime: "2025-04-21T13:00:00", endTime: "2025-04-21T15:00:00" },
  { id: 1006, classId: 101, activityId: 5, startTime: "2025-04-21T15:00:00", endTime: "2025-04-21T15:15:00" },
  { id: 1007, classId: 101, activityId: 7, startTime: "2025-04-21T15:15:00", endTime: "2025-04-21T16:30:00" },

  // Tuesday
  { id: 1008, classId: 101, activityId: 2, startTime: "2025-04-22T09:00:00", endTime: "2025-04-22T10:30:00" },
  { id: 1009, classId: 101, activityId: 4, startTime: "2025-04-22T10:30:00", endTime: "2025-04-22T10:45:00" },
  { id: 1010, classId: 101, activityId: 2, startTime: "2025-04-22T10:45:00", endTime: "2025-04-22T12:00:00" },
  { id: 1011, classId: 101, activityId: 3, startTime: "2025-04-22T12:00:00", endTime: "2025-04-22T13:00:00" },
  { id: 1012, classId: 101, activityId: 6, startTime: "2025-04-22T13:00:00", endTime: "2025-04-22T15:00:00" },
  { id: 1013, classId: 101, activityId: 5, startTime: "2025-04-22T15:00:00", endTime: "2025-04-22T15:15:00" },
  { id: 1014, classId: 101, activityId: 6, startTime: "2025-04-22T15:15:00", endTime: "2025-04-22T16:30:00" },

  // Wednesday
  { id: 1015, classId: 101, activityId: 8, startTime: "2025-04-23T09:00:00", endTime: "2025-04-23T10:30:00" },
  { id: 1016, classId: 101, activityId: 4, startTime: "2025-04-23T10:30:00", endTime: "2025-04-23T10:45:00" },
  { id: 1017, classId: 101, activityId: 8, startTime: "2025-04-23T10:45:00", endTime: "2025-04-23T12:00:00" },
  { id: 1018, classId: 101, activityId: 3, startTime: "2025-04-23T12:00:00", endTime: "2025-04-23T13:00:00" },
  { id: 1019, classId: 101, activityId: 9, startTime: "2025-04-23T13:00:00", endTime: "2025-04-23T15:00:00" },
  { id: 1020, classId: 101, activityId: 5, startTime: "2025-04-23T15:00:00", endTime: "2025-04-23T15:15:00" },
  { id: 1021, classId: 101, activityId: 9, startTime: "2025-04-23T15:15:00", endTime: "2025-04-23T16:30:00" },

  // Thursday
  { id: 1022, classId: 101, activityId: 1, startTime: "2025-04-24T09:00:00", endTime: "2025-04-24T10:30:00" },
  { id: 1023, classId: 101, activityId: 4, startTime: "2025-04-24T10:30:00", endTime: "2025-04-24T10:45:00" },
  { id: 1024, classId: 101, activityId: 2, startTime: "2025-04-24T10:45:00", endTime: "2025-04-24T12:00:00" },
  { id: 1025, classId: 101, activityId: 3, startTime: "2025-04-24T12:00:00", endTime: "2025-04-24T13:00:00" },
  { id: 1026, classId: 101, activityId: 7, startTime: "2025-04-24T13:00:00", endTime: "2025-04-24T15:00:00" },
  { id: 1027, classId: 101, activityId: 5, startTime: "2025-04-24T15:00:00", endTime: "2025-04-24T15:15:00" },
  { id: 1028, classId: 101, activityId: 8, startTime: "2025-04-24T15:15:00", endTime: "2025-04-24T16:30:00" },

  // Friday
  { id: 1029, classId: 101, activityId: 6, startTime: "2025-04-25T09:00:00", endTime: "2025-04-25T10:30:00" },
  { id: 1030, classId: 101, activityId: 4, startTime: "2025-04-25T10:30:00", endTime: "2025-04-25T10:45:00" },
  { id: 1031, classId: 101, activityId: 9, startTime: "2025-04-25T10:45:00", endTime: "2025-04-25T12:00:00" },
  { id: 1032, classId: 101, activityId: 3, startTime: "2025-04-25T12:00:00", endTime: "2025-04-25T13:00:00" },
  { id: 1033, classId: 101, activityId: 10, startTime: "2025-04-25T13:00:00", endTime: "2025-04-25T16:30:00" },

  // Camp 102 (The Hague)
  // Monday
  { id: 2001, classId: 102, activityId: 1, startTime: "2025-05-05T09:00:00", endTime: "2025-05-05T10:30:00" },
  { id: 2002, classId: 102, activityId: 4, startTime: "2025-05-05T10:30:00", endTime: "2025-05-05T10:45:00" },
  { id: 2003, classId: 102, activityId: 1, startTime: "2025-05-05T10:45:00", endTime: "2025-05-05T12:00:00" },
  { id: 2004, classId: 102, activityId: 3, startTime: "2025-05-05T12:00:00", endTime: "2025-05-05T13:00:00" },
  { id: 2005, classId: 102, activityId: 6, startTime: "2025-05-05T13:00:00", endTime: "2025-05-05T15:00:00" },
  { id: 2006, classId: 102, activityId: 5, startTime: "2025-05-05T15:00:00", endTime: "2025-05-05T15:15:00" },
  { id: 2007, classId: 102, activityId: 6, startTime: "2025-05-05T15:15:00", endTime: "2025-05-05T16:30:00" },

  // Camp 103 (Amstelveen)
  // Monday
  { id: 3001, classId: 103, activityId: 2, startTime: "2025-07-14T09:00:00", endTime: "2025-07-14T10:30:00" },
  { id: 3002, classId: 103, activityId: 4, startTime: "2025-07-14T10:30:00", endTime: "2025-07-14T10:45:00" },
  { id: 3003, classId: 103, activityId: 2, startTime: "2025-07-14T10:45:00", endTime: "2025-07-14T12:00:00" },
  { id: 3004, classId: 103, activityId: 3, startTime: "2025-07-14T12:00:00", endTime: "2025-07-14T13:00:00" },
  { id: 3005, classId: 103, activityId: 8, startTime: "2025-07-14T13:00:00", endTime: "2025-07-14T15:00:00" },
  { id: 3006, classId: 103, activityId: 5, startTime: "2025-07-14T15:00:00", endTime: "2025-07-14T15:15:00" },
  { id: 3007, classId: 103, activityId: 8, startTime: "2025-07-14T15:15:00", endTime: "2025-07-14T16:30:00" },
];

// Helper functions to work with both regular courses and camps

/**
 * Determines if a class is a Coder Camp
 * @param {Object} classItem - A class object from classesData
 * @returns {boolean} True if the class is a camp, false otherwise
 */
export const isCoderCamp = (classItem) => {
  return classItem?.type === "camp";
};

/**
 * Gets the appropriate schedule items for a class (lessons for regular courses, activities for camps)
 * @param {number} classId - The ID of the class
 * @returns {Array} The scheduled items with all relevant data
 */
export const getClassScheduleItems = (classId) => {
  const classItem = classesData.find((c) => c.id === classId);

  if (!classItem) {
    return [];
  }

  if (isCoderCamp(classItem)) {
    // Return camp activities schedule
    return campScheduleData
      .filter((schedule) => schedule.classId === classId)
      .map((schedule) => {
        const activity = campActivitiesData.find((activity) => activity.id === schedule.activityId);
        const activityType = activityTypesData.find((type) => type.id === activity.typeId);

        return {
          ...schedule,
          title: activity.name,
          description: activity.description,
          startDate: schedule.startTime,
          endDate: schedule.endTime,
          type: "activity",
          category: activityType.name
        };
      })
      .sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
  } else {
    // Return regular course lessons schedule
    return scheduleData
      .filter((schedule) => schedule.classId === classId)
      .map((schedule) => {
        const lesson = lessonsData.find((lesson) => lesson.id === schedule.lessonId);

        return {
          ...schedule,
          title: lesson.name,
          type: "lesson"
        };
      })
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  }
};

/**
 * Gets the next upcoming schedule item for a class
 * @param {number} classId - The ID of the class
 * @returns {Object|null} The next schedule item or null if none found
 */
export const getNextScheduleItem = (classId) => {
  const now = new Date();
  const scheduleItems = getClassScheduleItems(classId);

  return (
    scheduleItems.find((item) => {
      const startDate = new Date(item.startDate || item.startTime);
      return startDate > now;
    }) || null
  );
};

/**
 * Gets the currently active schedule item for a class
 * @param {number} classId - The ID of the class
 * @returns {Object|null} The active schedule item or null if none found
 */
export const getActiveScheduleItem = (classId) => {
  const now = new Date();
  const scheduleItems = getClassScheduleItems(classId);

  return (
    scheduleItems.find((item) => {
      const startDate = new Date(item.startDate || item.startTime);
      const endDate = new Date(item.endDate || item.endTime);
      return startDate <= now && endDate >= now;
    }) || null
  );
};

/**
 * Gets class information in a consistent format regardless of type
 * @param {number} classId - The ID of the class
 * @returns {Object} Class information with type-specific details
 */
export const getClassInfo = (classId) => {
  const classItem = classesData.find((c) => c.id === classId);

  if (!classItem) {
    return null;
  }

  if (isCoderCamp(classItem)) {
    return {
      ...classItem,
      name: classItem.name,
      type: "camp",
      startDate: classItem.startDate,
      endDate: classItem.endDate,
      scheduleItems: getClassScheduleItems(classId),
      displayName: `Coder Camp`,
      activitiesCount: campScheduleData.filter((s) => s.classId === classId).length,
      uniqueActivitiesCount: [...new Set(campScheduleData.filter((s) => s.classId === classId).map((s) => s.activityId))].length,
    };
  } else {
    const curriculum = curriculumData.find((c) => c.id === classItem.curriculumId);
    return {
      ...classItem,
      type: "regular",
      startDate: classItem.startDate,
      endDate: classItem.endDate,
      scheduleItems: getClassScheduleItems(classId),
      level: curriculum ? curriculum.level : null, // Get level from curriculum
      displayName: curriculum ? curriculum.name : classItem.name,
      lessonsCount: scheduleData.filter((s) => s.classId === classId).length,
      curriculum: curriculum,
    };
  }
};
