"use client";

import React, { useState } from 'react';
import styles from './StandardDiagram.module.css';

const OptimizationVisual = () => {
    const [activePath, setActivePath] = useState<'exploitation' | 'exploration' | null>(null);

    // SVG path coordinates based on 600x400 viewbox logic mapped to percentages for simplicity
    // Or absolute pixels if I use fixed SVG. Let's use 100% width SVG and percentage coordinates.

    return (
        <div className={styles.container}>
            <div className={styles.title}>The Paradox of Precision</div>

            <div className={styles.diagramArea} style={{ height: '350px' }}>
                <svg className={styles.connector}>
                    <defs>
                        <marker id="arrowhead-opt" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="var(--gray-medium)" />
                        </marker>
                        <marker id="arrowhead-opt-active" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent)" />
                        </marker>
                    </defs>

                    {/* Start to Decision */}
                    <line x1="50%" y1="60" x2="50%" y2="120" className={styles.line} markerEnd="url(#arrowhead-opt)" />

                    {/* Exploitation Path (Left) */}
                    <path d="M50% 160 L25% 220" className={activePath === 'exploitation' ? styles.lineActive : styles.line} markerEnd={activePath === 'exploitation' ? "url(#arrowhead-opt-active)" : "url(#arrowhead-opt)"} />
                    <line x1="25%" y1="260" x2="25%" y2="300" className={activePath === 'exploitation' ? styles.lineActive : styles.line} markerEnd={activePath === 'exploitation' ? "url(#arrowhead-opt-active)" : "url(#arrowhead-opt)"} />

                    {/* Exploration Path (Right) */}
                    <path d="M50% 160 L75% 220" className={activePath === 'exploration' ? styles.lineActive : styles.line} markerEnd={activePath === 'exploration' ? "url(#arrowhead-opt-active)" : "url(#arrowhead-opt)"} />
                    <line x1="75%" y1="260" x2="75%" y2="300" className={activePath === 'exploration' ? styles.lineActive : styles.line} markerEnd={activePath === 'exploration' ? "url(#arrowhead-opt-active)" : "url(#arrowhead-opt)"} />
                </svg>

                {/* Nodes */}
                <div className={styles.node} style={{ top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                    Objective: Growth
                </div>

                <div className={styles.node} style={{ top: '120px', left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', width: '100px', padding: '1.5rem 0.5rem', background: '#fdfdfb' }}>
                    Precision?
                </div>

                {/* Left Branch */}
                <div
                    className={`${styles.node} ${activePath === 'exploitation' ? styles.nodeHighlight : ''}`}
                    style={{ top: '220px', left: '25%', transform: 'translateX(-50%)', cursor: 'pointer' }}
                    onMouseEnter={() => setActivePath('exploitation')}
                >
                    Exploitation
                    <div style={{ fontSize: '0.7em', color: 'var(--gray-dark)', marginTop: '0.2rem' }}>Max Precision</div>
                </div>

                <div className={styles.node} style={{ top: '300px', left: '25%', transform: 'translateX(-50%)', borderColor: activePath === 'exploitation' ? 'var(--accent)' : 'var(--border-color)' }}>
                    Local Optima
                    <div style={{ fontSize: '0.7em', color: 'var(--gray-dark)' }}>Short-term Efficiency</div>
                </div>

                {/* Right Branch */}
                <div
                    className={`${styles.node} ${activePath === 'exploration' ? styles.nodeHighlight : ''}`}
                    style={{ top: '220px', left: '75%', transform: 'translateX(-50%)', cursor: 'pointer' }}
                    onMouseEnter={() => setActivePath('exploration')}
                >
                    Exploration
                    <div style={{ fontSize: '0.7em', color: 'var(--gray-dark)', marginTop: '0.2rem' }}>Noise Permitted</div>
                </div>

                <div className={styles.node} style={{ top: '300px', left: '75%', transform: 'translateX(-50%)', borderColor: activePath === 'exploration' ? 'var(--accent)' : 'var(--border-color)' }}>
                    Global Optima
                    <div style={{ fontSize: '0.7em', color: 'var(--gray-dark)' }}>Discovery of New Value</div>
                </div>

            </div>

            <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--gray-dark)' }}>
                Hover over the strategy paths to trace the outcome.
            </div>
        </div>
    );
};

export default OptimizationVisual;
