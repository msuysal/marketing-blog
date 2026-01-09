"use client";

import React from 'react';

const HeroPlaceholder = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', height: 'auto' }}>
            <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1" />
                </pattern>
            </defs>

            {/* Background Grid */}
            <rect width="800" height="600" fill="url(#grid)" opacity="0.5" />

            {/* Abstract Architecture Blocks */}
            <rect x="250" y="150" width="100" height="300" fill="none" stroke="#222" strokeWidth="2" />
            <rect x="300" y="200" width="120" height="250" fill="#fff" stroke="#222" strokeWidth="2" />
            <rect x="180" y="300" width="80" height="150" fill="none" stroke="#222" strokeWidth="2" />
            <rect x="400" y="320" width="150" height="130" fill="#fff" stroke="#222" strokeWidth="2" />

            {/* Graph Theory / Connections - "Human Side" */}
            <g stroke="#222" strokeWidth="1.5">
                {/* Central Hub */}
                <line x1="360" y1="280" x2="300" y2="220" />
                <line x1="360" y1="280" x2="420" y2="240" />
                <line x1="360" y1="280" x2="330" y2="350" />
                <line x1="360" y1="280" x2="410" y2="380" />
                <line x1="360" y1="280" x2="220" y2="310" />

                {/* Secondary Connections */}
                <line x1="420" y1="240" x2="480" y2="210" />
                <line x1="420" y1="240" x2="450" y2="300" />
                <line x1="300" y1="220" x2="250" y2="180" />
            </g>

            {/* Nodes (Abstract People) */}
            <circle cx="360" cy="280" r="12" fill="#FFD700" stroke="#222" strokeWidth="2" /> {/* Main Node */}

            <circle cx="300" cy="220" r="6" fill="#fff" stroke="#222" strokeWidth="2" />
            <circle cx="420" cy="240" r="6" fill="#fff" stroke="#222" strokeWidth="2" />
            <circle cx="330" cy="350" r="6" fill="#fff" stroke="#222" strokeWidth="2" />
            <circle cx="410" cy="380" r="6" fill="#fff" stroke="#222" strokeWidth="2" />
            <circle cx="220" cy="310" r="6" fill="#fff" stroke="#222" strokeWidth="2" />

            <circle cx="480" cy="210" r="4" fill="#222" />
            <circle cx="450" cy="300" r="4" fill="#222" />
            <circle cx="250" cy="180" r="4" fill="#222" />

            {/* Stylized Puzzle Elements */}
            <path d="M 520 380 L 540 380 L 540 400 L 520 400 Z" fill="#FFD700" stroke="#222" strokeWidth="2" opacity="0.8" />
            <path d="M 180 380 L 200 380 L 200 400 L 180 400 Z" fill="#222" stroke="#222" strokeWidth="2" opacity="0.1" />

            {/* Floating Elements (Abstracting flow/movement) */}
            <circle cx="500" cy="150" r="2" fill="#222" />
            <circle cx="510" cy="160" r="2" fill="#222" />
            <circle cx="520" cy="150" r="2" fill="#222" />

        </svg>
    );
};

export default HeroPlaceholder;
