"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from './AudioReader.module.css';

interface AudioReaderProps {
    content: string;
    title: string;
}

const AudioReader: React.FC<AudioReaderProps> = ({ content, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [speed, setSpeed] = useState(1);
    const [supported, setSupported] = useState(false);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
    const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

    const strippedContent = useMemo(() => {
        if (typeof window === 'undefined') return "";

        // Use a more robust stripping method that handles SSR/hydration better
        const div = document.createElement("div");
        div.innerHTML = content;

        // Add full stops after headers and paragraphs to ensure AI voice pauses naturally
        const headers = div.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li');
        headers.forEach(el => {
            if (el.textContent && !el.textContent.trim().endsWith('.') && !el.textContent.trim().endsWith('?') && !el.textContent.trim().endsWith('!')) {
                el.innerHTML += ". ";
            }
        });

        const text = div.textContent || div.innerText || "";
        return text.replace(/\s+/g, ' ').trim();
    }, [content]);

    const fullText = useMemo(() => `${title}. ${strippedContent}`, [title, strippedContent]);
    const readingTime = useMemo(() => Math.ceil(strippedContent.split(/\s+/).length / 150), [strippedContent]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
            setSupported(true);
            const updateVoices = () => {
                voicesRef.current = window.speechSynthesis.getVoices();
            };
            window.speechSynthesis.onvoiceschanged = updateVoices;
            updateVoices();
        }

        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    const handlePlayPause = (startIndex = 0) => {
        if (!supported) return;

        if (isPlaying && startIndex === 0) {
            window.speechSynthesis.pause();
            setIsPlaying(false);
        } else {
            if (window.speechSynthesis.paused && startIndex === 0) {
                window.speechSynthesis.resume();
                setIsPlaying(true);
            } else {
                window.speechSynthesis.cancel();

                const textToSpeak = startIndex > 0
                    ? fullText.slice(startIndex)
                    : fullText;

                const utterance = new SpeechSynthesisUtterance(textToSpeak);

                // High-quality English voice selection
                const voices = voicesRef.current;
                const enVoices = voices.filter(v => v.lang.startsWith('en'));

                // Sort and find best match (Premium/Enhanced voices first)
                const preferredVoice =
                    enVoices.find(v => (v.name.includes('Ava') || v.name.includes('Samantha') || v.name.includes('Allison')) && v.name.includes('Premium')) ||
                    enVoices.find(v => v.name.includes('Google US English')) ||
                    enVoices.find(v => v.name.includes('Samantha')) ||
                    enVoices.find(v => v.name.includes('Daniel')) ||
                    enVoices.find(v => v.name.includes('Enhanced') || v.name.includes('Premium')) ||
                    enVoices.find(v => v.lang === 'en-US') ||
                    enVoices[0] ||
                    voices[0];

                if (preferredVoice) utterance.voice = preferredVoice;
                utterance.lang = 'en-US';

                utterance.rate = speed;
                utterance.pitch = 1;
                utterance.volume = 1;

                utterance.onboundary = (event) => {
                    const totalLength = fullText.length;
                    const currentPos = startIndex + event.charIndex;
                    setProgress((currentPos / totalLength) * 100);
                };

                utterance.onend = () => {
                    setIsPlaying(false);
                    // Only reset progress if we actually finished the whole thing
                    if (startIndex + textToSpeak.length >= fullText.length - 10) {
                        setProgress(0);
                    }
                };

                utteranceRef.current = utterance;
                window.speechSynthesis.speak(utterance);
                setIsPlaying(true);
            }
        }
    };

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!supported) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percentage = Math.max(0, Math.min(1, x / width));
        const targetChar = Math.floor(fullText.length * percentage);

        setProgress(percentage * 100);
        handlePlayPause(targetChar);
    };

    const toggleSpeed = () => {
        const speeds = [1, 1.25, 1.5, 2];
        const nextIndex = (speeds.indexOf(speed) + 1) % speeds.length;
        const newSpeed = speeds[nextIndex];
        setSpeed(newSpeed);

        if (isPlaying) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            // Resume with new speed after a tiny delay
            setTimeout(() => handlePlayPause(), 100);
        }
    };

    if (!supported) return null;

    return (
        <div className={`${styles.player} ${isPlaying ? styles.playerActive : ''}`}>
            <div className={styles.playerHeader}>
                <div className={styles.playerType}>
                    <span className={styles.pulse}></span>
                    AI Audio Edition
                </div>
                <div className={styles.settings}>
                    <button onClick={toggleSpeed} className={styles.speedBtn}>
                        {speed}x speed
                    </button>
                </div>
            </div>

            <div className={styles.controls}>
                <button
                    onClick={() => handlePlayPause()}
                    className={styles.playBtn}
                    aria-label={isPlaying ? "Pause audio" : "Play audio"}
                >
                    {isPlaying ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16"></rect>
                            <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"></path>
                        </svg>
                    )}
                </button>
                <div className={styles.meta}>
                    <span className={styles.label}>{title}</span>
                    <span className={styles.time}>
                        Automated structural reading &bull; ~{readingTime} min
                    </span>
                </div>
            </div>

            <div
                className={styles.progressBar}
                onClick={handleSeek}
                role="slider"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
                aria-label="Seek through audio"
                style={{ cursor: 'pointer' }}
            >
                <div
                    className={styles.progressFill}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default AudioReader;
