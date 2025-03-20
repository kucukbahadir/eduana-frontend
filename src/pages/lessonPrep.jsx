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
      <h2 className="text-2xl font-bold text-center">
        {step === 1 ? "03 - Leds and Breadboards" : "Next Step Title"}
      </h2>
      <p className="text-center text-sm text-gray-500 mb-6">
        Navigating Fundamental Electronics Level 1
      </p>

      <Card className="p-4">
        {step === 1 ? (
          // Step 1 Content
          Object.keys(checkedItems).map((key) => (
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
                    className="form-checkbox h-5 w-5"
                  />
                  <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                </div>
                {expanded[key] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {expanded[key] && (
                <div className="mt-2 text-sm text-gray-600">
                  <p>Placeholder text for {key} details...</p>
                </div>
              )}
            </div>
          ))
        ) : (
          // Step 2 Content (Next Step)
          <div>
            <h3 className="text-xl font-bold mb-4">Materials</h3>
            <ul className="text-gray-600">
              <li>1. Breadboards (1 for each student)</li>
              <li>2. LEDs</li>
              <li>3. Resistors</li>
              <li>4. Gauge</li>
              <li>5. Batteries</li>
            </ul>
          </div>
        )}
      </Card>

      <div className="flex justify-between mt-4">
        {step > 1 && (
          <Button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setStep(step - 1)}>
            Previous
          </Button>
        )}
        {allChecked && (
          <Button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setStep(step + 1)}>
            Next Step
          </Button>
        )}
      </div>
    </div>
  );
};

export default LessonPreparation;
