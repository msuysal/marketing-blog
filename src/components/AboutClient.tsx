"use client";

import styles from "../app/about/page.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutClient() {
    const { lang } = useLanguage();

    if (lang === "tr") {
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.meta}>Hakkımda</div>
                    <h1 className={styles.title}>Olgu Uysal</h1>
                    <p className={styles.lead}>
                        15 yılı aşkın süredir Avrupa, ABD ve Orta Doğu pazarlarında marka stratejisi, büyüme ve influencer programları yönetiyorum. Ekonomi eğitiminin ardından pazarlama veri bilimi üzerine yüksek lisans yaptım; fikirlerin nasıl kalıcı işe dönüştüğüyle ilgileniyorum.
                    </p>
                </header>

                <div className={styles.grid}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.sectionTitle}>Arka Plan</h2>
                        <ul className={styles.list}>
                            <li>
                                <span className={styles.label}>Ekonomi</span>
                                <p>Ekonomi bana insanların ne dediğine değil, neye tepki verdiğine bakmayı öğretti. Bir kampanya ya da satış akışı çalışmadığında önce ortadaki kazanç-maliyet dengesine bakarım.</p>
                            </li>
                            <li>
                                <span className={styles.label}>Veri Bilimi</span>
                                <p>Yüksek lisansımı pazarlama verisi ve ölçümleme üzerine yaptım. Markaların şişirilmiş ajans raporlarıyla gerçek satış etkisi arasındaki farkı görmesini sağlıyorum.</p>
                            </li>
                            <li>
                                <span className={styles.label}>Uluslararası Deneyim</span>
                                <p>ABD, Avrupa ve Orta Doğu'da teknoloji, perakende ve tüketici markalarıyla çalıştım. Şu sıralar İstanbul ile Lizbon arasında yaşıyorum.</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.rightColumn}>
                        <h2 className={styles.sectionTitle}>Nasıl Çalışıyorum?</h2>
                        <div className={styles.principles}>
                            <div className={styles.principle}>
                                <h3>15+ Yıl Deneyim</h3>
                                <p>İşe klasik marka stratejisiyle başladım; çoğu ekibin A/B testini yeni duyduğu yıllarda veri odaklı büyümeye geçtim. Bugün bile markaların çoğu yanlış rakamları takip ediyor. Benim işim, tabloda güzel görünen rakamlarla kasaya giren para arasındaki kopukluğu gidermek.</p>
                            </div>
                            <div className={styles.principle}>
                                <h3>Kampanya değil, kalıcı yapı</h3>
                                <p>Kampanyalar bir haftalık ses getirir. Müşteriyi içeride tutan şey ise doğru fiyatlama, tekrar satın alma alışkanlığı ve uzun soluklu iş birlikleridir.</p>
                            </div>
                            <div className={styles.principle}>
                                <h3>Yöntem</h3>
                                <p>Önce birim ekonomisine ve müşterinin neden satın aldığına bakarım, ölçümlemeyi düzeltirim; reklam bütçesini ancak hunideki kaçakları kapattıktan sonra büyütürüm.</p>
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
