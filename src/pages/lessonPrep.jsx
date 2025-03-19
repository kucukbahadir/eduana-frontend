import { useState } from "react";
import { Button } from "../components/ui/button.jsx";

export default function LessonPreparation() {
  const [step, setStep] = useState(1);
  const [expanded, setExpanded] = useState(null);
  const [checks, setChecks] = useState({
    learningGoals: false,
    keywords: false,
    presentation: false,
    kahoot: false,
    materials: false,
    detailedPresentation: false,
    partA: false,
    partB: false,
    partC: false,
  });

  const content = {
    learningGoals: ["Understand the basics of LEDs", "Explore color mixing", "Understand luminosity", "Work with breadboards"],
    keywords: ["LED", "Breadboard", "Resistor", "Circuit"],
    presentation: ["Slide 1: Introduction", "Slide 2: Components", "Slide 3: Hands-on Activity"],
    kahoot: ["Quiz with 10 questions", "Covers LED basics", "Includes circuit troubleshooting"],
    materials: ["Breadboards", "LEDs", "Resistors", "Batteries"],
    detailedPresentation: ["Explain circuit connections", "Demonstrate real-world examples"],
  };

  const toggleExpand = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  const allCheckedStep1 = checks.learningGoals && checks.keywords && checks.presentation && checks.kahoot;
  const allCheckedStep2 = checks.materials && checks.detailedPresentation;
  const allCheckedStep3 = checks.partA && checks.partB && checks.partC;

  const handleNext = () => {
    if (step === 1 && allCheckedStep1) setStep(2);
    if (step === 2 && allCheckedStep2) setStep(3);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setChecks({ ...checks, [name]: checked });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">03 - Leds and Breadboards</h2>

      {step === 1 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Part 1</h3>
          {['learningGoals', 'keywords', 'presentation', 'kahoot'].map((item) => (
            <div key={item} className="mb-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={item}
                  checked={checks[item]}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <h4 className="font-medium cursor-pointer" onClick={() => toggleExpand(item)}>
                  {item.replace(/([A-Z])/g, ' $1')}
                </h4>
              </div>
              {expanded === item && (
                <div className="ml-6 mt-1 text-gray-600">
                  {content[item].map((text, index) => (
                    <p key={index}>- {text}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button
            onClick={handleNext}
            disabled={!allCheckedStep1}
            className={`mt-6 px-4 py-2 rounded ${allCheckedStep1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
          >
            Next
          </Button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Part 2</h3>
          {['materials', 'detailedPresentation'].map((item) => (
            <div key={item} className="mb-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={item}
                  checked={checks[item]}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <h4 className="font-medium cursor-pointer" onClick={() => toggleExpand(item)}>
                  {item.replace(/([A-Z])/g, ' $1')}
                </h4>
              </div>
              {expanded === item && (
                <div className="ml-6 mt-1 text-gray-600">
                  {content[item].map((text, index) => (
                    <p key={index}>- {text}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button
            onClick={handleNext}
            disabled={!allCheckedStep2}
            className={`mt-6 px-4 py-2 rounded ${allCheckedStep2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
          >
            Next
          </Button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Part 3</h3>
          {['partA', 'partB', 'partC'].map((item) => (
            <label key={item} className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                name={item}
                checked={checks[item]}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="capitalize">{item.replace(/([A-Z])/g, ' $1')}</span>
            </label>
          ))}
          <Button
            onClick={() => alert("Preparation Complete!")}
            disabled={!allCheckedStep3}
            className={`mt-6 px-4 py-2 rounded ${allCheckedStep3 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}
          >
            End Preparation
          </Button>
        </div>
      )}
    </div>
  );
}
