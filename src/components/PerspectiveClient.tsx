"use client";

import styles from "../app/the-perspective/page.module.css";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";
import { useLanguage } from "@/context/LanguageContext";

export default function PerspectiveClient() {
    const { lang } = useLanguage();

    if (lang === "tr") {
        return (
            <main className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.label}>Amaç ve Yöntem</span>
                    <h1 className={styles.title}>Perspektif</h1>

                    <div className={styles.lead}>
                        <p>
                            Başarısız kampanya değerlendirmelerinin çoğu reklam metnini veya kanalı suçlar. Oysa sonucu genellikle daha ilk reklam yayına girmeden önce kampanyanın arkasındaki kurgu belirlemiştir.
                        </p>
                    </div>

                    <section className={styles.section}>
                        <p>
                            Ben pazarlamaya bir teşvik ve kısıtlar sistemi olarak bakıyorum.
                        </p>
                        <p>
                            Dikkat dağıtılır, seçenekler çerçevelenir ve insanların gerçekte ne yapacağını ortadaki ödül yapısı belirler. Veri yalnızca geçmişi raporlamaz. Ekiplerin gelecek çeyrekte nasıl davranacağını değiştirir. Otomasyon bu geri bildirim döngülerini hızlandırır ve küçük ürün varsayılanları hangi davranışların yaşayacağına, hangilerinin ise sönüp gideceğine sessizce karar verir.
                        </p>
                        <p>
                            Bozuk bir kurguyu reklam metnini değiştirerek düzeltemezsiniz.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>01. Dikkat Tuzağı</h2>
                        <p>
                            On yıl boyunca dijital pazarlamanın ana sorusu dikkati nasıl satın alırız veya kazanırız oldu. Platformlar erişimi ve sıklığı ödüllendirdi. Haftalık raporda daha fazla gösterim ve daha fazla tıklama ilerleme gibi göründü.
                        </p>
                        <p>
                            Yalnızca dikkat çekmek için kurulan sistemler, bitiş çizgisi olmayan kesintisiz bir uyarılma üretir. Algoritmalar hedefleme kararlarını devraldıkça bu durum daha da ağırlaşıyor. İnsanlar daha fazla kaydırıyor ve daha az hatırlıyor. Tamamlanmış hissettiren ve geri dönmeye değer bir ürün ya da marka giderek nadirleşiyor.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>02. Birbirine Bağlı Katmanlar</h2>
                        <p>
                            Modern pazarlama birbirine bağlı katmanlar üzerinden çalışır: ürün varsayılanları, öneri kuralları, veri akışları ve geri bildirim döngüleri. Her katman bir sonrakini besler.
                        </p>
                        <p>
                            Raporlama katmanında seçilen yanlış bir metrik, kreatif ekibin altı ay sonra ne üreteceğini değiştirir. Müşteri tutundurma (retention) düştüğünde, asıl sebep üç katman derine gömülmüş olur.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>03. Davranış ve Ölçümleme</h2>
                        <p>
                            Bu sitedeki yazıları o katmanları tek tek incelemek için yazdım.
                        </p>
                        <p>
                            Davranış önemlidir çünkü insanlar sloganlara değil, bağlama ve maliyete tepki verir. Veri önemlidir çünkü bir şirket neyi saymayı seçerse, ekipleri yalnızca onu inşa eder.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>04. Kurguyu Tasarlamak</h2>
                        <p>
                            İyi pazarlama kurguları sınırları, yanlış teşvikleri ve kitle yorgunluğunu daha lansmandan önce hesaba katar.
                        </p>
                        <p>
                            Kullanıcıyı yormadan doğru aksiyonu kolaylaştırırlar. Hızın güveni zedelediği yerde süreci yavaşlatır, iş bittiğinde ise etkileşimin temizce kapanmasına izin verirler.
                        </p>
                    </section>

                    <div className={styles.footer}>
                        <p>
                            "Kampanyalar dikkat çeker. Arkalarındaki sistem ise içeride kimsenin kalıp kalmayacağına karar verir."
                        </p>
                        <p className={styles.signature}>Olgu Uysal</p>
                    </div>

                    <div className={styles.postFlow}>
                        <div className={styles.flowLabel}>Sonraki Adım</div>
                        <Link href="/articles" className={styles.flowLink}>
                            Makaleleri Oku &rarr;
                        </Link>
                    </div>
                </div>
                <ScrollToTop />
            </main>
        );
    }

    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <span className={styles.label}>Purpose & Method</span>
                <h1 className={styles.title}>The Perspective</h1>

                <div className={styles.lead}>
                    <p>
                        Most marketing post-mortems blame the creative or the channel. Usually the setup behind the campaign decided the outcome before the first ad ran.
                    </p>
                </div>

                <section className={styles.section}>
                    <p>
                        I look at marketing as a system of incentives and constraints.
                    </p>
                    <p>
                        Attention gets allocated, choices get framed, and payoffs determine what people actually do. Data does not just report the past. It changes how teams behave next quarter. Automation speeds up those feedback loops, and small product defaults quietly decide which actions happen and which ones die out.
                    </p>
                    <p>
                        Changing the copy rarely fixes a broken setup.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>01. The Attention Trap</h2>
                    <p>
                        For a decade, the main question in digital marketing was how to buy or earn attention. Platforms rewarded reach and frequency. More impressions and more clicks looked like progress on a weekly report.
                    </p>
                    <p>
                        Systems built only to capture attention produce continuous stimulation with no finish line. As algorithms take over more targeting decisions, this gets worse. People scroll more and remember less. A product or brand that feels complete and worth returning to becomes rare.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>02. Connected Layers</h2>
                    <p>
                        Modern marketing runs through connected layers: product defaults, recommendation rules, data pipelines, and feedback loops. Each layer feeds the next.
                    </p>
                    <p>
                        A bad metric chosen at the reporting layer changes what the creative team makes six months later. By the time retention drops, the cause is buried three layers deep.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>03. Behavior and Measurement</h2>
                    <p>
                        I wrote the essays on this site to look at those layers one by one.
                    </p>
                    <p>
                        Behavior matters because people respond to context and cost, not slogans. Data matters because whatever a company chooses to count becomes the only thing its teams will build.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>04. Designing the Setup</h2>
                    <p>
                        Good marketing setups account for limits, bad incentives, and audience fatigue before launch.
                    </p>
                    <p>
                        They make the useful action easy without burning out the user. They slow things down when speed ruins trust, and they let an interaction end cleanly when the job is done.
                    </p>
                </section>

                <div className={styles.footer}>
                    <p>
                        "Campaigns get attention. The system behind them decides whether anyone stays."
                    </p>
                    <p className={styles.signature}>Olgu Uysal</p>
                </div>

                <div className={styles.postFlow}>
                    <div className={styles.flowLabel}>Next Step</div>
                    <Link href="/articles" className={styles.flowLink}>
                        Read the Articles &rarr;
                    </Link>
                </div>
            </div>
            <ScrollToTop />
        </main>
    );
}
