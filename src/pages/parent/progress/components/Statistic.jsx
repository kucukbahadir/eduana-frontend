import React, { useState, useEffect } from "react";

function Statistic({ value, lead, suffix }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isNaN(value)) {
      setDisplayValue(value);
      return;
    }

    const interval = setInterval(() => {
      setDisplayValue((current) => {
        if (current >= value) {
          clearInterval(interval);
          return value;
        }
        const animationDuration = 500; // 0.5 seconds for all statistics
        const totalSteps = animationDuration / 30;
        const step = Math.max(1, Math.ceil(value / totalSteps));
        return Math.min(current + step, value);
      });
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="flex flex-col items-center justify-center bg-muted rounded-md p-4">
      <strong className="text-2xl font-bold">{displayValue}{suffix}</strong>
      <span className="text-sm text-center font-light">{lead}</span>
    </div>
  );
}

export default Statistic;