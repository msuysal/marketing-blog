"use client";

import React, { useState } from 'react';
import styles from './LuxuryDopamineQuiz.module.css';

const QUESTIONS = [
    {
        question: "Is your strategy document optimized for internal clarity or client/leadership admiration?",
        options: [
            { text: "Optimized for a clear, boring operational path", score: { execution: 25, aesthetics: 0 } },
            { text: "Optimized for polished presentation and 'wow' factor", score: { execution: 0, aesthetics: 25 } }
        ]
    },
    {
        question: "When a project hits a roadblock, what is the immediate reflex?",
        options: [
            { text: "Code a manual bypass or fix the data signal", score: { execution: 25, aesthetics: 0 } },
            { text: "Create a sophisticated framework to explain the complexity", score: { execution: 0, aesthetics: 25 } }
        ]
    },
    {
        question: "How is success primarily validated in your typical workflow?",
        options: [
            { text: "System output and structural resilience", score: { execution: 25, aesthetics: 0 } },
            { text: "Insight reports and stakeholder sentiment", score: { execution: 0, aesthetics: 25 } }
        ]
    },
    {
        question: "What is the primary goal of the tools and interfaces you build?",
        options: [
            { text: "To make the process move from theory to operation", score: { execution: 25, aesthetics: 0 } },
            { text: "To make the user feel informed and sophisticated", score: { execution: 0, aesthetics: 25 } }
        ]
    }
];

const LuxuryDopamineQuiz = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [scores, setScores] = useState({ execution: 50, aesthetics: 50 }); // Start in middle
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswer = (score: { execution: number, aesthetics: number }) => {
        setScores(prev => ({
            execution: prev.execution + (score.execution === 0 ? -12.5 : score.execution / 2),
            aesthetics: prev.aesthetics + (score.aesthetics === 0 ? -12.5 : score.aesthetics / 2)
        }));

        if (currentStep < QUESTIONS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsFinished(true);
        }
    };

    const getResultGroup = () => {
        const { execution, aesthetics } = scores;
        if (aesthetics >= 50 && execution < 50) return {
            title: "The Aesthetic Trap",
            description: "High Beauty, Low Execution. You are likely being rewarded for the sensation of insight rather than the reality of output. Your system is a status symbol, not a tool."
        };
        if (aesthetics < 50 && execution >= 50) return {
            title: "The Grunt Work",
            description: "Low Beauty, High Execution. Functional but uninspiring. You have the engine, but lack the structural sophistication to scale your influence."
        };
        if (aesthetics >= 50 && execution >= 50) return {
            title: "The Systemic Sweet Spot",
            description: "Utility-Based Friction. You've balanced complexity with delivery. Your systems are sophisticated enough to matter and resilient enough to work."
        };
        return {
            title: "The Stagnation Zone",
            description: "Low Beauty, Low Execution. The project lacks both the aesthetic of a vision and the integrity of a solution. It is time to recalibrate the architecture."
        };
    };

    const reset = () => {
        setCurrentStep(0);
        setScores({ execution: 50, aesthetics: 50 });
        setIsFinished(false);
    };

    const result = getResultGroup();

    return (
        <div className={styles.quizContainer}>
            {!isFinished ? (
                <div className={styles.questionBox}>
                    <span className={styles.subtitle}>The Diagnostic</span>
                    <h3 className={styles.title}>Luxury Dopamine Audit</h3>
                    <p className={styles.questionText}>{QUESTIONS[currentStep].question}</p>
                    <div className={styles.options}>
                        {QUESTIONS[currentStep].options.map((opt, i) => (
                            <button key={i} className={styles.optionBtn} onClick={() => handleAnswer(opt.score)}>
                                {opt.text}
                            </button>
                        ))}
                    </div>
                    <div className={styles.progress}>
                        <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
                        <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.results}>
                    <span className={styles.subtitle}>Diagnostic Result</span>
                    <h3 className={styles.resultTitle}>{result.title}</h3>

                    <div className={styles.matrixContainer}>
                        <div className={styles.matrixLines}>
                            <div className={styles.matrixLineH}></div>
                            <div className={styles.matrixLineV}></div>
                        </div>
                        <div className={styles.axisLabels}>
                            <span className={styles.labelTop}>Execution</span>
                            <span className={styles.labelBottom}>Stagnation</span>
                            <span className={styles.labelLeft}>Functional</span>
                            <span className={styles.labelRight}>Sophisticated</span>
                        </div>
                        <div className={styles.quadrantLabel + " " + styles.qTL}>Trap</div>
                        <div className={styles.quadrantLabel + " " + styles.qTR}>Sweet Spot</div>
                        <div className={styles.quadrantLabel + " " + styles.qBL}>Static</div>
                        <div className={styles.quadrantLabel + " " + styles.qBR}>Grunt</div>

                        <div
                            className={styles.plot}
                            style={{
                                left: `${scores.aesthetics}%`,
                                top: `${100 - scores.execution}%`
                            }}
                        ></div>
                    </div>

                    <p className={styles.resultDesc}>{result.description}</p>
                    <button className={styles.resetBtn} onClick={reset}>Re-Audit Project</button>
                </div>
            )}
        </div>
    );
};

export default LuxuryDopamineQuiz;
