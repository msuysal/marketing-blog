"use client";

import React from 'react';
import Image from 'next/image';

const HeroPlaceholder = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
                src="/hero-human-architecture.png"
                alt="Marketing Systems Architecture with human touch"
                width={800}
                height={600}
                priority
            />
        </div>
    );
};


export default HeroPlaceholder;
