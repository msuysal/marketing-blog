"use client";

import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
  theme: "neutral", // or custom to match the blog's aesthetic
  securityLevel: "loose",
  fontFamily: "var(--font-inter)",
});

interface MermaidProps {
  chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.contentLoaded();
      // Render again if chart changes
      mermaid.init(undefined, ref.current);
    }
  }, [chart]);

  return (
    <div className="mermaid-container" style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
      <div ref={ref} className="mermaid">
        {chart}
      </div>
    </div>
  );
};

export default Mermaid;
