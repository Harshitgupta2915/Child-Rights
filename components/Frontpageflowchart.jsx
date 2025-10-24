"use client";
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function MermaidChart() {
  const ref = useRef(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  const chart = `
    graph TD
      A[Start] --> B{Decision?}
      B -->|Yes| C[Do something]
      B -->|No| D[Do something else]
  `;

  return <div ref={ref} className="mermaid">{chart}</div>;
}
