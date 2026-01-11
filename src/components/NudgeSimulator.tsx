"use client";

import React, { useState, useEffect } from "react";

const NudgeSimulator = () => {
    const [isNudged, setIsNudged] = useState(false);
    const [stats, setStats] = useState({ clicks: 0, views: 0, convRate: 0 });
    const [log, setLog] = useState<string[]>([]);

    const baseRate = 2.4; // 2.4% baseline
    const nudgeBoost = 1.8; // +1.8% boost from nudge

    const simulateAction = () => {
        const currentRate = isNudged ? baseRate + nudgeBoost : baseRate;
        const isClick = Math.random() * 100 < currentRate;

        setStats(prev => {
            const newViews = prev.views + 1;
            const newClicks = isClick ? prev.clicks + 1 : prev.clicks;
            return {
                views: newViews,
                clicks: newClicks,
                convRate: Number(((newClicks / newViews) * 100).toFixed(2))
            };
        });

        if (isClick) {
            setLog(prev => [`[${new Date().toLocaleTimeString()}] Conversion logged via ${isNudged ? 'Nudged' : 'Default'} path`, ...prev.slice(0, 4)]);
        }
    };

    useEffect(() => {
        const interval = setInterval(simulateAction, 800);
        return () => clearInterval(interval);
    }, [isNudged]);

    return (
        <div style={{
            padding: "2rem",
            backgroundColor: "#fff",
            borderRadius: "12px",
            border: "1px solid var(--border-subtle)",
            margin: "2rem 0",
            fontFamily: "var(--font-sans)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
        }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h4 style={{ margin: 0, color: "var(--foreground)" }}>Choice Architecture Lab: The Default Effect</h4>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: "bold", textTransform: "uppercase" }}>Nudge Active:</span>
                    <button
                        onClick={() => setIsNudged(!isNudged)}
                        style={{
                            padding: "4px 12px",
                            backgroundColor: isNudged ? "var(--accent)" : "#eee",
                            border: "none",
                            borderRadius: "20px",
                            cursor: "pointer",
                            fontWeight: "600",
                            color: "var(--accent-text)"
                        }}
                    >
                        {isNudged ? "ON" : "OFF"}
                    </button>
                </div>
            </div>

            <p style={{ fontSize: "0.9rem", color: "var(--gray-dark)", marginBottom: "1.5rem" }}>
                Simulating user interactions in real-time. The "Nudge" modifies the architectural default, reducing cognitive friction and increasing path probability.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ padding: "1rem", backgroundColor: "#f9f9f9", borderRadius: "8px", textAlign: "center" }}>
                    <div style={{ fontSize: "0.7rem", color: "#999", marginBottom: "5px" }}>SESSIONS</div>
                    <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{stats.views}</div>
                </div>
                <div style={{ padding: "1rem", backgroundColor: "#f9f9f9", borderRadius: "8px", textAlign: "center" }}>
                    <div style={{ fontSize: "0.7rem", color: "#999", marginBottom: "5px" }}>CONVERSIONS</div>
                    <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{stats.clicks}</div>
                </div>
                <div style={{ padding: "1rem", backgroundColor: isNudged ? "rgba(226, 195, 49, 0.1)" : "#f9f9f9", borderRadius: "8px", textAlign: "center", border: isNudged ? "1px solid var(--accent)" : "1px solid transparent" }}>
                    <div style={{ fontSize: "0.7rem", color: isNudged ? "var(--accent-text)" : "#999", marginBottom: "5px" }}>CONV. RATE</div>
                    <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: isNudged ? "#000" : "inherit" }}>{stats.convRate}%</div>
                </div>
            </div>

            <div style={{ fontSize: "0.8rem", backgroundColor: "#000", color: "#0f0", padding: "1rem", borderRadius: "4px", minHeight: "100px", fontFamily: "monospace" }}>
                <div>{'>'} System Monitoring Active...</div>
                {log.map((entry, i) => <div key={i} style={{ opacity: 1 - (i * 0.2) }}>{entry}</div>)}
            </div>

            <div style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#999", fontStyle: "italic" }}>
                *Operational Note: High precision in choice architecture often yields higher conversion but risks user agency degradation over long cycles.
            </div>
        </div>
    );
};

export default NudgeSimulator;
