import { useEffect, useState } from "react";
import Card from "../components/uiDashboard/Card.jsx";
import { Button } from "../components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import TeacherDashboardService from "@/services/teacherDashboardService.js";
import { useNavigate } from "react-router";

const LessonPreparation = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lessonData, setLessonData] = useState(null);
  const [step, setStep] = useState(1);
  const [checkedItems, setCheckedItems] = useState({});
  const [expanded, setExpanded] = useState({});

  const lessonId = 17;
  const navigate = useNavigate(); // Hook voor navigatie

  useEffect(() => {
    const fetchLessonInfo = async () => {
      try {
        const data = await TeacherDashboardService.getLessonInfo(lessonId);
        console.log(data);
        setLessonData(data);

        // Initialize checkbox en expand state uit de data
        const initialChecked = Object.keys(data?.course?.lessonPreparation || {}).reduce((acc, key) => {
          acc[key] = false;
          return acc;
        }, {});
        const initialExpanded = Object.keys(data?.course?.lessonPreparation || {}).reduce((acc, key) => {
          acc[key] = false;
          return acc;
        }, {});

        setCheckedItems(initialChecked);
        setExpanded(initialExpanded);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLessonInfo();
  }, []);

  const handleCheckboxChange = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };


  // Navigeren naar '/evaluation' wanneer de gebruiker de voorbereiding afsluit
  const handleEndPreparationClick = () => {
    if (step === 3) {
      navigate("/evaluation"); // Navigeren naar '/evaluation' bij stap 3
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!lessonData) return null;

  const course = lessonData?.course || {};

  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h2 className="text-3xl font-bold text-center text-primary mb-2">
        {course?.title || 'Course Title'}
      </h2>
      <p className="text-center text-sm text-muted-foreground mb-6">
        {course?.subtitle || 'Course Subtitle'}
      </p>

      {/* Step 1: Lesson Preparation */}
      {step === 1 && course?.lessonPreparation && (
        <Card className="p-4 bg-card border border-border rounded-md shadow-md">
          {Object.keys(course.lessonPreparation).map((key) => (
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
                    {course.lessonPreparation[key]?.label}
                  </span>
                </div>
                {expanded[key] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {expanded[key] && (
                <div className="mt-2 text-sm text-muted-foreground bg-muted p-3 rounded-md">
                  <p>{course.lessonPreparation[key]?.content}</p>
                </div>
              )}
            </div>
          ))}
        </Card>
      )}

      {/* Step 2: Materials & Presentation */}
      {step === 2 && course?.materials && (
        <Card className="p-4 bg-card border border-border rounded-md shadow-md">
          {course.materials.map((section, index) => (
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
      {step === 3 && course?.activities && (
        <Card className="p-4 bg-card border border-border rounded-md shadow-md">
          {course.activities.map((activity, index) => (
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

      {/* Navigatieknoppen */}
      <div className="flex justify-between mt-6">
        {step > 1 && (
          <Button
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80"
            onClick={() => setStep(step - 1)}
          >
            Previous
          </Button>
        )}
        {step < 3 && (
          <Button
            className="bg-primary-button text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-button/80"
            onClick={() => setStep(step + 1)}
          >
            Next Step
          </Button>
        )}
        {step === 3 && (
          <Button
            className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md hover:bg-destructive/80"
            onClick={handleEndPreparationClick}
          >
            End Preparation
          </Button>
        )}
      </div>
    </div>
  );
};

export default LessonPreparation;
