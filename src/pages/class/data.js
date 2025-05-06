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

  // Curriculum 3: Essential Fundamental Electronic Skills
  { 
    id: 15, 
    name: "Basic Circuit Theory",
    keywords: [
      { term: "Circuit", explanation: "A complete path through which electric current can flow" },
      { term: "Current", explanation: "The flow of electric charge in a circuit, measured in amperes (A)" },
      { term: "Voltage", explanation: "The electric potential difference between two points, measured in volts (V)" },
      { term: "Resistance", explanation: "Opposition to the flow of electric current, measured in ohms (Ω)" }
    ],
    learningObjectives: [
      { objective: "Understand basic electrical concepts", descriptions: ["Define voltage, current, and resistance", "Explain the relationship between these quantities"] },
      { objective: "Build simple circuits", descriptions: ["Create working circuits with power sources, components, and conductors", "Verify circuit functionality using measurement tools"] },
      { objective: "Read and draw circuit diagrams", descriptions: ["Interpret standard electrical symbols", "Create diagrams that accurately represent physical circuits"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/electronics/circuit-theory-en.pdf",
      dutch: "https://eduana.com/resources/electronics/circuit-theory-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=electronics-circuit-theory-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=electronics-circuit-theory-nl"
    }
  },
  { 
    id: 16, 
    name: "Resistors and Ohm's Law",
    keywords: [
      { term: "Ohm's Law", explanation: "A fundamental law stating that the current through a conductor is directly proportional to voltage and inversely proportional to resistance (V = I × R)" },
      { term: "Series Circuit", explanation: "A circuit where components are connected end-to-end, creating a single path for current" },
      { term: "Parallel Circuit", explanation: "A circuit where components are connected across common points, creating multiple paths for current" },
      { term: "Color Code", explanation: "A system using colored bands to indicate resistance values and tolerance of resistors" }
    ],
    learningObjectives: [
      { objective: "Apply Ohm's Law", descriptions: ["Calculate voltage, current, or resistance when two quantities are known", "Solve problems involving power and energy"] },
      { objective: "Work with resistors", descriptions: ["Read resistor color codes accurately", "Select appropriate resistors for specific applications"] },
      { objective: "Analyze series and parallel circuits", descriptions: ["Calculate total resistance in different circuit configurations", "Predict current and voltage distribution in circuits"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/electronics/resistors-ohms-law-en.pdf",
      dutch: "https://eduana.com/resources/electronics/resistors-ohms-law-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=electronics-resistors-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=electronics-resistors-nl"
    }
  },
  { 
    id: 17, 
    name: "Capacitors and Inductors",
    keywords: [
      { term: "Capacitor", explanation: "A passive two-terminal electrical component that stores potential energy in an electric field" },
      { term: "Inductor", explanation: "A passive two-terminal electrical component that stores energy in a magnetic field when current flows through it" },
      { term: "Capacitance", explanation: "The ability of a body to store an electrical charge, measured in farads (F)" },
      { term: "Inductance", explanation: "The property of an electrical conductor by which a change in current induces an electromotive force, measured in henries (H)" }
    ],
    learningObjectives: [
      { objective: "Understand capacitor function and types", descriptions: ["Explain how capacitors store and release energy", "Identify different types of capacitors and their applications"] },
      { objective: "Work with inductors in circuits", descriptions: ["Demonstrate how inductors affect current flow", "Build circuits utilizing inductor properties"] },
      { objective: "Calculate time constants", descriptions: ["Compute RC and RL time constants", "Design circuits with specific charging and discharging behaviors"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/electronics/capacitors-inductors-en.pdf",
      dutch: "https://eduana.com/resources/electronics/capacitors-inductors-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=electronics-capacitors-inductors-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=electronics-capacitors-inductors-nl"
    }
  },
  { 
    id: 18, 
    name: "Diodes and Transistors",
    keywords: [
      { term: "Diode", explanation: "A semiconductor device that allows current to flow in one direction only" },
      { term: "Transistor", explanation: "A semiconductor device used to amplify or switch electronic signals" },
      { term: "Forward Bias", explanation: "The condition where a diode allows current to flow through it" },
      { term: "Gain", explanation: "The ratio of the output to input signal in a transistor circuit" }
    ],
    learningObjectives: [
      { objective: "Apply diodes in circuit design", descriptions: ["Use diodes for rectification and protection", "Analyze diode behavior in different circuit configurations"] },
      { objective: "Work with transistors as switches", descriptions: ["Design basic transistor switching circuits", "Calculate appropriate resistor values for reliable switching"] },
      { objective: "Implement transistor amplifiers", descriptions: ["Build common-emitter amplifier circuits", "Measure voltage and current gain in amplifier configurations"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/electronics/diodes-transistors-en.pdf",
      dutch: "https://eduana.com/resources/electronics/diodes-transistors-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=electronics-diodes-transistors-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=electronics-diodes-transistors-nl"
    }
  },
  { 
    id: 19, 
    name: "Digital Logic Gates",
    keywords: [
      { term: "Logic Gate", explanation: "An electronic device implementing a Boolean function, producing a logic-level output based on the inputs" },
      { term: "Truth Table", explanation: "A table showing all possible input combinations and their corresponding outputs for a logic circuit" },
      { term: "Boolean Algebra", explanation: "A branch of algebra used to analyze and simplify digital circuits" },
      { term: "Integrated Circuit", explanation: "A set of electronic circuits on a small flat piece of semiconductor material" }
    ],
    learningObjectives: [
      { objective: "Understand basic logic gates", descriptions: ["Identify AND, OR, NOT, NAND, NOR, XOR, and XNOR gates", "Draw symbols and create truth tables for each gate"] },
      { objective: "Implement combinational logic circuits", descriptions: ["Design circuits to perform specific logical operations", "Simplify logic expressions using Boolean algebra"] },
      { objective: "Build and test logic circuits", descriptions: ["Assemble functional circuits using IC chips", "Troubleshoot common issues in digital circuits"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/electronics/logic-gates-en.pdf",
      dutch: "https://eduana.com/resources/electronics/logic-gates-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=electronics-logic-gates-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=electronics-logic-gates-nl"
    }
  },
  { 
    id: 20, 
    name: "Arduino Basics",
    keywords: [
      { term: "Microcontroller", explanation: "A small computer on a single integrated circuit containing a processor, memory, and programmable input/output peripherals" },
      { term: "Sketch", explanation: "The name for a program written for Arduino boards" },
      { term: "Digital I/O", explanation: "Input/output pins that can be set to either HIGH (5V) or LOW (0V) states" },
      { term: "Analog Input", explanation: "Pins that can read varying voltage levels, typically from 0 to 5 volts" }
    ],
    learningObjectives: [
      { objective: "Set up the Arduino development environment", descriptions: ["Install necessary software and drivers", "Configure the IDE for different Arduino boards"] },
      { objective: "Write basic Arduino programs", descriptions: ["Create programs with setup() and loop() functions", "Implement digital input and output operations"] },
      { objective: "Interface with sensors and actuators", descriptions: ["Read data from digital and analog sensors", "Control motors, LEDs, and other output devices"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/electronics/arduino-basics-en.pdf",
      dutch: "https://eduana.com/resources/electronics/arduino-basics-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=electronics-arduino-basics-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=electronics-arduino-basics-nl"
    }
  },
  { 
    id: 21, 
    name: "Object-Oriented Programming",
    keywords: [
      { term: "Class", explanation: "A blueprint for creating objects that defines properties and behaviors" },
      { term: "Object", explanation: "An instance of a class that contains data and methods" },
      { term: "Inheritance", explanation: "A mechanism where a new class inherits properties and behaviors from an existing class" },
      { term: "Encapsulation", explanation: "The bundling of data and methods that operate on that data within a single unit" }
    ],
    learningObjectives: [
      { objective: "Create and use classes effectively", descriptions: ["Define classes with appropriate attributes and methods", "Instantiate objects and access their properties and methods"] },
      { objective: "Implement inheritance hierarchies", descriptions: ["Create parent and child classes with proper relationships", "Override methods in derived classes"] },
      { objective: "Apply OOP design principles", descriptions: ["Design programs using encapsulation, inheritance, and polymorphism", "Implement abstraction to manage complexity"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/coding-advanced/oop-en.pdf",
      dutch: "https://eduana.com/resources/coding-advanced/oop-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=advanced-oop-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=advanced-oop-nl"
    }
  },
  { 
    id: 22, 
    name: "Data Structures",
    keywords: [
      { term: "Linked List", explanation: "A linear collection of elements where each element points to the next element" },
      { term: "Stack", explanation: "A linear data structure that follows the Last In, First Out (LIFO) principle" },
      { term: "Queue", explanation: "A linear data structure that follows the First In, First Out (FIFO) principle" },
      { term: "Tree", explanation: "A hierarchical data structure with a root value and subtrees of children with a parent node" }
    ],
    learningObjectives: [
      { objective: "Understand fundamental data structures", descriptions: ["Compare different data structures and their applications", "Select appropriate data structures for specific problems"] },
      { objective: "Implement common data structures", descriptions: ["Create linked lists, stacks, queues, and trees from scratch", "Use built-in data structures in programming languages efficiently"] },
      { objective: "Analyze trade-offs between data structures", descriptions: ["Evaluate time and space complexity of operations", "Compare performance characteristics of different implementations"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/coding-advanced/data-structures-en.pdf",
      dutch: "https://eduana.com/resources/coding-advanced/data-structures-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=advanced-data-structures-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=advanced-data-structures-nl"
    }
  },
  { 
    id: 23, 
    name: "Algorithms and Complexity",
    keywords: [
      { term: "Time Complexity", explanation: "A measure of the amount of time an algorithm takes to complete as a function of the input size" },
      { term: "Space Complexity", explanation: "The amount of memory space required by an algorithm to run as a function of the input size" },
      { term: "Big O Notation", explanation: "A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity" },
      { term: "Algorithm Efficiency", explanation: "How well an algorithm performs in terms of time and space resource usage" }
    ],
    learningObjectives: [
      { objective: "Analyze algorithm performance", descriptions: ["Calculate time and space complexity using Big O notation", "Identify bottlenecks in algorithm implementations"] },
      { objective: "Implement sorting and searching algorithms", descriptions: ["Code efficient sorting algorithms like quicksort and mergesort", "Implement binary search and understand its advantages"] },
      { objective: "Optimize algorithms for better performance", descriptions: ["Refactor code to improve efficiency", "Apply optimization techniques to reduce complexity"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/coding-advanced/algorithms-complexity-en.pdf",
      dutch: "https://eduana.com/resources/coding-advanced/algorithms-complexity-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=advanced-algorithms-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=advanced-algorithms-nl"
    }
  },
  { 
    id: 24, 
    name: "API Integration",
    keywords: [
      { term: "API", explanation: "Application Programming Interface - a set of definitions and protocols for building and integrating application software" },
      { term: "REST", explanation: "Representational State Transfer - an architectural style for designing networked applications" },
      { term: "JSON", explanation: "JavaScript Object Notation - a lightweight data interchange format that is easy for humans to read and write" },
      { term: "Authentication", explanation: "The process of verifying the identity of a user or system" }
    ],
    learningObjectives: [
      { objective: "Understand API fundamentals", descriptions: ["Explain how APIs enable software communication", "Differentiate between API types (REST, SOAP, GraphQL)"] },
      { objective: "Make HTTP requests to external APIs", descriptions: ["Implement GET, POST, PUT, and DELETE requests", "Handle API responses and error conditions"] },
      { objective: "Authenticate and secure API interactions", descriptions: ["Implement API keys and OAuth authentication", "Manage sensitive data in API communications"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/coding-advanced/api-integration-en.pdf",
      dutch: "https://eduana.com/resources/coding-advanced/api-integration-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=advanced-api-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=advanced-api-nl"
    }
  },
  { 
    id: 25, 
    name: "Database Interaction",
    keywords: [
      { term: "Database", explanation: "An organized collection of structured information or data stored electronically in a computer system" },
      { term: "SQL", explanation: "Structured Query Language - a domain-specific language used for managing and manipulating relational databases" },
      { term: "CRUD", explanation: "Create, Read, Update, Delete - the four basic operations of persistent storage" },
      { term: "ORM", explanation: "Object-Relational Mapping - a technique for converting data between incompatible type systems in object-oriented programming languages" }
    ],
    learningObjectives: [
      { objective: "Connect to databases from code", descriptions: ["Establish connections to different types of databases", "Configure connection parameters and handle connection errors"] },
      { objective: "Perform CRUD operations through code", descriptions: ["Write code to create, read, update, and delete data", "Use prepared statements to prevent SQL injection"] },
      { objective: "Implement data models using ORM", descriptions: ["Define model classes that map to database tables", "Perform database operations using ORM methods instead of raw SQL"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/coding-advanced/database-interaction-en.pdf",
      dutch: "https://eduana.com/resources/coding-advanced/database-interaction-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=advanced-database-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=advanced-database-nl"
    }
  },
  { 
    id: 26, 
    name: "Design Patterns",
    keywords: [
      { term: "Design Pattern", explanation: "A reusable solution to a commonly occurring problem within a given context in software design" },
      { term: "Singleton", explanation: "A creational design pattern that ensures a class has only one instance and provides a global point of access to it" },
      { term: "Factory Method", explanation: "A creational pattern that defines an interface for creating an object but lets subclasses decide which class to instantiate" },
      { term: "Observer", explanation: "A behavioral pattern where an object (subject) maintains a list of dependents (observers) and notifies them of state changes" }
    ],
    learningObjectives: [
      { objective: "Understand common design patterns", descriptions: ["Recognize patterns in the creational, structural, and behavioral categories", "Explain how patterns solve specific design problems"] },
      { objective: "Implement design patterns in code", descriptions: ["Apply appropriate design patterns to real-world problems", "Adapt patterns to fit specific requirements"] },
      { objective: "Evaluate pattern trade-offs", descriptions: ["Weigh the benefits and drawbacks of using specific patterns", "Combine patterns effectively in larger systems"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/coding-advanced/design-patterns-en.pdf",
      dutch: "https://eduana.com/resources/coding-advanced/design-patterns-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=advanced-design-patterns-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=advanced-design-patterns-nl"
    }
  },
  { 
    id: 27, 
    name: "HTML Basics",
    keywords: [
      { term: "HTML", explanation: "HyperText Markup Language - the standard markup language for documents designed to be displayed in a web browser" },
      { term: "Element", explanation: "An individual component of an HTML document, usually consisting of a start tag, content, and an end tag" },
      { term: "Attribute", explanation: "Additional information about an element that modifies its behavior or provides metadata" },
      { term: "Semantic HTML", explanation: "Using HTML elements that clearly describe their meaning to both the browser and the developer" }
    ],
    learningObjectives: [
      { objective: "Create well-structured HTML documents", descriptions: ["Write HTML with proper document structure", "Use appropriate HTML elements for content"] },
      { objective: "Apply HTML semantics effectively", descriptions: ["Choose semantic elements to improve accessibility and SEO", "Structure content with headers, sections, articles, etc."] },
      { objective: "Validate and troubleshoot HTML", descriptions: ["Use validation tools to check for errors", "Debug common HTML issues"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/web-dev/html-basics-en.pdf",
      dutch: "https://eduana.com/resources/web-dev/html-basics-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=web-html-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=web-html-nl"
    }
  },
  { 
    id: 28, 
    name: "CSS Styling",
    keywords: [
      { term: "CSS", explanation: "Cascading Style Sheets - a style sheet language used for describing the presentation of a document written in HTML" },
      { term: "Selector", explanation: "The part of a CSS rule that identifies which elements in the document will be styled" },
      { term: "Specificity", explanation: "The algorithm that determines which CSS rule is applied when multiple rules could style the same element" },
      { term: "Box Model", explanation: "A CSS concept that describes how elements are rendered as rectangular boxes with content, padding, border, and margin areas" }
    ],
    learningObjectives: [
      { objective: "Apply CSS using different methods", descriptions: ["Implement inline, internal, and external CSS", "Use CSS variables for consistent styling"] },
      { objective: "Master CSS selectors and properties", descriptions: ["Apply various selectors to target specific elements", "Use common CSS properties for layout and visual styling"] },
      { objective: "Understand the CSS box model", descriptions: ["Manipulate element dimensions with margin, padding, and border", "Control element positioning and display behavior"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/web-dev/css-styling-en.pdf",
      dutch: "https://eduana.com/resources/web-dev/css-styling-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=web-css-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=web-css-nl"
    }
  },
  { 
    id: 29, 
    name: "JavaScript Fundamentals",
    keywords: [
      { term: "JavaScript", explanation: "A high-level, interpreted programming language that enables interactive web pages" },
      { term: "DOM", explanation: "Document Object Model - a programming interface for web documents that represents the page as nodes and objects" },
      { term: "Event", explanation: "An action that occurs in the browser that can be detected and responded to with JavaScript" },
      { term: "Callback", explanation: "A function passed as an argument to another function, to be executed after the first function completes" }
    ],
    learningObjectives: [
      { objective: "Write basic JavaScript code for web pages", descriptions: ["Create variables, functions, and control structures", "Include JavaScript in HTML documents"] },
      { objective: "Manipulate the DOM with JavaScript", descriptions: ["Select and modify HTML elements", "Create and remove elements dynamically"] },
      { objective: "Handle browser events", descriptions: ["Respond to user interactions like clicks and form submissions", "Implement event listeners and callbacks"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/web-dev/js-fundamentals-en.pdf",
      dutch: "https://eduana.com/resources/web-dev/js-fundamentals-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=web-javascript-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=web-javascript-nl"
    }
  },
  { 
    id: 30, 
    name: "Responsive Design",
    keywords: [
      { term: "Responsive Design", explanation: "An approach to web design that makes web pages render well on different devices and window or screen sizes" },
      { term: "Media Query", explanation: "A CSS technique that applies different styles for different devices/screen sizes" },
      { term: "Viewport", explanation: "The visible area of a web page on a display device" },
      { term: "Flexible Grid", explanation: "A layout system that uses relative units like percentages rather than fixed units like pixels" }
    ],
    learningObjectives: [
      { objective: "Implement responsive layouts", descriptions: ["Design pages that adapt to different screen sizes", "Use flexible grids and responsive units"] },
      { objective: "Create mobile-first designs", descriptions: ["Start with mobile layouts and progressively enhance for larger screens", "Optimize performance for mobile devices"] },
      { objective: "Use media queries effectively", descriptions: ["Write media queries for different breakpoints", "Apply specific styles based on device characteristics"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/web-dev/responsive-design-en.pdf",
      dutch: "https://eduana.com/resources/web-dev/responsive-design-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=web-responsive-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=web-responsive-nl"
    }
  },
  { 
    id: 31, 
    name: "DOM Manipulation",
    keywords: [
      { term: "DOM Tree", explanation: "A hierarchical representation of all elements on a web page as a tree-like structure" },
      { term: "Event Bubbling", explanation: "The process where an event triggered on a nested element 'bubbles up' through its ancestors in the DOM" },
      { term: "Event Delegation", explanation: "A technique of adding event listeners to a parent element instead of adding them to descendant elements" },
      { term: "Node", explanation: "A generic term for any type of object in the DOM hierarchy" }
    ],
    learningObjectives: [
      { objective: "Traverse and manipulate DOM elements", descriptions: ["Navigate through DOM nodes effectively", "Change element properties and attributes"] },
      { objective: "Create dynamic content", descriptions: ["Insert, modify, and remove elements programmatically", "Manipulate element styles and classes"] },
      { objective: "Implement advanced event handling", descriptions: ["Use event delegation for efficient event listening", "Understand event propagation and prevent default behaviors"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/web-dev/dom-manipulation-en.pdf",
      dutch: "https://eduana.com/resources/web-dev/dom-manipulation-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=web-dom-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=web-dom-nl"
    }
  },
  { 
    id: 32, 
    name: "Web APIs",
    keywords: [
      { term: "Fetch API", explanation: "A modern interface for making HTTP requests to servers from web browsers" },
      { term: "JSON", explanation: "JavaScript Object Notation - a lightweight data format used for data interchange between a server and web application" },
      { term: "Local Storage", explanation: "A web API that allows storing key-value pairs in a web browser with no expiration date" },
      { term: "Geolocation API", explanation: "A browser API that provides access to geographical location information from the device" }
    ],
    learningObjectives: [
      { objective: "Use the Fetch API for data retrieval", descriptions: ["Make API requests to external services", "Handle responses and process returned data"] },
      { objective: "Implement client-side storage", descriptions: ["Store and retrieve data using localStorage and sessionStorage", "Manage user preferences and cached content"] },
      { objective: "Work with browser APIs", descriptions: ["Integrate geolocation, notifications, and other browser capabilities", "Understand security considerations when using browser APIs"] }
    ],
    slidesLink: {
      english: "https://eduana.com/resources/web-dev/web-apis-en.pdf",
      dutch: "https://eduana.com/resources/web-dev/web-apis-nl.pdf"
    },
    kahootLink: {
      english: "https://play.kahoot.it/v2/lobby?quizId=web-apis-en",
      dutch: "https://play.kahoot.it/v2/lobby?quizId=web-apis-nl"
    }
  }
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
