import { useState } from "react";
import Card from "../components/uiDashboard/Card.jsx";
import { Button } from "../components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const LessonPreparation = () => {
  const [step, setStep] = useState(1);
  const [checkedItems, setCheckedItems] = useState({
    learningGoals: false,
    keywords: false,
    presentation: false,
    kahoot: false
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
    partC: false
  });

  const handleCheckboxChange = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = Object.values(checkedItems).every(Boolean);

  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-primary mb-2">
        {step === 1
          ? "03 - Leds and Breadboards"
          : step === 2
            ? "Set Up Materials"
            : "Plan Activity"}
      </h2>
      <p className="text-center text-sm text-muted-foreground mb-6">
        Navigating Fundamental Electronics Level 1
      </p>

      {/* Step 1: Lesson Preparation */}
      {step === 1 && (
        <Card className="p-4 bg-card border border-border rounded-md shadow-md">
          {Object.keys(checkedItems).map((key) => (
            <div key={key} className="border-b border-muted py-2 last:border-b-0">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand(key)}>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={checkedItems[key]}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleCheckboxChange(key);
                    }}
                    className="form-checkbox h-5 w-5 text-primary-button"
                  />
                  <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                </div>
                {expanded[key] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {expanded[key] && (
                <div className="mt-2 text-sm text-muted-foreground bg-muted p-3 rounded-md">
                  <p>Details for {key}...</p>
                </div>
              )}
            </div>
          ))}
        </Card>
      )}

      {/* Step 2: Materials & Presentation */}
      {step === 2 && (
        <Card className="p-4 bg-card border border-border rounded-md shadow-md">
          {/* Materials Section */}
          <div className="border-b border-muted py-2">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand("materials")}>
              <span className="font-medium text-primary">Materials</span>
              {expanded.materials ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {expanded.materials && (
              <div className="mt-2 text-sm text-muted-foreground bg-muted p-3 rounded-md">
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
          <div className="border-b border-muted py-2 mt-4">
            <div className="flex items-center justify-between cursor-pointer"
                 onClick={() => toggleExpand("presentationDetails")}>
              <span className="font-medium text-primary">Presentation</span>
              {expanded.presentationDetails ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {expanded.presentationDetails && (
              <div className="mt-2 text-sm text-muted-foreground bg-muted p-3 rounded-md">
                <p>Slide deck with instructions on how to use breadboards and LEDs.</p>
                <p>Key topics: Circuit connections, polarity, and resistor usage.</p>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Step 3: Plan Activity */}
      {step === 3 && (
        <Card className="p-4 bg-card border border-border rounded-md shadow-md">
          {["partA", "partB", "partC"].map((part) => (
            <div key={part} className="border-b border-muted py-2 last:border-b-0">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand(part)}>
                <span className="font-medium text-primary">{part.replace("part", "Part ")}</span>
                {expanded[part] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {expanded[part] && (
                <div className="mt-2 text-sm text-muted-foreground bg-muted p-3 rounded-md">
                  <p>Content for {part}...</p>
                </div>
              )}
            </div>
          ))}
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {step > 1 && (
          <Button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80"
                  onClick={() => setStep(step - 1)}>
            Previous
          </Button>
        )}
        {step < 3 && allChecked && (
          <Button className="bg-primary-button text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-button/80"
                  onClick={() => setStep(step + 1)}>
            Next Step
          </Button>
        )}
        {step === 3 && (
          <Button className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md hover:bg-destructive/80">
            End Preparation
          </Button>
        )}
      </div>
    </div>
  );
};

export default LessonPreparation;
