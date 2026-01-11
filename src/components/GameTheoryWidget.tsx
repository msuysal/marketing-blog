"use client";

import React, { useState } from "react";

const GameTheoryWidget = () => {
    const [history, setHistory] = useState<{ user: string; ai: string; userScore: number; aiScore: number }[]>([]);
    const [scores, setScores] = useState({ user: 0, ai: 0 });

    const aiMove = () => {
        // Tit-for-Tat strategy
        if (history.length === 0) return "cooperate";
        return history[history.length - 1].user;
    };

    const playRound = (userMove: string) => {
        const aiM = aiMove();
        let userBatch = 0;
        let aiBatch = 0;

        if (userMove === "cooperate" && aiM === "cooperate") {
            userBatch = 3;
            aiBatch = 3;
        } else if (userMove === "cooperate" && aiM === "defect") {
            userBatch = 0;
            aiBatch = 5;
        } else if (userMove === "defect" && aiM === "cooperate") {
            userBatch = 5;
            aiBatch = 0;
        } else {
            userBatch = 1;
            aiBatch = 1;
        }

        const newScores = {
            user: scores.user + userBatch,
            ai: scores.ai + aiBatch,
        };

        setScores(newScores);
        setHistory([...history, { user: userMove, ai: aiM, userScore: userBatch, aiScore: aiBatch }]);
    };

    return (
        <div style={{
            padding: "2rem",
            backgroundColor: "#f9f9f9",
            borderRadius: "12px",
            border: "1px solid #eee",
            margin: "2rem 0",
            fontFamily: "var(--font-inter), sans-serif",
            color: "#333"
        }}>
            <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>Interactive: The Prisoner's Dilemma</h3>
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1.5rem" }}>
                Test your strategy against our Tit-for-Tat AI. Will you cooperate for mutual gain or defect for a quick win?
            </p>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
                <div style={{ textAlign: "center", flex: 1, padding: "1rem", borderRight: "1px solid #eee" }}>
                    <div style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#999", marginBottom: "0.5rem" }}>Your Score</div>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#111" }}>{scores.user}</div>
                </div>
                <div style={{ textAlign: "center", flex: 1, padding: "1rem" }}>
                    <div style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#999", marginBottom: "0.5rem" }}>AI Score</div>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#111" }}>{scores.ai}</div>
                </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
                <button
                    onClick={() => playRound("cooperate")}
                    style={{
                        flex: 1,
                        padding: "1rem",
                        backgroundColor: "#111",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "600",
                        transition: "opacity 0.2s"
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                    Cooperate
                </button>
                <button
                    onClick={() => playRound("defect")}
                    style={{
                        flex: 1,
                        padding: "1rem",
                        backgroundColor: "#fff",
                        color: "#111",
                        border: "2px solid #111",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "600",
                        transition: "background-color 0.2s"
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
                >
                    Defect
                </button>
            </div>

            <div style={{ maxHeight: "200px", overflowY: "auto", fontSize: "0.85rem", color: "#666" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ borderBottom: "1px solid #eee" }}>
                            <th style={{ textAlign: "left", padding: "0.5rem 0" }}>Round</th>
                            <th style={{ textAlign: "left" }}>You</th>
                            <th style={{ textAlign: "left" }}>AI</th>
                            <th style={{ textAlign: "right" }}>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((round, i) => (
                            <tr key={i} style={{ borderBottom: "1px solid #fcfcfc" }}>
                                <td style={{ padding: "0.5rem 0" }}>#{i + 1}</td>
                                <td style={{ color: round.user === "cooperate" ? "#2e7d32" : "#d32f2f" }}>{round.user}</td>
                                <td style={{ color: round.ai === "cooperate" ? "#2e7d32" : "#d32f2f" }}>{round.ai}</td>
                                <td style={{ textAlign: "right" }}>+{round.userScore} / +{round.aiScore}</td>
                            </tr>
                        )).reverse()}
                    </tbody>
                </table>
            </div>

            {history.length > 0 && (
                <button
                    onClick={() => { setHistory([]); setScores({ user: 0, ai: 0 }); }}
                    style={{
                        marginTop: "1.5rem",
                        background: "none",
                        border: "none",
                        color: "#999",
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        textDecoration: "underline"
                    }}
                >
                    Reset Game
                </button>
            )}
        </div>
    );
};

export default GameTheoryWidget;
