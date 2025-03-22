import React from "react";

function Card({ title, children }) {
  return (
    <div className="flex flex-col min-w-sm gap-2.5 p-4 h-fit border border-border rounded-md shadow">
      <h3 className="font-bold mb-2.5">{title}</h3>
      {children}
    </div>
  );
}

export default Card;