import React, { useState, useEffect } from "react";
import { Progress as ProgressBar } from "@/components/ui/progress";

function BarStatistic({ subject, amount, capitalize = false }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setValue(amount), 500);
    return () => clearTimeout(timer);
  }, [amount]);

  return (
    <div className="flex items-center">
      <span className="min-w-32 text-sm">
        {!capitalize ? subject.charAt(0).toUpperCase() + subject.slice(1) : subject.toUpperCase()}
      </span>
      <ProgressBar value={value} />
    </div>
  );
}

export default BarStatistic;
