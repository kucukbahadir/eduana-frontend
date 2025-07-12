import { fakerNL as faker } from "@faker-js/faker";
import { students } from "../parent/progress/data/studentData";

// Helper function to create a date with specific offset in days from today
const getDateWithOffset = (dayOffset, withTime = false) => {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  
  if (!withTime) {
    // Format as YYYY-MM-DD
    return date.toISOString().split('T')[0]; 
  } 
  
  // Otherwise return with time included
  return date.toISOString();
};

// Helper function to add time to a date string
const addTimeToDate = (dateStr, hours, minutes) => {
  const date = new Date(dateStr);
  date.setHours(hours, minutes, 0, 0);
  return date.toISOString();
};

// Base classes data without specific start/end dates
export const classesData = [
  // Regular Courses (RC)
  {
    id: 1,
    name: "NLAMS01-20250106-RC-00300",
    location: "Amsterdam East",
    period: "1",
    type: "regular",
    curriculumId: 1,
    students: students,
  },
  {
    id: 2,
    name: "NLAMS01-20250106-RC-00300",
    location: "Amsterdam East",
    period: "1",
    type: "regular",
    curriculumId: 2,
    students: students,
  },
  {
    id: 3,
    name: "NLDH02-20250106-RC-00300",
    location: "The Hague",
    period: "1",
    type: "regular",
    curriculumId: 1,
    students: students,
  },
  {
    id: 4,
    name: "NLAMS02-20250106-RC-00300",
    location: "Amstelveen",
    period: "1",
    type: "regular",
    curriculumId: 2,
    students: students,
  },
  {
    id: 5,
    name: "NLAMS01-20250106-RC-00300",
    location: "Amsterdam East",
    period: "1",
    type: "regular",
    curriculumId: 1,
    students: students,
  },
];

export const lessonsData = [
  // Curriculum 1: Essential Robotics Skills
  { 
    id: 1, 
    name: "Simple Machines",
    keywords: [
      { term: "Lever", explanation: "A rigid bar resting on a pivot, used to help move a heavy or firmly fixed load with one end when pressure is applied to the other" },
      { term: "Wheel and Axle", explanation: "A simple machine consisting of a wheel attached to a smaller axle so that these two parts rotate together" },
      { term: "Inclined Plane", explanation: "A flat supporting surface tilted at an angle, with one end higher than the other, used to raise objects" },
      { term: "Wedge", explanation: "A portable inclined plane, often used for splitting, lifting, or tightening" }
    ],
    learningObjectives: [
      { objective: "Identify different types of simple machines", descriptions: ["Recognize and name the six types of simple machines", "Understand the basic principles behind each type"] },
      { objective: "Build basic lever structures", descriptions: ["Construct first, second, and third-class levers", "Demonstrate how changing the fulcrum position affects mechanical advantage"] },
      { objective: "Apply simple machines to solve problems", descriptions: ["Design a solution using at least two simple machines", "Explain how the machines work together to solve the problem"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/robotics/simple-machines-en.pdf",
      dutch: "https://eduana.com/resources/robotics/simple-machines-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=robotics-simple-machines-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=robotics-simple-machines-nl"
    }
  },
  { 
    id: 2, 
    name: "Gears",
    keywords: [
      { term: "Gear Ratio", explanation: "The relationship between the number of teeth on two gears, which determines the ratio of rotational speeds" },
      { term: "Driver Gear", explanation: "The gear that receives the input force or motion and transfers it to the driven gear" },
      { term: "Idler Gear", explanation: "An intermediate gear placed between the driver and driven gear that maintains direction while affecting speed" },
      { term: "Rack and Pinion", explanation: "A type of gear system that converts rotational motion into linear motion" }
    ],
    learningObjectives: [
      { objective: "Understand gear mechanisms", descriptions: ["Explain how gears transmit motion and force", "Identify different types of gear arrangements"] },
      { objective: "Calculate gear ratios", descriptions: ["Determine the gear ratio between two meshed gears", "Predict the effect of gear ratios on speed and torque"] },
      { objective: "Build functional gear systems", descriptions: ["Construct systems with multiple gears to achieve specific outputs", "Troubleshoot common issues in gear mechanisms"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/robotics/gears-en.pdf",
      dutch: "https://eduana.com/resources/robotics/gears-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=robotics-gears-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=robotics-gears-nl"
    }
  },
  { 
    id: 3, 
    name: "Winch and Ratchet",
    keywords: [
      { term: "Winch", explanation: "A mechanical device that is used to pull in or let out a rope or cable" },
      { term: "Ratchet", explanation: "A mechanical device that allows continuous rotation in only one direction while preventing motion in the opposite direction" },
      { term: "Pawl", explanation: "A pivoting piece that engages with a ratchet wheel to allow movement in only one direction" },
      { term: "Mechanical Advantage", explanation: "The ratio of the force produced by a machine to the force applied to it" }
    ],
    learningObjectives: [
      { objective: "Construct a functional winch system", descriptions: ["Build a winch that can lift or pull objects", "Integrate the winch with other mechanical components"] },
      { objective: "Implement a ratchet mechanism", descriptions: ["Design a system that allows motion in only one direction", "Explain how the ratchet prevents backward movement"] },
      { objective: "Apply winch and ratchet in practical scenarios", descriptions: ["Use these mechanisms to solve specific challenges", "Optimize the system for maximum efficiency"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/robotics/winch-ratchet-en.pdf",
      dutch: "https://eduana.com/resources/robotics/winch-ratchet-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=robotics-winch-ratchet-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=robotics-winch-ratchet-nl"
    }
  },
  { 
    id: 4, 
    name: "Pulleys",
    keywords: [
      { term: "Fixed Pulley", explanation: "A pulley that is attached to a fixed surface and doesn't move relative to the surface" },
      { term: "Movable Pulley", explanation: "A pulley that moves with the load and provides a mechanical advantage" },
      { term: "Compound Pulley", explanation: "A system combining fixed and movable pulleys to create greater mechanical advantage" },
      { term: "Block and Tackle", explanation: "A system of pulleys arranged to distribute load across multiple ropes/cables" }
    ],
    learningObjectives: [
      { objective: "Differentiate between types of pulleys", descriptions: ["Identify fixed, movable, and compound pulley systems", "Understand when each type is most appropriate"] },
      { objective: "Calculate mechanical advantage of pulley systems", descriptions: ["Determine the mechanical advantage based on pulley arrangement", "Explain how adding pulleys affects the required force"] },
      { objective: "Design and build pulley systems", descriptions: ["Create systems to lift heavy objects with minimal force", "Optimize pulley arrangements for specific applications"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/robotics/pulleys-en.pdf",
      dutch: "https://eduana.com/resources/robotics/pulleys-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=robotics-pulleys-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=robotics-pulleys-nl"
    }
  },
  { 
    id: 5, 
    name: "Balance and Stability",
    keywords: [
      { term: "Center of Gravity", explanation: "The point at which an object's weight is evenly distributed in all directions" },
      { term: "Base of Support", explanation: "The area beneath an object that contacts the ground" },
      { term: "Static Stability", explanation: "The ability of an object to maintain equilibrium when not in motion" },
      { term: "Dynamic Stability", explanation: "The ability of an object to maintain equilibrium during movement or when subjected to external forces" }
    ],
    learningObjectives: [
      { objective: "Locate center of gravity in different structures", descriptions: ["Determine where the center of gravity lies in various objects", "Understand how center of gravity affects stability"] },
      { objective: "Design structures with optimal stability", descriptions: ["Create robots that can maintain balance in various positions", "Apply counterweights and supports to improve stability"] },
      { objective: "Test and improve stability in moving systems", descriptions: ["Analyze why systems become unstable during movement", "Implement solutions to maintain dynamic stability"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/robotics/balance-stability-en.pdf",
      dutch: "https://eduana.com/resources/robotics/balance-stability-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=robotics-balance-stability-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=robotics-balance-stability-nl"
    }
  },
  { 
    id: 6, 
    name: "Sensors",
    keywords: [
      { term: "Touch Sensor", explanation: "A digital sensor that detects physical contact and registers it as binary input (pressed or not pressed)" },
      { term: "Light Sensor", explanation: "A sensor that detects brightness levels and can differentiate between colors" },
      { term: "Ultrasonic Sensor", explanation: "A sensor that measures distance by emitting sound waves and calculating the time it takes for them to bounce back" },
      { term: "Gyroscope", explanation: "A sensor that measures orientation and angular velocity" }
    ],
    learningObjectives: [
      { objective: "Understand different types of sensors", descriptions: ["Identify the purpose and function of various sensors", "Select appropriate sensors for specific tasks"] },
      { objective: "Program sensor-based behaviors", descriptions: ["Write code that responds to sensor input", "Create conditional statements based on sensor readings"] },
      { objective: "Create responsive robotic systems", descriptions: ["Build robots that react to environmental changes", "Troubleshoot sensor-related issues in robotic systems"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/robotics/sensors-en.pdf",
      dutch: "https://eduana.com/resources/robotics/sensors-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=robotics-sensors-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=robotics-sensors-nl"
    }
  },
  { 
    id: 7, 
    name: "Force and Motion",
    keywords: [
      { term: "Newton's Laws", explanation: "Three fundamental laws that describe the relationship between an object and the forces acting on it" },
      { term: "Friction", explanation: "The resistance force that opposes relative motion or tendency of relative motion between surfaces in contact" },
      { term: "Inertia", explanation: "The tendency of an object to resist changes in its state of motion" },
      { term: "Torque", explanation: "The rotational equivalent of linear force, causing an object to rotate" }
    ],
    learningObjectives: [
      { objective: "Apply Newton's laws in robotic design", descriptions: ["Demonstrate understanding of action-reaction pairs", "Use mass distribution to control movement"] },
      { objective: "Optimize for friction and efficiency", descriptions: ["Reduce unwanted friction in moving parts", "Utilize friction when needed for stability or movement"] },
      { objective: "Design systems with predictable motion", descriptions: ["Calculate necessary force to achieve desired motion", "Create mechanisms with precise movement patterns"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/robotics/force-motion-en.pdf",
      dutch: "https://eduana.com/resources/robotics/force-motion-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=robotics-force-motion-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=robotics-force-motion-nl"
    }
  },
  { 
    id: 8, 
    name: "Self Project",
    keywords: [
      { term: "Design Thinking", explanation: "A methodology for creative problem-solving that focuses on understanding user needs" },
      { term: "Iterative Process", explanation: "A cyclical approach to development where products are designed, tested, and refined repeatedly" },
      { term: "Prototype", explanation: "An early sample or model built to test a concept or process" },
      { term: "Documentation", explanation: "The process of recording the planning, development, and testing of a project" }
    ],
    learningObjectives: [
      { objective: "Plan and execute an independent robotics project", descriptions: ["Define project scope and objectives", "Create a timeline with milestones"] },
      { objective: "Apply previously learned concepts", descriptions: ["Integrate multiple mechanical and programming elements", "Justify design choices based on scientific principles"] },
      { objective: "Document and present results", descriptions: ["Create clear documentation of the development process", "Present the finished project and explain key features"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/robotics/self-project-en.pdf",
      dutch: "https://eduana.com/resources/robotics/self-project-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=robotics-self-project-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=robotics-self-project-nl"
    }
  },

  // Curriculum 2: Essential Coding Skills
  { 
    id: 9, 
    name: "Introduction to Algorithms",
    keywords: [
      { term: "Algorithm", explanation: "A step-by-step procedure for solving a problem or accomplishing a task" },
      { term: "Pseudocode", explanation: "A plain language description of an algorithm that uses the structural conventions of programming languages" },
      { term: "Flowchart", explanation: "A diagram that represents a process, showing steps as boxes of various kinds, and their order by connecting them with arrows" },
      { term: "Computational Thinking", explanation: "A problem-solving process that involves breaking down problems into parts that computers can solve" }
    ],
    learningObjectives: [
      { objective: "Understand what algorithms are", descriptions: ["Define algorithms and explain their importance", "Recognize algorithms in everyday life"] },
      { objective: "Create basic algorithms", descriptions: ["Write step-by-step solutions to simple problems", "Express algorithms using pseudocode and flowcharts"] },
      { objective: "Analyze algorithm efficiency", descriptions: ["Compare different approaches to solving the same problem", "Identify inefficiencies in simple algorithms"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/coding/intro-algorithms-en.pdf",
      dutch: "https://eduana.com/resources/coding/intro-algorithms-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=coding-algorithms-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=coding-algorithms-nl"
    }
  },
  { 
    id: 10, 
    name: "Variables and Data Types",
    keywords: [
      { term: "Variable", explanation: "A named storage location in computer memory that holds a value that can change" },
      { term: "Data Type", explanation: "A classification of data which determines what values it can take and what operations can be performed on it" },
      { term: "String", explanation: "A sequence of characters used to represent text" },
      { term: "Integer", explanation: "A data type representing whole numbers without fractional parts" },
      { term: "Boolean", explanation: "A data type with only two possible values: true or false" }
    ],
    learningObjectives: [
      { objective: "Declare and use variables correctly", descriptions: ["Name variables meaningfully", "Assign and update variable values"] },
      { objective: "Work with different data types", descriptions: ["Choose appropriate data types for different situations", "Convert between data types when necessary"] },
      { objective: "Perform operations on variables", descriptions: ["Use arithmetic operators with numeric variables", "Concatenate strings and perform string operations"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/coding/variables-datatypes-en.pdf",
      dutch: "https://eduana.com/resources/coding/variables-datatypes-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=coding-variables-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=coding-variables-nl"
    }
  },
  { 
    id: 11, 
    name: "Control Structures",
    keywords: [
      { term: "Conditional Statement", explanation: "A feature that performs different actions depending on whether a condition is true or false" },
      { term: "Loop", explanation: "A sequence of instructions that is repeated until a certain condition is reached" },
      { term: "Iteration", explanation: "Each repetition of a process within a loop" },
      { term: "Nested Control Structures", explanation: "Control structures placed inside other control structures" }
    ],
    learningObjectives: [
      { objective: "Implement decision-making with conditionals", descriptions: ["Write if-else statements to handle different scenarios", "Use comparison and logical operators in conditions"] },
      { objective: "Create and control loops", descriptions: ["Implement for loops for counted iterations", "Use while loops for condition-based repetition"] },
      { objective: "Combine multiple control structures", descriptions: ["Nest control structures appropriately", "Avoid common pitfalls like infinite loops"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/coding/control-structures-en.pdf",
      dutch: "https://eduana.com/resources/coding/control-structures-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=coding-control-structures-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=coding-control-structures-nl"
    }
  },
  { 
    id: 12, 
    name: "Functions and Procedures",
    keywords: [
      { term: "Function", explanation: "A named block of reusable code that performs a specific task and can return a value" },
      { term: "Parameter", explanation: "A variable listed in the declaration of a function, through which input values are passed" },
      { term: "Return Value", explanation: "The value that a function sends back to the code that called it" },
      { term: "Scope", explanation: "The region of a program where a variable can be accessed" }
    ],
    learningObjectives: [
      { objective: "Create and call functions", descriptions: ["Define functions with appropriate parameters", "Call functions with correct arguments"] },
      { objective: "Design functions with clear purposes", descriptions: ["Write functions that do one thing well", "Choose meaningful function names"] },
      { objective: "Understand function scoping rules", descriptions: ["Distinguish between local and global scope", "Use parameters and return values effectively"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/coding/functions-procedures-en.pdf",
      dutch: "https://eduana.com/resources/coding/functions-procedures-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=coding-functions-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=coding-functions-nl"
    }
  },
  { 
    id: 13, 
    name: "Arrays and Lists",
    keywords: [
      { term: "Array", explanation: "A data structure consisting of a collection of elements, each identified by an index" },
      { term: "Index", explanation: "A numeric position used to access elements in an array, typically starting from 0" },
      { term: "List", explanation: "A dynamic array-like data structure that can grow or shrink in size" },
      { term: "Iteration", explanation: "The process of accessing each element in an array or list sequentially" }
    ],
    learningObjectives: [
      { objective: "Create and manipulate arrays", descriptions: ["Initialize arrays with different values", "Access and modify array elements using indices"] },
      { objective: "Implement common array operations", descriptions: ["Search for elements in arrays", "Sort array elements"] },
      { objective: "Process collections of data", descriptions: ["Loop through array elements", "Perform operations on all elements of an array"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/coding/arrays-lists-en.pdf",
      dutch: "https://eduana.com/resources/coding/arrays-lists-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=coding-arrays-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=coding-arrays-nl"
    }
  },
  { 
    id: 14, 
    name: "Debugging Techniques",
    keywords: [
      { term: "Bug", explanation: "An error, flaw, or fault in a program that causes it to produce incorrect or unexpected results" },
      { term: "Debugging", explanation: "The process of finding and resolving defects in software" },
      { term: "Breakpoint", explanation: "A point in the program where execution is intentionally paused for debugging purposes" },
      { term: "Stack Trace", explanation: "A report that shows the call stack at a certain point during the execution of a program" }
    ],
    learningObjectives: [
      { objective: "Identify common programming errors", descriptions: ["Recognize syntax, logic, and runtime errors", "Understand error messages"] },
      { objective: "Apply systematic debugging strategies", descriptions: ["Use print statements to trace program execution", "Implement step-by-step debugging"] },
      { objective: "Write more reliable code", descriptions: ["Incorporate error checking in programs", "Apply defensive programming techniques"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/coding/debugging-en.pdf",
      dutch: "https://eduana.com/resources/coding/debugging-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=coding-debugging-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=coding-debugging-nl"
    }
  },
];

// New scheduleData that links classes with lessons and their scheduled times using dynamic dates
export const scheduleData = [
  // Class 1 (Amsterdam East, Essential Robotics Skills)
  { id: 1, classId: 1, lessonId: 1, startDateTime: addTimeToDate(getDateWithOffset(-21), 15, 30), endDateTime: addTimeToDate(getDateWithOffset(-21), 17, 30) }, // Today
  { id: 2, classId: 1, lessonId: 2, startDateTime: addTimeToDate(getDateWithOffset(-14), 15, 30), endDateTime: addTimeToDate(getDateWithOffset(-14), 17, 30) }, // Next week
  { id: 3, classId: 1, lessonId: 3, startDateTime: addTimeToDate(getDateWithOffset(-7), 15, 30), endDateTime: addTimeToDate(getDateWithOffset(-7), 17, 30) },
  { id: 4, classId: 1, lessonId: 4, startDateTime: addTimeToDate(getDateWithOffset(0), 8, 30), endDateTime: addTimeToDate(getDateWithOffset(0), 17, 30) },
  { id: 5, classId: 1, lessonId: 5, startDateTime: addTimeToDate(getDateWithOffset(7), 15, 30), endDateTime: addTimeToDate(getDateWithOffset(7), 17, 30) },
  { id: 6, classId: 1, lessonId: 6, startDateTime: addTimeToDate(getDateWithOffset(14), 15, 30), endDateTime: addTimeToDate(getDateWithOffset(14), 17, 30) },
  { id: 7, classId: 1, lessonId: 7, startDateTime: addTimeToDate(getDateWithOffset(21), 15, 30), endDateTime: addTimeToDate(getDateWithOffset(21), 17, 30) },
  { id: 8, classId: 1, lessonId: 8, startDateTime: addTimeToDate(getDateWithOffset(28), 15, 30), endDateTime: addTimeToDate(getDateWithOffset(28), 17, 30) },

  // Class 2 (Amsterdam East, Essential Coding Skills)
  { id: 9, classId: 2, lessonId: 9, startDateTime: addTimeToDate(getDateWithOffset(0), 20, 0), endDateTime: addTimeToDate(getDateWithOffset(0), 22, 0) }, // Tomorrow
  { id: 10, classId: 2, lessonId: 10, startDateTime: addTimeToDate(getDateWithOffset(8), 10, 0), endDateTime: addTimeToDate(getDateWithOffset(8), 12, 0) },
  { id: 11, classId: 2, lessonId: 11, startDateTime: addTimeToDate(getDateWithOffset(15), 10, 0), endDateTime: addTimeToDate(getDateWithOffset(15), 12, 0) },
  { id: 12, classId: 2, lessonId: 12, startDateTime: addTimeToDate(getDateWithOffset(22), 10, 0), endDateTime: addTimeToDate(getDateWithOffset(22), 12, 0) },
  { id: 13, classId: 2, lessonId: 13, startDateTime: addTimeToDate(getDateWithOffset(29), 10, 0), endDateTime: addTimeToDate(getDateWithOffset(29), 12, 0) },
  { id: 14, classId: 2, lessonId: 14, startDateTime: addTimeToDate(getDateWithOffset(36), 10, 0), endDateTime: addTimeToDate(getDateWithOffset(36), 12, 0) },

  // Class 3 (The Hague, Essential Robotics Skills)
  { id: 15, classId: 3, lessonId: 1, startDateTime: addTimeToDate(getDateWithOffset(1), 8, 0), endDateTime: addTimeToDate(getDateWithOffset(1), 10, 0) }, // 2 days from now
  { id: 16, classId: 3, lessonId: 2, startDateTime: addTimeToDate(getDateWithOffset(9), 14, 0), endDateTime: addTimeToDate(getDateWithOffset(9), 16, 0) },
  { id: 17, classId: 3, lessonId: 3, startDateTime: addTimeToDate(getDateWithOffset(16), 14, 0), endDateTime: addTimeToDate(getDateWithOffset(16), 16, 0) },
  { id: 18, classId: 3, lessonId: 4, startDateTime: addTimeToDate(getDateWithOffset(23), 14, 0), endDateTime: addTimeToDate(getDateWithOffset(23), 16, 0) },
  { id: 19, classId: 3, lessonId: 5, startDateTime: addTimeToDate(getDateWithOffset(30), 14, 0), endDateTime: addTimeToDate(getDateWithOffset(30), 16, 0) },
  { id: 20, classId: 3, lessonId: 6, startDateTime: addTimeToDate(getDateWithOffset(37), 14, 0), endDateTime: addTimeToDate(getDateWithOffset(37), 16, 0) },

  // Class 4 (Amstelveen, Essential Coding Skills)
  { id: 21, classId: 4, lessonId: 9, startDateTime: addTimeToDate(getDateWithOffset(1), 10, 0), endDateTime: addTimeToDate(getDateWithOffset(3), 12, 0) }, // 3 days from now
  { id: 22, classId: 4, lessonId: 10, startDateTime: addTimeToDate(getDateWithOffset(10), 13, 0), endDateTime: addTimeToDate(getDateWithOffset(10), 15, 0) },
  { id: 23, classId: 4, lessonId: 11, startDateTime: addTimeToDate(getDateWithOffset(17), 13, 0), endDateTime: addTimeToDate(getDateWithOffset(17), 15, 0) },
  { id: 24, classId: 4, lessonId: 12, startDateTime: addTimeToDate(getDateWithOffset(24), 13, 0), endDateTime: addTimeToDate(getDateWithOffset(24), 15, 0) },
  { id: 25, classId: 4, lessonId: 13, startDateTime: addTimeToDate(getDateWithOffset(31), 13, 0), endDateTime: addTimeToDate(getDateWithOffset(31), 15, 0) },
  { id: 26, classId: 4, lessonId: 14, startDateTime: addTimeToDate(getDateWithOffset(38), 13, 0), endDateTime: addTimeToDate(getDateWithOffset(38), 15, 0) },

  // Class 5 (Amsterdam East, Essential Robotics Skills)
  { id: 27, classId: 5, lessonId: 1, startDateTime: addTimeToDate(getDateWithOffset(6), 16, 0), endDateTime: addTimeToDate(getDateWithOffset(6), 18, 0) }, // 6 days from now (next week)
  { id: 28, classId: 5, lessonId: 2, startDateTime: addTimeToDate(getDateWithOffset(13), 16, 0), endDateTime: addTimeToDate(getDateWithOffset(13), 18, 0) },
  { id: 29, classId: 5, lessonId: 3, startDateTime: addTimeToDate(getDateWithOffset(20), 16, 0), endDateTime: addTimeToDate(getDateWithOffset(20), 18, 0) },
  { id: 30, classId: 5, lessonId: 4, startDateTime: addTimeToDate(getDateWithOffset(27), 16, 0), endDateTime: addTimeToDate(getDateWithOffset(27), 18, 0) },
  { id: 31, classId: 5, lessonId: 5, startDateTime: addTimeToDate(getDateWithOffset(34), 16, 0), endDateTime: addTimeToDate(getDateWithOffset(34), 18, 0) },
  { id: 32, classId: 5, lessonId: 6, startDateTime: addTimeToDate(getDateWithOffset(41), 16, 0), endDateTime: addTimeToDate(getDateWithOffset(41), 18, 0) },
];

export const curriculumData = [
  { id: 1, name: "Essential Robotics Skills", level: "1", lessonIds: [1, 2, 3, 4, 5, 6, 7, 8] },
  { id: 2, name: "Essential Coding Skills", level: "2", lessonIds: [9, 10, 11, 12, 13, 14] },
];

// Helper functions to work with lessons and classes

/**
 * Gets the lesson schedule for a class
 * @param {number} classId - The ID of the class
 * @returns {Array} The scheduled lessons with all relevant data
 */
export const getClassScheduleItems = (classId) => {
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
    .sort((a, b) => new Date(a.startDateTime) - new Date(b.startDateTime));
};

/**
 * Gets the next upcoming lesson for a class
 * @param {number} classId - The ID of the class
 * @returns {Object|null} The next lesson or null if none found
 */
export const getNextScheduleItem = (classId) => {
  const now = new Date();
  const scheduleItems = getClassScheduleItems(classId);

  return (
    scheduleItems.find((item) => {
      const startDateTime = new Date(item.startDateTime);
      return startDateTime > now;
    }) || null
  );
};

/**
 * Gets the currently active lesson for a class
 * @param {number} classId - The ID of the class
 * @returns {Object|null} The active lesson or null if none found
 */
export const getActiveScheduleItem = (classId) => {
  const now = new Date();
  const scheduleItems = getClassScheduleItems(classId);

  return (
    scheduleItems.find((item) => {
      const startDateTime = new Date(item.startDateTime);
      const endDateTime = new Date(item.endDateTime);
      return startDateTime <= now && endDateTime >= now;
    }) || null
  );
};

/**
 * Gets class information for regular courses
 * @param {number} classId - The ID of the class
 * @returns {Object} Class information with curriculum details
 */
export const getClassInfo = (classId) => {
  const classItem = classesData.find((c) => c.id === classId);

  if (!classItem) {
    return null;
  }

  const curriculum = curriculumData.find((c) => c.id === classItem.curriculumId);
  return {
    ...classItem,
    type: "regular",
    startDateTime: classItem.startDateTime,
    endDateTime: classItem.endDateTime,
    scheduleItems: getClassScheduleItems(classId),
    level: curriculum ? curriculum.level : null,
    displayName: curriculum ? curriculum.name : classItem.name,
    lessonsCount: scheduleData.filter((s) => s.classId === classId).length,
    curriculum: curriculum,
  };
};
