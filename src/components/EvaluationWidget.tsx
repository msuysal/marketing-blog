"use client";

import React from "react";

const EvaluationWidget: React.FC = () => {
    return (
        <div style={{ width: "100%", margin: "2rem 0", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border-color, #eaeaea)" }}>
            <iframe 
                src="/influencer-evaluation.html" 
                style={{ width: "100%", height: "800px", border: "none", display: "block" }} 
                title="Influencer Evaluation Engine"
            />
        </div>
    );
};

export default EvaluationWidget;
