import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`p-2 ${className}`}>{children}</div>;
};

export default Card;
