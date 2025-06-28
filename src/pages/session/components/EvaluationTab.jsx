import React, { useState, useCallback, useRef, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import EvaluationTable from "./EvaluationTable";
import { Check, LoaderCircle } from "lucide-react";

const EvaluationTab = React.memo(({ 
  students, 
  sessionId,
  initialEvaluations = {}
}) => {
  const queryClient = useQueryClient();
  
  const [evaluations, setEvaluations] = useState(initialEvaluations);
  
  const evaluationTimeoutRef = useRef(null);
  const [pendingEvaluationUpdate, setPendingEvaluationUpdate] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const postEvaluations = async (evaluations) => {
    const evaluationsArray = Object.entries(evaluations).map(([userId, criteria]) => ({
      userId,
      ...criteria
    }));

    const response = await fetch(`http://localhost:3000/api/sessions/${sessionId}/evaluations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        evaluationsArray,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to post evaluations");
    }
    return response.json();
  };

  const evaluationMutation = useMutation({
    mutationFn: postEvaluations,
    
    onMutate: async (newEvaluations) => {
      await queryClient.cancelQueries({ queryKey: ["session", sessionId] });
      
      const previousSession = queryClient.getQueryData(["session", sessionId]);
      
      queryClient.setQueryData(["session", sessionId], (oldSession) => {
        if (!oldSession) return oldSession;
        
        const updatedSessionEvaluations = Object.entries(newEvaluations).map(([userId, criteria]) => ({
          user_id: userId,
          participation_score: criteria.participation,
          understanding_score: criteria.understanding,
          collaboration_score: criteria.collaboration,
          problem_solving_score: criteria.problem_solving,
          task_completion_score: criteria.task_completion,
        }));
        
        return {
          ...oldSession,
          sessionEvaluations: updatedSessionEvaluations
        };
      });
      
      return { previousSession };
    },
    
    onSuccess: () => {
      setPendingEvaluationUpdate(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    },
    
    onError: (error, newEvaluations, context) => {
      setPendingEvaluationUpdate(false);
      setShowSuccess(false);
      
      if (context?.previousSession) {
        queryClient.setQueryData(["session", sessionId], context.previousSession);
      }
      
      toast.error(`Failed to save evaluations: ${error.message}`);
    },
    
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["session", sessionId] });
    },
  });

  const debouncedEvaluationUpdate = useCallback((evaluationData) => {
    if (evaluationTimeoutRef.current) {
      clearTimeout(evaluationTimeoutRef.current);
    }

    setShowSuccess(false);
    setPendingEvaluationUpdate(true);

    evaluationTimeoutRef.current = setTimeout(() => {
      evaluationMutation.mutate(evaluationData);
    }, 1500);
  }, [evaluationMutation]);

  const handleEvaluationChange = useCallback((studentId, criteriaId, value) => {
    const newEvaluations = {
      ...evaluations,
      [studentId]: {
        ...evaluations[studentId],
        [criteriaId]: parseInt(value, 10),
      },
    };
    
    setEvaluations(newEvaluations);
    debouncedEvaluationUpdate(newEvaluations);
  }, [evaluations, debouncedEvaluationUpdate]);

  React.useEffect(() => {
    return () => {
      if (evaluationTimeoutRef.current) {
        clearTimeout(evaluationTimeoutRef.current);
      }
    };
  }, []);

  const getBackgroundColor = () => {
    if (showSuccess) return "bg-success";
    if (pendingEvaluationUpdate) return "bg-warning";
    return "bg-muted";
  };

  const hasActiveStatus = pendingEvaluationUpdate || showSuccess;

  return (
    <div className={`flex flex-col gap-0 p-1 rounded-lg transition-colors duration-300 ${getBackgroundColor()}`}>
      <EvaluationTable 
        students={students} 
        evaluations={evaluations} 
        handleEvaluationChange={handleEvaluationChange} 
      />
      
      <div 
        className={`relative overflow-hidden transition-all duration-300 ease-out ${
          hasActiveStatus 
            ? 'h-7 opacity-100' 
            : 'h-0 opacity-0'
        }`}
      >
        <div className={`absolute pt-1 inset-0 transform transition-all duration-300 ease-out ${
          hasActiveStatus 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        }`}>
          <div className="flex justify-center text-secondary items-center text-xs font-bold h-full gap-2">
            {pendingEvaluationUpdate ? (
              <>
                <LoaderCircle className="animate-spin size-3" />
                <span>Saving evaluation changes...</span>
              </>
            ) : showSuccess ? (
              <>
                <Check className="size-3" />
                <span>Evaluations saved successfully!</span>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
});

export default EvaluationTab;