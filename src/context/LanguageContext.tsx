"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "tr";

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Language>("en");

    useEffect(() => {
        const saved = sessionStorage.getItem("olgu_lang");
        if (saved === "tr" || saved === "en") {
            setLangState(saved);
        }
    }, []);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        sessionStorage.setItem("olgu_lang", newLang);
        if (typeof document !== "undefined") {
            document.documentElement.lang = newLang;
        }
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

export const TAG_LABELS_TR: Record<string, string> = {
    "Behavioral Logic": "Davranış ve Teşvik",
    "Brand Resonance": "Marka Dünyası",
    "Creator Economy": "İçerik Üretici Ekonomisi",
    "Data Signals": "Veri ve Ölçümleme",
    "Deconstruction": "Vaka Analizi",
    "Growth Loops": "Büyüme Döngüleri",
    "Influence & Authority": "Etki ve Güven",
    "Marketing Game Theory": "Oyun Teorisi",
    "Public Economics": "Kamu Ekonomisi",
    "Systems Design": "Sistem Tasarımı",
    "Systems Infrastructure": "Pazarlama Sistemleri",
};

export const INDUSTRY_LABELS_TR: Record<string, string> = {
    "Retail": "Perakende",
    "Technology": "Teknoloji",
    "Electronics": "Elektronik",
    "F&B": "Yeme & İçme",
};

export function translateTag(tag: string, lang: Language): string {
    if (lang === "en") return tag;
    return TAG_LABELS_TR[tag] || tag;
}

export function translateIndustry(industry: string | undefined, lang: Language): string {
    if (!industry) return lang === "tr" ? "Genel" : "General";
    if (lang === "en") return industry;
    return INDUSTRY_LABELS_TR[industry] || industry;
}
