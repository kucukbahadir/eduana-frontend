import { useState } from "react";
import Card from "../components/uiDashboard/Card.jsx";
import { Button } from "../components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const LessonPreparation = () => {
  const lessonData = {
    subtitle: "Navigating Fundamental Electronics Level 1",
    steps: [
      { title: "03 - Leds and Breadboards" },
      { title: "Set Up Materials" },
      { title: "Plan Activity" }
    ],
    lessonPreparation: {
      learningGoals: { label: "Learning Goals", content: "Understand how LEDs work and how to use them in circuits." },
      keywords: { label: "Keywords", content: "Electricity, Current, Resistance, LED, Breadboard, Voltage." },
      presentation: { label: "Presentation", content: "Slides covering LED circuits, resistors, and safety tips." },
      kahoot: { label: "Kahoot", content: "Interactive quiz to reinforce concepts." }
    },
    materials: [
      { id: "materials", label: "Materials", content: ["Breadboards", "LEDs", "Resistors", "Batteries"] },
      { id: "presentationDetails", label: "Presentation", content: "Slide deck with step-by-step instructions on LED circuits." }
    ],
    activities: [
      { id: "partA", label: "Part A", content: "Introduction to circuits and how electricity flows." },
      { id: "partB", label: "Part B", content: "Building simple circuits using breadboards and LEDs." },
      { id: "partC", label: "Part C", content: "Testing and troubleshooting circuits." }
    ]
  };

  const [step, setStep] = useState(1);
  const [checkedItems, setCheckedItems] = useState(
    Object.keys(lessonData.lessonPreparation).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {})
  );

  const [expanded, setExpanded] = useState(
    Object.keys(lessonData.lessonPreparation).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = Object.values(checkedItems).every(Boolean);

  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h2 className="text-3xl font-bold text-center text-primary mb-2">
        {lessonData.steps[step - 1].title}
      </h2>
      <p className="text-center text-sm text-muted-foreground mb-6">
        {lessonData.subtitle}
      </p>

      {/* Step 1: Lesson Preparation */}
      {step === 1 && (
        <Card className="p-4 bg-card border border-border rounded-md shadow-md">
          {Object.keys(lessonData.lessonPreparation).map((key) => (
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
                  <span className="font-medium capitalize">
                    {lessonData.lessonPreparation[key].label}
                  </span>
                </div>
                {expanded[key] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {expanded[key] && (
                <div className="mt-2 text-sm text-muted-foreground bg-muted p-3 rounded-md">
                  <p>{lessonData.lessonPreparation[key].content}</p>
                </div>
              )}
            </div>
          ))}
        </Card>
      )}

      {/* Step 2: Materials & Presentation */}
      {step === 2 && (
        <Card className="p-4 bg-card border border-border rounded-md shadow-md">
          {lessonData.materials.map((section, index) => (
            <div key={index} className="border-b border-muted py-2">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand(section.id)}>
                <span className="font-medium text-primary">{section.label}</span>
                {expanded[section.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {expanded[section.id] && (
                <div className="mt-2 text-sm text-muted-foreground bg-muted p-3 rounded-md">
                  {Array.isArray(section.content) ? (
                    <ul className="list-disc pl-4">
                      {section.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </Card>
      )}

      {/* Step 3: Plan Activity */}
      {step === 3 && (
        <Card className="p-4 bg-card border border-border rounded-md shadow-md">
          {lessonData.activities.map((activity, index) => (
            <div key={index} className="border-b border-muted py-2 last:border-b-0">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand(activity.id)}>
                <span className="font-medium text-primary">{activity.label}</span>
                {expanded[activity.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {expanded[activity.id] && (
                <div className="mt-2 text-sm text-muted-foreground bg-muted p-3 rounded-md">
                  <p>{activity.content}</p>
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
