import { fakerNL as faker } from '@faker-js/faker';

// Function to generate certificate data (null for ongoing/not started courses)
const generateCertificate = (status) => {
  if (status !== 'completed') return null;
  
  return {
    date: faker.date.past(),
    grade: faker.number.int({ min: 70, max: 100 }),
    teacher: `${faker.person.prefix()} ${faker.person.lastName()}`
  };
};

// Function to generate a course
const generateCourse = () => {
  const courseNames = [
    "Navigating Computer Hardware",
    "Essential Fundamental Electronic Skills",
    "Essential Robotics Skills",
    "Essential Coding Skills",
    "Advanced Coding Skills",
    "Web Development Fundamentals",
    "Introduction to JavaScript",
    "Introduction to Programming Logic",
    "Python Basics"
  ];
  
  const status = faker.helpers.arrayElement(['completed', 'ongoing', 'not started']);
  const level = faker.number.int({ min: 1, max: 3 });
  
  return {
    name: `${faker.helpers.arrayElement(courseNames)} - Level ${level}`,
    description: faker.lorem.paragraphs(),
    status,
    certificate: generateCertificate(status)
  };
};

// Generate random student data
export const students = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: faker.person.fullName(),
  language: faker.helpers.arrayElement(['English', 'Dutch', 'Both']),
  dietaryRestrictions: faker.helpers.arrayElement(['None', 'Vegetarian', 'Vegan']),
  allergies: faker.helpers.arrayElement(['None', 'Peanuts', 'Gluten', 'Dairy']),
  previousExperience: faker.helpers.arrayElement(['None', 'Basic', 'Intermediate', 'Advanced']),
  parentPhone: faker.phone.number({ style: "international" }),
  progress: {
    todo: faker.number.int({ min: 2, max: 10 }),
    inProgress: faker.number.int({ min: 3, max: 15 }),
    done: faker.number.int({ min: 10, max: 25 }),
    averageTaskCompletionRate: faker.number.int({ min: 60, max: 95 }),
    upcomingClass: faker.date.soon(),
  },
  statistics: {
    lessonTime: faker.number.int({ min: 3000, max: 6000 }),
    totalLessons: faker.number.int({ min: 30, max: 60 }),
    completedCourses: faker.number.int({ min: 2, max: 6 }),
    soloProjects: faker.number.int({ min: 10, max: 25 }),
    groupProjects: faker.number.int({ min: 5, max: 15 }),
    totalClasses: faker.number.int({ min: 3, max: 8 }),
  },
  skills: {
    scratch: faker.number.int({ min: 40, max: 100 }),
    html5: faker.number.int({ min: 20, max: 80 }),
    javascript: faker.number.int({ min: 10, max: 70 }),
    python: faker.number.int({ min: 30, max: 90 }),
  },
  courses: Array.from({ length: faker.number.int({ min: 3, max: 5 }) }, () => generateCourse()),
}));
