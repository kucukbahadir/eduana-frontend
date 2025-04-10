import React from "react";

function ProgressCategory({ title, progress, variant }) {
  const variantClasses = {
    "chart-1": {
      bg: "bg-primary-button/5",
      text: "text-primary-button",
      iconBg: "bg-primary-button/10",
    },
    "chart-2": {
      bg: "bg-success/5",
      text: "text-success",
      iconBg: "bg-success/10",
    },
    "chart-3": {
      bg: "bg-warning/5",
      text: "text-warning",
      iconBg: "bg-warning/10",
    },
  };

  const classes = variantClasses[variant] || {
    bg: "bg-primary/5",
    text: "text-primary",
    iconBg: "bg-primary/5",
  };

  return (
    <div className={`flex flex-col gap-2.5 items-center justify-center ${classes.bg} ${classes.text} rounded-md p-2.5`}>
      <div className={`flex justify-center items-center rounded-full ${classes.iconBg} size-10`}>
        <strong>{progress}</strong>
      </div>
      <small>{title}</small>
    </div>
  );
}

export default ProgressCategory;