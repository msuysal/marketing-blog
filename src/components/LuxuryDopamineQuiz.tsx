"use client";

import React, { useState } from 'react';
import styles from './LuxuryDopamineQuiz.module.css';
import { useLanguage } from '@/context/LanguageContext';

const QUESTIONS_EN = [
    {
        question: "Is your strategy document built for Monday morning execution or client admiration?",
        options: [
            { text: "Built for a clear, practical operational checklist", score: { execution: 25, aesthetics: 0 } },
            { text: "Built for polished presentation and 'wow' factor", score: { execution: 0, aesthetics: 25 } }
        ]
    },
    {
        question: "When a project hits a roadblock, what is the immediate reflex?",
        options: [
            { text: "Fix the broken step in the funnel or data pipeline", score: { execution: 25, aesthetics: 0 } },
            { text: "Draw a new diagram to explain the delay", score: { execution: 0, aesthetics: 25 } }
        ]
    },
    {
        question: "How is success measured in your typical workflow?",
        options: [
            { text: "Shipped changes and commercial results", score: { execution: 25, aesthetics: 0 } },
            { text: "Slide deck approval in the meeting room", score: { execution: 0, aesthetics: 25 } }
        ]
    },
    {
        question: "What is the main goal of the reports and plans you build?",
        options: [
            { text: "To force a clear decision on what to stop or start", score: { execution: 25, aesthetics: 0 } },
            { text: "To make the room feel informed and smart", score: { execution: 0, aesthetics: 25 } }
        ]
    }
];

const QUESTIONS_TR = [
    {
        question: "Strateji dokümanınız Pazartesi sabahı uygulanmak için mi, yoksa toplantıda beğenilmek için mi hazırlandı?",
        options: [
            { text: "Net ve sıkıcı bir operasyonel aksiyon listesi için", score: { execution: 25, aesthetics: 0 } },
            { text: "Şık bir sunum ve toplantıda hayranlık uyandırmak için", score: { execution: 0, aesthetics: 25 } }
        ]
    },
    {
        question: "Bir proje tıkandığında ekibin ilk refleksi ne oluyor?",
        options: [
            { text: "Hunideki veya veri akışındaki bozuk adımı onarmak", score: { execution: 25, aesthetics: 0 } },
            { text: "Karmaşıklığı açıklamak için yeni bir şema çizmek", score: { execution: 0, aesthetics: 25 } }
        ]
    },
    {
        question: "İş akışınızda başarı öncelikli olarak nasıl doğrulanıyor?",
        options: [
            { text: "Canlıya alınan değişiklikler ve ticari sonuçlarla", score: { execution: 25, aesthetics: 0 } },
            { text: "İçgörü raporları ve yöneticilerin memnuniyetiyle", score: { execution: 0, aesthetics: 25 } }
        ]
    },
    {
        question: "Hazırladığınız raporların ve araçların asıl amacı ne?",
        options: [
            { text: "Neyi durdurup neye başlayacağımız konusunda net bir karar zorlamak", score: { execution: 25, aesthetics: 0 } },
            { text: "Toplantıdaki herkesin bilgili ve zeki hissetmesini sağlamak", score: { execution: 0, aesthetics: 25 } }
        ]
    }
];

const LuxuryDopamineQuiz = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [scores, setScores] = useState({ execution: 50, aesthetics: 50 });
    const [isFinished, setIsFinished] = useState(false);
    const { lang } = useLanguage();

    const questions = lang === "tr" ? QUESTIONS_TR : QUESTIONS_EN;

    const handleAnswer = (score: { execution: number, aesthetics: number }) => {
        setScores(prev => ({
            execution: prev.execution + (score.execution === 0 ? -12.5 : score.execution / 2),
            aesthetics: prev.aesthetics + (score.aesthetics === 0 ? -12.5 : score.aesthetics / 2)
        }));

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsFinished(true);
        }
    };

    const getResultGroup = () => {
        const { execution, aesthetics } = scores;
        if (lang === "tr") {
            if (aesthetics >= 50 && execution < 50) return {
                title: "Estetik Tuzağı",
                description: "Yüksek Gösteriş, Düşük Uygulama. Sonuç üretmekten çok 'içgörü hissi' için ödüllendiriliyorsunuz. Sunumunuz bir araç değil, statü sembolü."
            };
            if (aesthetics < 50 && execution >= 50) return {
                title: "Saf Operasyon",
                description: "Düşük Gösteriş, Yüksek Uygulama. İş yürüyor ama yönü belirsiz. Çalışan bir motorunuz var ama etkiyi büyütecek netlik eksik."
            };
            if (aesthetics >= 50 && execution >= 50) return {
                title: "Doğru Denge",
                description: "Analiz ve uygulama dengede. Planlarınız hem karar vericileri ikna edecek kadar net hem de Pazartesi sabahı çalışacak kadar somut."
            };
            return {
                title: "Durgunluk Bölgesi",
                description: "Düşük Gösteriş, Düşük Uygulama. Projede hem net bir yön hem de çalışan bir çözüm eksik. Kurguyu baştan yapmak gerekiyor."
            };
        }

        if (aesthetics >= 50 && execution < 50) return {
            title: "The Aesthetic Trap",
            description: "High Polish, Low Execution. You are being rewarded for the feeling of insight rather than actual output. Your deck is a status symbol, not a tool."
        };
        if (aesthetics < 50 && execution >= 50) return {
            title: "The Grunt Work",
            description: "Low Polish, High Execution. Functional and shipping, though harder to get buy-in across teams."
        };
        if (aesthetics >= 50 && execution >= 50) return {
            title: "The Sweet Spot",
            description: "Clear thinking paired with real delivery. Your plans are sharp enough to win budget and concrete enough to ship on Monday."
        };
        return {
            title: "The Stagnation Zone",
            description: "Low Polish, Low Execution. The project lacks both a clear direction and a working solution."
        };
    };

    const reset = () => {
        setCurrentStep(0);
        setScores({ execution: 50, aesthetics: 50 });
        setIsFinished(false);
    };

    const result = getResultGroup();

    return (
        <div className={styles.quizContainer}>
            {!isFinished ? (
                <div className={styles.questionBox}>
                    <span className={styles.subtitle}>{lang === "tr" ? "Hızlı Teşhis" : "The Diagnostic"}</span>
                    <h3 className={styles.title}>{lang === "tr" ? "Lüks Dopamin Testi" : "Luxury Dopamine Audit"}</h3>
                    <p className={styles.questionText}>{questions[currentStep].question}</p>
                    <div className={styles.options}>
                        {questions[currentStep].options.map((opt, i) => (
                            <button key={i} className={styles.optionBtn} onClick={() => handleAnswer(opt.score)}>
                                {opt.text}
                            </button>
                        ))}
                    </div>
                    <div className={styles.progress}>
                        <span>
                            {lang === "tr"
                                ? `Soru ${currentStep + 1} / ${questions.length}`
                                : `Question ${currentStep + 1} of ${questions.length}`}
                        </span>
                        <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.results}>
                    <span className={styles.subtitle}>{lang === "tr" ? "Teşhis Sonucu" : "Diagnostic Result"}</span>
                    <h3 className={styles.resultTitle}>{result.title}</h3>

                    <div className={styles.matrixContainer}>
                        <div className={styles.matrixLines}>
                            <div className={styles.matrixLineH}></div>
                            <div className={styles.matrixLineV}></div>
                        </div>
                        <div className={styles.axisLabels}>
                            <span className={styles.labelTop}>{lang === "tr" ? "Uygulama" : "Execution"}</span>
                            <span className={styles.labelBottom}>{lang === "tr" ? "Durgunluk" : "Stagnation"}</span>
                            <span className={styles.labelLeft}>{lang === "tr" ? "İşlevsel" : "Functional"}</span>
                            <span className={styles.labelRight}>{lang === "tr" ? "Gösterişli" : "Polished"}</span>
                        </div>
                        <div className={styles.quadrantLabel + " " + styles.qTL}>{lang === "tr" ? "Tuzak" : "Trap"}</div>
                        <div className={styles.quadrantLabel + " " + styles.qTR}>{lang === "tr" ? "Denge" : "Sweet Spot"}</div>
                        <div className={styles.quadrantLabel + " " + styles.qBL}>{lang === "tr" ? "Durağan" : "Static"}</div>
                        <div className={styles.quadrantLabel + " " + styles.qBR}>{lang === "tr" ? "Operasyon" : "Grunt"}</div>

                        <div
                            className={styles.plot}
                            style={{
                                left: `${scores.aesthetics}%`,
                                top: `${100 - scores.execution}%`
                            }}
                        ></div>
                    </div>

                    <p className={styles.resultDesc}>{result.description}</p>
                    <button className={styles.resetBtn} onClick={reset}>
                        {lang === "tr" ? "Tekrar Test Et" : "Re-Audit Project"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default LuxuryDopamineQuiz;
