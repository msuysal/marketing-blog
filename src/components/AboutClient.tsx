"use client";

import styles from "../app/about/page.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutClient() {
    const { lang } = useLanguage();

    if (lang === "tr") {
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.meta}>Profil</div>
                    <h1 className={styles.title}>Olgu Uysal</h1>
                    <p className={styles.lead}>
                        Avrupa, ABD ve Orta Doğu pazarlarında büyüme, ölçümleme (atribüsyon) ve içerik üreticisi programları yönetmiş, 15+ yıl deneyimli bir marka ve pazarlama stratejistiyim. Önce ekonomi eğitimi aldım, ardından pazarlama için veri bilimi üzerine lisansüstü çalışmamı tamamladım.
                    </p>
                </header>

                <div className={styles.grid}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.sectionTitle}>Arka Plan</h2>
                        <ul className={styles.list}>
                            <li>
                                <span className={styles.label}>Ekonomi</span>
                                <p>Ekonomi eğitimi bana her şeyden önce teşviklere (incentives) bakmayı öğretti. Bir kampanya veya satış hunisi beklenen sonucu vermediğinde, önce sistemin müşteriyi ve ekibi gerçekte ne için ödüllendirdiğini kontrol ederim.</p>
                            </li>
                            <li>
                                <span className={styles.label}>Veri Bilimi</span>
                                <p>Lisansüstü çalışmam pazarlama ölçümlemesi ve atribüsyon modelleri üzerineydi. Ekiplerin gerçek ciro artışını şişirilmiş platform panellerinden ayırmasına yardımcı oluyorum.</p>
                            </li>
                            <li>
                                <span className={styles.label}>Uluslararası Deneyim</span>
                                <p>ABD, Avrupa ve Orta Doğu'da tüketici, perakende ve teknoloji markalarıyla çalıştım. Şu anda zamanımı İstanbul ve Lizbon arasında bölüyorum.</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.rightColumn}>
                        <h2 className={styles.sectionTitle}>Nasıl Çalışıyorum?</h2>
                        <div className={styles.principles}>
                            <div className={styles.principle}>
                                <h3>Marka ve Büyümede 15+ Yıl</h3>
                                <p>Geleneksel marka stratejisinden gelip, çoğu ekibin A/B testlerini hala deneysel gördüğü dönemde veri odaklı büyümeye geçtim. Şirketlerin çoğu hala yanlış rakamları ölçüyor. Panellerin raporladığı rakamlar ile gerçek kar marjını getiren unsurlar arasındaki boşluğu kapatmak, zamanımın çoğunu harcadığım yer.</p>
                            </div>
                            <div className={styles.principle}>
                                <h3>Tek seferlik kampanyalar yerine sistemler</h3>
                                <p>Tek bir kampanya bir haftalık dikkat satın alır. Tekrar satın alma döngüleri, doğru fiyat katmanları ve uzun vadeli marka elçilikleri ise müşteriyi içeride tutar.</p>
                            </div>
                            <div className={styles.principle}>
                                <h3>Yöntem</h3>
                                <p>Birim ekonomisi ve müşteri teşvikleriyle başlarım, ölçümleme kurgusunu denetlerim ve medya bütçesini büyütmeden önce hunideki sızıntıları kapatırım.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.meta}>The Profile</div>
                <h1 className={styles.title}>Olgu Uysal</h1>
                <p className={styles.lead}>
                    I am a brand and marketing strategist with 15+ years of experience leading growth, attribution, and creator programs across Europe, the US, and the Middle East. I trained as an economist first, then completed postgraduate work in data science for marketing.
                </p>
            </header>

            <div className={styles.grid}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.sectionTitle}>Background</h2>
                    <ul className={styles.list}>
                        <li>
                            <span className={styles.label}>Economics</span>
                            <p>Economics trained me to look at incentives first. When a campaign or sales funnel underperforms, I check what the setup actually rewards customers and teams for doing.</p>
                        </li>
                        <li>
                            <span className={styles.label}>Data Science</span>
                            <p>My postgraduate work focused on marketing measurement and attribution. I help teams separate real revenue lift from inflated platform dashboards.</p>
                        </li>
                        <li>
                            <span className={styles.label}>International</span>
                            <p>I have worked with consumer, retail, and technology brands across the US, Europe, and the Middle East, currently splitting my time between Istanbul and Lisbon.</p>
                        </li>
                    </ul>
                </div>

                <div className={styles.rightColumn}>
                    <h2 className={styles.sectionTitle}>How I Work</h2>
                    <div className={styles.principles}>
                        <div className={styles.principle}>
                            <h3>15+ Years in Brand & Growth</h3>
                            <p>I started in brand strategy and moved into data-driven growth when most teams still treated A/B testing as an experiment. Most companies still measure the wrong numbers. Closing the gap between what dashboards report and what drives margin is where I spend my time.</p>
                        </div>
                        <div className={styles.principle}>
                            <h3>Systems over one-off campaigns</h3>
                            <p>A single campaign buys a week of attention. Repeat purchase loops, pricing tiers, and long-term creator partnerships keep customers coming back.</p>
                        </div>
                        <div className={styles.principle}>
                            <h3>The method</h3>
                            <p>I start with unit economics and customer incentives, audit the measurement setup, and fix the leaks before scaling media spend.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
