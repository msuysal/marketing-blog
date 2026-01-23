"use client";

import { useState, useEffect } from "react";
import styles from "./TableOfContents.module.css";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents() {
    const [headings, setHeadings] = useState<TocItem[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const timer = setTimeout(() => {
            const contentElement = document.querySelector('[data-content="true"]');
            if (!contentElement) return;

            const elements = contentElement.querySelectorAll("h2, h3");
            const items: TocItem[] = [];

            elements.forEach((element, index) => {
                const text = element.textContent || "";
                let id = element.id;

                if (!id) {
                    id = `heading-${index}`;
                    element.id = id;
                }

                items.push({
                    id,
                    text,
                    level: element.tagName === "H2" ? 2 : 3,
                });
            });

            setHeadings(items);

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveId(entry.target.id);
                        }
                    });
                },
                { rootMargin: "-10% 0px -70% 0px" }
            );

            elements.forEach((element) => {
                observer.observe(element);
            });

            return () => {
                elements.forEach((element) => {
                    observer.unobserve(element);
                });
            };
        }, 500); // 500ms delay to ensure content is rendered

        return () => clearTimeout(timer);
    }, []);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -20; // Small padding for top of screen
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    if (headings.length === 0) return null;

    return (
        <nav className={styles.toc}>
            <div className={styles.tocHeader}>
                <h4>Content</h4>
            </div>
            <ul className={styles.tocList}>
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        className={`${styles.tocItem} ${heading.level === 3 ? styles.tocItemNested : ""
                            } ${activeId === heading.id ? styles.active : ""}`}
                    >
                        <button
                            onClick={() => handleClick(heading.id)}
                            className={styles.tocLink}
                        >
                            {heading.text}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
