import React from "react";

function Card({ title, children, className }) {
  return (
    <div className={"flex flex-col gap-2.5 p-4 h-fit border border-border rounded-md shadow " + className}>
      <h3 className="font-bold mb-2.5 text-xl text-balance">{title}</h3>
      {children}
    </div>
  );
}

export default Card;