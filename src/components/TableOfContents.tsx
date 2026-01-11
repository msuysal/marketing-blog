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
        // Get all h2 and h3 elements from the content
        const contentElement = document.querySelector('[data-content="true"]');
        if (!contentElement) return;

        const elements = contentElement.querySelectorAll("h2, h3");
        const items: TocItem[] = [];

        elements.forEach((element, index) => {
            const text = element.textContent || "";
            let id = element.id;

            // If no id exists, create one
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

        // Intersection Observer to track active section
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -35% 0px" }
        );

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // Offset for fixed header if any
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
