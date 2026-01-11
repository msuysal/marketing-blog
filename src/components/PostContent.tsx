"use client";

import React from "react";
import parse, { domToReact, HTMLReactParserOptions, Element } from "html-react-parser";
import GameTheoryWidget from "./GameTheoryWidget";
import NudgeSimulator from "./NudgeSimulator";
import Mermaid from "./Mermaid";
import GrowthLoopVisual from "./GrowthLoopVisual";

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
