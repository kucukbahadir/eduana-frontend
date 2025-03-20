import { useState } from "react";
import Card from "../components/uiDashboard/Card";
import { Checkbox } from "../components/ui/checkbox";
import { ChevronDown, ChevronUp } from "lucide-react";

const LessonPreparation = () => {
  const [checkedItems, setCheckedItems] = useState({
    learningGoals: false,
    keywords: false,
    presentation: false,
    kahoot: false,
  });

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  const toggleCheckbox = (section) => {
    setCheckedItems((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center">03 - Leds and Breadboards</h1>
      <h2 className="text-center text-gray-500 mb-4">
        03 - Navigating Fundamental Electronics Level 1
      </h2>

      <div className="flex justify-center space-x-8 text-blue-500">
        <span className="border-b-2 border-blue-500 pb-1">Review Content</span>
        <span className="text-gray-400">Set Up Materials</span>
        <span className="text-gray-400">Plan Activity</span>
      </div>

      <Card className="p-4 mt-6 shadow-md rounded-lg">
        {[
          { label: "Learning goals", key: "learningGoals", content: [
              "1. Understand the Basics of LEDs: Students will learn what LEDs are, how they function, and the role they play in various electronic devices.",
              "2. Explore Color Mixing with RGB: Students will understand the concept of RGB and how combining red, green, and blue light in different intensities can produce a wide range of colors.",
              "3. Comprehend Luminosity: Students will be able to explain luminosity and its relevance to the brightness of LEDs and other light sources.",
              "4. Experiment with Breadboards: Students will gain hands-on experience in constructing and testing simple circuits using a breadboard, enhancing their understanding of circuit design and layout.",
              "5. Identify and Prevent Short Circuits: Students will learn what causes short circuits and how to avoid them, fostering a mindset of electrical safety and troubleshooting."
            ]},
          { label: "Keywords", key: "keywords", content: ["Keyword 1", "Keyword 2", "Keyword 3"] },
          { label: "Presentation", key: "presentation", content: ["Slide 1", "Slide 2", "Slide 3"] },
          { label: "Kahoot Quiz", key: "kahoot", content: ["Quiz Question 1", "Quiz Question 2"] },
        ].map((section) => (
          <div key={section.key} className="border-b py-2">
            <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown(section.key)}>
              <Checkbox
                checked={checkedItems[section.key]}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCheckbox(section.key);
                }}
                className="mr-2"
              />
              <span className="font-semibold flex-1">{section.label}</span>
              {openDropdown === section.key ? <ChevronUp /> : <ChevronDown />}
            </div>
            {openDropdown === section.key && (
              <div className="mt-2 pl-6 text-gray-600">
                {section.content.map((text, index) => (
                  <p key={index} className="mb-1">{text}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </Card>
    </div>
  );
};

export default LessonPreparation;
