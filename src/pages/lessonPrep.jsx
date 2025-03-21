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
    materials: false, // Expanded state for step 2
    presentationDetails: false, // Step 2 presentation dropdown
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
        {step === 1 ? "03 - Leds and Breadboards" : "Set Up Materials"}
      </h2>
      <p className="text-center text-sm text-gray-500 mb-6">
        Navigating Fundamental Electronics Level 1
      </p>

      {/* Step 1: Lesson Preparation */}
      {step === 1 ? (
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
      ) : (
        // Step 2: Materials & Presentation
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

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        {step > 1 && (
          <Button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setStep(step - 1)}>
            Previous
          </Button>
        )}
        {allChecked && (
          <Button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setStep(step + 1)}>
            {step === 1 ? "Next Step" : "Finish"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default LessonPreparation;
