import React, { useRef, useState } from "react";

function Collapsible({ collapsed, children }) {
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);
  
  React.useEffect(() => {
    if (!collapsed && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [collapsed]);

  return (
    <div 
      ref={contentRef}
      style={{ maxHeight: maxHeight }}
      className={`overflow-hidden transition-all duration-300 ease-in-out ${collapsed ? "opacity-0" : "opacity-100"}`}
    >
      {children}
    </div>
  );
}

export default Collapsible;