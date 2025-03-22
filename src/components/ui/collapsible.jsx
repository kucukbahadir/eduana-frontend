import React from "react";

function Collapsible({ collapsed, children }) {
  return (
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${collapsed ? "max-h-0 opacity-0" : "max-h-24 opacity-100"}`}>
      {children}
    </div>
  );
}

export default Collapsible;