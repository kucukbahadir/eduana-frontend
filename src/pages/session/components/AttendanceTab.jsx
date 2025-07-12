import React, { useState, useCallback, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import AttendanceTable from "./AttendanceTable";
import { Check, LoaderCircle } from "lucide-react";

const AttendanceTab = React.memo(({ 
  students, 
  sessionId,
  initialAttendance = {}
}) => {
  const queryClient = useQueryClient();
  
  const [attendance, setAttendance] = useState(initialAttendance);
  
  const attendanceTimeoutRef = useRef(null);
  const [pendingAttendanceUpdate, setPendingAttendanceUpdate] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const postAttendance = async (attendanceData) => {
    const attendanceArray = Object.entries(attendanceData).map(([userId, attendance]) => ({
      userId,
      present: attendance.present,
      late: attendance.late,
      excused: attendance.excused,
      note: attendance.note,
    }));

    const response = await fetch(`http://localhost:3000/api/sessions/${sessionId}/attendances`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attendances: attendanceArray,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to post attendance");
    }
    return response.json();
  };

  const attendanceMutation = useMutation({
    mutationFn: postAttendance,
    
    onMutate: async (newAttendanceData) => {
      await queryClient.cancelQueries({ queryKey: ["session", sessionId] });
      
      const previousSession = queryClient.getQueryData(["session", sessionId]);
      
      queryClient.setQueryData(["session", sessionId], (oldSession) => {
        if (!oldSession) return oldSession;
        
        const updatedAttendances = Object.entries(newAttendanceData).map(([userId, attendance]) => ({
          id: attendance.id,
          user: { id: userId },
          present: attendance.present,
          late: attendance.late,
          excused: attendance.excused,
          note: attendance.note,
        }));
        
        return {
          ...oldSession,
          attendances: updatedAttendances
        };
      });
      
      return { previousSession };
    },
    
    onSuccess: () => {
      setPendingAttendanceUpdate(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    },
    
    onError: (error, newAttendanceData, context) => {
      setPendingAttendanceUpdate(false);
      setShowSuccess(false);
      
      if (context?.previousSession) {
        queryClient.setQueryData(["session", sessionId], context.previousSession);
      }
      
      toast.error(`Failed to save attendance: ${error.message}`);
    },
    
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["session", sessionId] });
    },
  });

  const debouncedAttendanceUpdate = useCallback((attendanceData) => {
    if (attendanceTimeoutRef.current) {
      clearTimeout(attendanceTimeoutRef.current);
    }

    setShowSuccess(false);
    setPendingAttendanceUpdate(true);

    attendanceTimeoutRef.current = setTimeout(() => {
      attendanceMutation.mutate(attendanceData);
    }, 1000);
  }, [attendanceMutation]);

  const handleToggleAttendance = useCallback((studentId, field, value) => {
    setAttendance(currentAttendance => {
      const studentAttendance = currentAttendance[studentId] || {};
      
      let newStudentAttendance = {
        ...studentAttendance,
        [field]: value,
      };

      // Apply business logic BEFORE any API calls
      if (field === "present" && !value) {
        // If unchecking present, also uncheck late (can't be late if not present)
        newStudentAttendance.late = false;
      } else if (field === "late" && value && !studentAttendance.present) {
        // If checking late but not present, also check present (must be present to be late)
        newStudentAttendance.present = true;
      }

      const newAttendance = {
        ...currentAttendance,
        [studentId]: newStudentAttendance,
      };

      // Debounce the API call with the corrected attendance data
      debouncedAttendanceUpdate(newAttendance);
      
      return newAttendance;
    });
  }, [debouncedAttendanceUpdate]);

  React.useEffect(() => {
    return () => {
      if (attendanceTimeoutRef.current) {
        clearTimeout(attendanceTimeoutRef.current);
      }
    };
  }, []);

  const getBackgroundColor = () => {
    if (showSuccess) return "bg-success";
    if (pendingAttendanceUpdate) return "bg-warning";
    return "bg-muted";
  };

  const hasActiveStatus = pendingAttendanceUpdate || showSuccess;

  return (
    <div className={`flex flex-col gap-0 p-1 rounded-lg transition-colors duration-300 ${getBackgroundColor()}`}>
      <AttendanceTable 
        students={students} 
        attendance={attendance} 
        handleToggleAttendance={handleToggleAttendance} 
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
            {pendingAttendanceUpdate ? (
              <>
                <LoaderCircle className="animate-spin size-3" />
                <span>Saving attendance changes...</span>
              </>
            ) : showSuccess ? (
              <>
                <Check className="size-3" />
                <span>Attendance saved successfully!</span>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
});

export default AttendanceTab;