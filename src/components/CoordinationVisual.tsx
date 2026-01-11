"use client";

import React, { useState } from 'react';
import styles from './StandardDiagram.module.css';

const CoordinationVisual = () => {
    const [coordinated, setCoordinated] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.title}>The Coordination Problem</div>

            <div className={styles.diagramArea} style={{ height: '300px' }}>
                <svg className={styles.connector}>
                    <defs>
                        <marker id="arrowhead-coord" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="var(--gray-medium)" />
                        </marker>
                    </defs>

                    {/* Broadcast Lines */}
                    <line x1="20%" y1="150" x2="70%" y2="80" className={styles.line} markerEnd="url(#arrowhead-coord)" />
                    <line x1="20%" y1="150" x2="70%" y2="150" className={styles.line} markerEnd="url(#arrowhead-coord)" />
                    <line x1="20%" y1="150" x2="70%" y2="220" className={styles.line} markerEnd="url(#arrowhead-coord)" />

                    {/* Coordination Lines (Invisible unless enabled) */}
                    <path
                        d="M75% 80 L75% 150 M75% 150 L75% 220 M75% 80 C85% 150 85% 150 75% 220"
                        className={coordinated ? styles.lineActive : styles.line}
                        style={{ opacity: coordinated ? 1 : 0, stroke: 'var(--accent)', strokeDasharray: coordinated ? '5,5' : '0' }}
                    />
                </svg>

                {/* Broadcast Node */}
                <div className={styles.node} style={{ top: '130px', left: '20%', transform: 'translateX(-50%)', background: '#f5f5f7' }}>
                    Broadcast Signal
                </div>

                {/* Audience Nodes */}
                <div className={styles.node} style={{ top: '60px', left: '75%', transform: 'translateX(-50%)', borderColor: coordinated ? 'var(--accent)' : 'var(--border-color)' }}>
                    Node A
                </div>
                <div className={styles.node} style={{ top: '130px', left: '75%', transform: 'translateX(-50%)', borderColor: coordinated ? 'var(--accent)' : 'var(--border-color)' }}>
                    Node B
                </div>
                <div className={styles.node} style={{ top: '200px', left: '75%', transform: 'translateX(-50%)', borderColor: coordinated ? 'var(--accent)' : 'var(--border-color)' }}>
                    Node C
                </div>

            </div>

            <div className={styles.controls}>
                <button
                    className={`${styles.button} ${!coordinated ? styles.buttonActive : ''}`}
                    onClick={() => setCoordinated(false)}
                >
                    Broadcast Mode
                </button>
                <button
                    className={`${styles.button} ${coordinated ? styles.buttonActive : ''}`}
                    onClick={() => setCoordinated(true)}
                >
                    Coordination Mode
                </button>
            </div>

            <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--gray-dark)', marginTop: '1rem' }}>
                {coordinated ? "Common Knowledge established. Nodes act in unison." : "Atomized reception. No collective action."}
            </div>
        </div>
    );
};

export default CoordinationVisual;
