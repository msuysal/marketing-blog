"use client";

import React from "react";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import dynamic from "next/dynamic";

const GameTheoryWidget = dynamic(() => import("./GameTheoryWidget"), { ssr: false, loading: () => <div className="widget-loading">Initializing Strategic Matrix...</div> });
const NudgeSimulator = dynamic(() => import("./NudgeSimulator"), { ssr: false, loading: () => <div className="widget-loading">Calibrating Behavioral Variables...</div> });
const Mermaid = dynamic(() => import("./Mermaid"), { ssr: false, loading: () => <div className="widget-loading">Rendering Systems Geometry...</div> });
const GrowthLoopVisual = dynamic(() => import("./GrowthLoopVisual"), { ssr: false, loading: () => <div className="widget-loading">Mapping Compounding Flywheels...</div> });
const OptimizationVisual = dynamic(() => import("./OptimizationVisual"), { ssr: false, loading: () => <div className="widget-loading">Analyzing Efficiency Curves...</div> });
const CoordinationVisual = dynamic(() => import("./CoordinationVisual"), { ssr: false, loading: () => <div className="widget-loading">Synchronizing System Nodes...</div> });
const LuxuryDopamineQuiz = dynamic(() => import("./LuxuryDopamineQuiz"), { ssr: false, loading: () => <div className="widget-loading">Engaging Psychological Assessment...</div> });

interface PostContentProps {
    content: string;
}

const PostContent: React.FC<PostContentProps> = ({ content }) => {
    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
            if (domNode instanceof Element && domNode.attribs) {
                // Handle Widgets
                if (domNode.name === "div") {
                    if (domNode.attribs["data-widget"] === "gametheory") {
                        return <GameTheoryWidget />;
                    }
                    if (domNode.attribs["data-widget"] === "nudgesimulator") {
                        return <NudgeSimulator />;
                    }
                    if (domNode.attribs["data-widget"] === "growthloop") {
                        return <GrowthLoopVisual />;
                    }
                    if (domNode.attribs["data-widget"] === "optimization") {
                        return <OptimizationVisual />;
                    }
                    if (domNode.attribs["data-widget"] === "coordination") {
                        return <CoordinationVisual />;
                    }
                    if (domNode.attribs["data-widget"] === "luxurydopaminequiz") {
                        return <LuxuryDopamineQuiz />;
                    }
                }

                // Handle Mermaid Diagrams
                if (domNode.name === "pre" && domNode.attribs["class"] === "mermaid") {
                    const chartCode = (domNode.children[0] as any).data;
                    return <Mermaid chart={chartCode} />;
                }

                // Handle Footnotes (Academic style)
                if (domNode.name === "sup" && domNode.attribs["class"] === "footnote-ref") {
                    const id = domNode.attribs["id"];
                    const href = (domNode.children[0] as any).attribs.href;
                    const num = (domNode.children[0] as any).children[0].data;
                    return (
                        <sup id={id} className="academic-footnote-ref">
                            <a href={href} style={{
                                textDecoration: 'none',
                                fontSize: '0.7em',
                                fontWeight: 'bold',
                                color: 'var(--accent-color, #da691a)',
                                marginLeft: '1px'
                            }}>
                                {num}
                            </a>
                        </sup>
                    );
                }
            }
        },
    };

    return <div className="prose-content">{parse(content, options)}</div>;
};

export default PostContent;
