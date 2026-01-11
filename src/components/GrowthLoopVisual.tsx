"use client";

import React, { useState } from 'react';
import styles from './GrowthLoopVisual.module.css';

const GrowthLoopVisual = () => {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    const nodes = [
        {
            id: 'acquisition',
            label: 'Acquisition',
            x: 50,
            y: 10,
            title: "Input: Acquisition",
            desc: "New nodes enter the system. In a cluster model, they arrive via specific, high-trust bridges (referrals) rather than broad broadcast."
        },
        {
            id: 'validation',
            label: 'Validation',
            x: 85,
            y: 35,
            title: "Filter: Peer Validation",
            desc: "The critical Trust Catalyst. The user checks: 'Do people like me use this?' High cluster density reduces the friction of this step to near zero."
        },
        {
            id: 'activation',
            label: 'Activation',
            x: 70,
            y: 80,
            title: "Action: Activation",
            desc: "The first moment of value. Deeply integrated users activate faster because the 'Pathway of Trust' has already been cleared by peers."
        },
        {
            id: 'retention',
            label: 'Retention',
            x: 30,
            y: 80,
            title: "Habit: Retention",
            desc: "System becomes 'Sticky'. Leaving the system now imposes a Social Capital cost, creating a defensive moat against churn."
        },
        {
            id: 'referral',
            label: 'Referral',
            x: 15,
            y: 35,
            title: "Output: Referral",
            desc: "The engine. High-NPS users signal back to the cluster (reinforcing Validation) and out to the world (driving Acquisition)."
        }
    ];

    /* 
      Coordinates for SVG paths (based on 500x500 box):
      Acquisition (Top): 250, 50
      Validation (Right Top): 425, 175
      Activation (Right Bottom): 350, 400
      Retention (Left Bottom): 150, 400
      Referral (Left Top): 75, 175
    */

    return (
        <div className={styles.container}>
            <div className={styles.title}>The High-Density Growth Loop</div>

            <div className={styles.diagram}>
                <svg viewBox="0 0 500 500" className={styles.svgLayer}>
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="var(--gray-medium)" />
                        </marker>
                        <marker id="arrowhead-active" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent)" />
                        </marker>
                        <linearGradient id="gradientFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="var(--accent)" stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    {/* Main Loop Path: Validation -> Activation -> Retention -> Referral -> Validation */}
                    {/* M425,175 Q450,300 350,400 Q250,450 150,400 Q50,300 75,175 Q100,50 425,175 */}
                    {/* Adjusted for smoother circle-ish shape */}
                    <path
                        className={styles.track}
                        d="M425,175 C450,250 420,350 350,400 C280,450 220,450 150,400 C80,350 50,250 75,175 C100,100 350,100 425,175"
                        markerEnd="url(#arrowhead)"
                    />

                    {/* Acquisition Injection Path */}
                    <path
                        className={styles.track}
                        d="M250,50 L360,120"
                        style={{ opacity: 0.5 }}
                        markerEnd="url(#arrowhead)"
                    />

                    {/* Referral Output Path */}
                    <path
                        className={styles.track}
                        d="M75,175 L250,50"
                        style={{ opacity: 0.5, strokeDasharray: '5,5' }}
                    />

                    {/* Animated Flow on the Main Loop */}
                    <path
                        className={styles.activeTrack}
                        d="M425,175 C450,250 420,350 350,400 C280,450 220,450 150,400 C80,350 50,250 75,175 C100,100 350,100 425,175"
                        style={{ stroke: 'url(#gradientFlow)' }}
                    />

                </svg>

                <div className={styles.centerLabel}>
                    <div className={styles.centerTitle}>System Density</div>
                    <div className={styles.centerValue}>High</div>
                </div>

                {nodes.map((node) => (
                    <div
                        key={node.id}
                        className={styles.node}
                        style={{
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                            transform: activeNode === node.id
                                ? 'translate(-50%, -50%) scale(1.15) translateY(-5px)'
                                : 'translate(-50%, -50%)',
                            borderColor: activeNode === node.id ? 'var(--accent)' : 'var(--foreground)'
                        }}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                    >
                        {node.label}
                    </div>
                ))}
            </div>

            <div className={styles.description} style={{ opacity: activeNode ? 1 : 0.6 }}>
                {activeNode ? (
                    <>
                        <h4>{nodes.find(n => n.id === activeNode)?.title}</h4>
                        <p>{nodes.find(n => n.id === activeNode)?.desc}</p>
                    </>
                ) : (
                    <>
                        <h4>Interact with the System</h4>
                        <p>Hover over the nodes to analyze the mechanics of the Growth Loop. Observe how Peer Validation acts as the central catalyst for velocity.</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default GrowthLoopVisual;
