import React, { useState, useCallback, useMemo, useRef } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import evaluationCriteria from "../constants/evaluationCriteria";
import LightweightSelect from "./LightweightSelect";

const EvaluationRow = React.memo(({ student, initialEvaluations, onEvaluationChange, studentIndex, totalStudents }) => {
  const rowRef = useRef(null);

  const [rowEvaluations, setRowEvaluations] = useState(() => ({
    participation: initialEvaluations?.participation ?? 3,
    understanding: initialEvaluations?.understanding ?? 3,
    collaboration: initialEvaluations?.collaboration ?? 3,
    problem_solving: initialEvaluations?.problem_solving ?? 3,
    task_completion: initialEvaluations?.task_completion ?? 3,
  }));

  const createHandler = useCallback(
    (criteriaId, criteriaIndex) => (value) => {
      const parsedValue = parseInt(value, 10);

      setRowEvaluations((prev) => ({
        ...prev,
        [criteriaId]: parsedValue,
      }));

      onEvaluationChange(student.id, criteriaId, value);

      // Auto-advance focus for rapid data entry
      setTimeout(() => {
        if (criteriaIndex < evaluationCriteria.length - 1) {
          const nextSelect = rowRef.current?.querySelectorAll('button[aria-haspopup="listbox"]')?.[criteriaIndex + 1];
          nextSelect?.focus();
        } else if (studentIndex < totalStudents - 1) {
          const nextRow = rowRef.current?.parentElement?.children?.[studentIndex + 1];
          const firstSelectInNextRow = nextRow?.querySelector('button[aria-haspopup="listbox"]');
          firstSelectInNextRow?.focus();
        }
      }, 100);
    },
    [onEvaluationChange, student.id, studentIndex, totalStudents]
  );

  const handlers = useMemo(() => {
    const handlerMap = {};
    evaluationCriteria.forEach((criteria, index) => {
      handlerMap[criteria.id] = createHandler(criteria.id, index);
    });
    return handlerMap;
  }, [createHandler]);

  return (
    <TableRow ref={rowRef} className={"group hover:bg-muted/30 transition-colors "}>
      <TableCell className="font-medium sticky left-0 bg-background group-hover:bg-muted/30">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground w-6">{studentIndex + 1}.</span>
          {student.name}
        </div>
      </TableCell>
      {evaluationCriteria.map((criteria, index) => (
        <TableCell key={criteria.id} className="text-center">
          <div className="flex items-center justify-center">
            <LightweightSelect
              value={rowEvaluations[criteria.id]}
              onChange={handlers[criteria.id]}
              className="transition-all hover:scale-105 focus-within:scale-105"
            />
          </div>
        </TableCell>
      ))}
    </TableRow>
  );
});

export default EvaluationRow;
