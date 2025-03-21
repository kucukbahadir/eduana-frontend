import { useState } from "react";
import  Card  from "../components/uiDashboard/Card.jsx";
import { Button } from "../components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const LessonPreparation = () => {
  const [step, setStep] = useState(1); // Track current step
  const [checkedItems, setCheckedItems] = useState({
    learningGoals: false,
    keywords: false,
    presentation: false,
    kahoot: false,
  });

  const [expanded, setExpanded] = useState({
    learningGoals: false,
    keywords: false,
    presentation: false,
    kahoot: false,
    materials: false,
    presentationDetails: false,
    partA: false,
    partB: false,
    partC: false,
  });

  const handleCheckboxChange = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = Object.values(checkedItems).every(Boolean);

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center">
        {step === 1
          ? "03 - Leds and Breadboards"
          : step === 2
            ? "Set Up Materials"
            : "Plan Activity"}
      </h2>
      <p className="text-center text-sm text-gray-500 mb-6">
        Navigating Fundamental Electronics Level 1
      </p>

      {/* Step 1: Lesson Preparation */}
      {step === 1 && (
        <Card className="p-4">
          {Object.keys(checkedItems).map((key) => (
            <div key={key} className="border-b last:border-b-0 py-2">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand(key)}>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={checkedItems[key]}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleCheckboxChange(key);
                    }}
                    className="form-checkbox h-5 w-5 accent-blue-600"
                  />
                  <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                </div>
                {expanded[key] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {expanded[key] && (
                <div className="mt-2 text-sm text-gray-600 bg-gray-100 p-3 rounded-md">
                  <p>Details for {key}...</p>
                </div>
              )}
            </div>
          ))}
        </Card>
      )}

      {/* Step 2: Materials & Presentation */}
      {step === 2 && (
        <Card className="p-4">
          {/* Materials Section */}
          <div className="border-b last:border-b-0 py-2">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("materials")}>
              <span className="font-medium">Materials</span>
              {expanded.materials ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {expanded.materials && (
              <div className="mt-2 text-sm text-gray-600 bg-gray-100 p-3 rounded-md">
                <ul className="list-disc pl-4">
                  <li>Breadboards (1 per student)</li>
                  <li>LEDs</li>
                  <li>Resistors</li>
                  <li>Gauge</li>
                  <li>Batteries</li>
                </ul>
              </div>
            )}
          </div>

          {/* Presentation Section */}
          <div className="border-b last:border-b-0 py-2 mt-4">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("presentationDetails")}>
              <span className="font-medium">Presentation</span>
              {expanded.presentationDetails ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {expanded.presentationDetails && (
              <div className="mt-2 text-sm text-gray-600 bg-gray-100 p-3 rounded-md">
                <p>Slide deck with instructions on how to use breadboards and LEDs.</p>
                <p>Key topics: Circuit connections, polarity, and resistor usage.</p>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Step 3: Plan Activity */}
      {step === 3 && (
        <Card className="p-4">
          {/* Part A */}
          <div className="border-b last:border-b-0 py-2">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("partA")}>
              <span className="font-medium">Part A</span>
              {expanded.partA ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {expanded.partA && (
              <div className="mt-2 text-sm text-gray-600 bg-gray-100 p-3 rounded-md">
                <p><strong>Engagement (5 minutes)</strong></p>
                <p>Introduce the topic using provided text or relevant examples.</p>
                <p><strong>Exploring (10-15 minutes)</strong></p>
                <ul className="list-disc pl-4">
                  <li>Activity: Technology Scavenger Hunt</li>
                  <li>Goal: Introduce students to key technological concepts.</li>
                  <li>Materials: Only classroom items or personal belongings.</li>
                </ul>
              </div>
            )}
          </div>

          {/* Part B */}
          <div className="border-b last:border-b-0 py-2 mt-4">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("partB")}>
              <span className="font-medium">Part B</span>
              {expanded.partB ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {expanded.partB && (
              <div className="mt-2 text-sm text-gray-600 bg-gray-100 p-3 rounded-md">
                <p>Content for Part B...</p>
              </div>
            )}
          </div>

          {/* Part C */}
          <div className="border-b last:border-b-0 py-2 mt-4">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("partC")}>
              <span className="font-medium">Part C</span>
              {expanded.partC ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {expanded.partC && (
              <div className="mt-2 text-sm text-gray-600 bg-gray-100 p-3 rounded-md">
                <p>Content for Part C...</p>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        {step > 1 && (
          <Button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setStep(step - 1)}>
            Previous
          </Button>
        )}
        {step < 3 && allChecked && (
          <Button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setStep(step + 1)}>
            Next Step
          </Button>
        )}
        {step === 3 && (
          <Button className="bg-red-600 text-white px-4 py-2 rounded">End Preparation</Button>
        )}
      </div>
    </div>
  );
};

export default LessonPreparation;
