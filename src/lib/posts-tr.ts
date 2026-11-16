import type { Post } from "./posts";
import type { Language } from "@/context/LanguageContext";

export interface PostTranslation {
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

export const postsTr: Record<string, PostTranslation> = {
  "death-of-classical-advertising-cross-brand": {
    title: "Klasik Reklam Hedeflemesinin Sonu",
    excerpt: "Amazon'un eski 'bunu alan bunu da aldı' kuralı bitti. Kişiselleştirmedeki yeni kırılma, insanların ne aldığıyla nereye gittiğini birleştiriyor.",
    date: "21 Nis 2026",
    content: `
      <p>Bugün internetten bir espresso makinesi satın alın; önümüzdeki üç hafta boyunca gördüğünüz her banner reklam size beş espresso makinesi daha satmaya çalışacak. Makineyi zaten aldınız. Mutfağınızda ikinci bir makineye ihtiyacınız yok.</p>

      <p>Klasik reklamcılık insanları bölmek (interruption) üzerine kuruluydu. Dijital pazarlamanın ilk dalgası bu bölmeyi "X ürününü alanlar Y ürününü de aldı" kuralıyla değiştirdi. İlk devrim buydu.</p>

      <p>Şimdi o ilk dalga duvara tosladı.</p>

      <h2>Kişiselleştirmede ikinci kırılma</h2>

      <p>Bu akşam aynı koltukta yan yana oturan iki kişinin interneti nasıl deneyimlediğine bakın. Farklı video kurguları izliyorlar, farklı akışlar okuyorlar ve yapay zeka araçlarından geçmiş sorularına göre tamamen farklı yanıtlar alıyorlar. Her ekranın gerçek zamanlı olarak tek bir kişiye göre şekillendiği bir ortamda kitlesel reklamcılık ayakta kalamaz.</p>

      <p>Buna rağmen markaların hedefleme kurguları hala tek bir ürün kategorisinin içinde sıkışıp kalıyor. Bir çift koşu ayakkabısı aldığımda, eski tip reklam motorları bana daha fazla koşu ayakkabısı ya da indirimli çorap gösteriyor.</p>

      <p>Artık işe yarayan şey, o müşterinin bir sonraki adımında nereye gittiğini haritalamak. Salı günü arazi koşu ayakkabısı alan kişi, Perşembe günü Lizbon'a uçak bileti aldı, Cuma akşamı doğal şarap barında masa ayırttı ve Cumartesi sabahı butik bir otele giriş yaptı. "Bu ürünü alan buradan çıkıp şuraya gitti" bilgisi, "bu ürünü alan bunu da aldı" bilgisini her seferinde yener.</p>

      <h2>Önümüzdeki on yılı neden markalar arası ortaklıklar kazanacak?</h2>

      <p>Tek bir marka, müşterinin haftasının yalnızca tek bir dilimini görür. Havayolu şirketiniz nereye uçtuğunuzu bilir, kredi kartınız nerede yemek yediğinizi bilir, spor uygulamanız saat kaçta uyandığınızı bilir; bavul markanız ise yalnızca üç yıl önce hangi valizi aldığınızı bilir.</p>

      <p>Dünyanın en keskin markaları şimdiden buna göre hareket ediyor. American Express, restoran rezervasyon platformu Resy'yi satın aldı ve Platinum kartları doğrudan Delta havalimanı lounge'larına bağladı. Çünkü verileri net bir zincir gösteriyordu: Sabah 10'da New York uçak bileti alan üye, akşam 8'de SoHo'da masa arıyor. Jacquemus yaz kampanyalarını stüdyo çekimi olmaktan çıkardı; Monte-Carlo Beach Hotel ve Bahamalar'daki Four Seasons plaj kulüplerini devraldı. Müşteriyi çanta banner'larıyla kovalamak yerine, çizgili şezlonglarını ve pop-up butiklerini o kitlenin Temmuz ayında gerçekten uçtuğu kumsallara kurdu.</p>

      <p>Rapha aynısını bisiklet giyiminde yaptı. Sepette ikinci bir bisiklet taytı önermek yerine Londra, Amsterdam ve Seul'de espresso servis eden ve Cumartesi sabahı grup sürüşleri başlatan fiziksel kulüp evleri (Clubhouse) açtı. Uber ve Marriott Bonvoy hesaplarını birleştirdi; böylece otel odası ayırtan müşteri havalimanından otele geçerken bindiği araçtan otomatik puan kazanmaya başladı.</p>

      <p>Birbiriyle rekabet etmeyen iki marka aynı müşteriyi paylaşıp ortak bir deneyim kurduğunda, tahmin yürütmeyi bırakır ve müşteriyi gerçek rutininin içinde yakalar.</p>

      <blockquote>"Ekmek kızartma makinesi alan birine ikinci makineyi satmaya çalışmayı bırakın. Bir sonraki adımda kahve aldığı kavurmacıyla ve hafta sonu kaldığı otelle ortaklık kurun."</blockquote>

      <h2>Markalar arası ortaklıkları kurarken baktığım dört kural</h2>

      <p>Müşterilerime benzer kitle (lookalike) reklam açık artırmalarına daha fazla bütçe dökmek yerine, ortak müşteri hareketi etrafında iş birlikleri kurmalarını söylüyorum:</p>

      <ul>
        <li><strong>Ürününüzün etrafındaki 48 saati haritalayın:</strong> En sadık on müşterinize ürününüzü kullanmadan iki saat önce ve kullandıktan sonraki iki gün içinde ne yaptıklarını sorun; dokundukları mekanları, uygulamaları ve markaları tek tek yazın.</li>
        <li><strong>Fiziksel ürünü bir mekanla eşleştirin:</strong> Mayo, spor giyim veya cilt bakımı satıyorsanız, müşterilerinizin ürününüzü bavuluna koyup götürdüğü plaj kulüpleri, butik oteller veya stüdyolarla doğrudan ortaklık kurun.</li>
        <li><strong>Logo değil, gerçek erişim takas edin:</strong> Instagram çekilişine iki logo yan yana koymak hiçbir işe yaramaz. En iyi 1.000 müşterinize partnerinizin mekanında öncelikli masa rezervasyonu, lounge girişi veya özel check-in hakkı verin.</li>
        <li><strong>Bağlam sinyallerini izinli paylaşın:</strong> Seyahat, yeme-içme ve perakende arasında ortak sadakat ayrıcalıkları kurun; böylece müşteri on ayrı promosyon e-postası yerine kendi hafta sonu planına uyan tek bir teklif alsın.</li>
      </ul>
    `
  },
  "lifelog-facebook-and-voluntary-tracking": {
    title: "Gözetim Nasıl Tüketici Ürününe Dönüştü?",
    excerpt: "DARPA, LifeLog projesini 4 Şubat 2004'te, Facebook'un açıldığı gün kapattı. Reality TV ve akıllı telefonlar davranış takibini nasıl gönüllü hale getirdi?",
    date: "20 Nis 2026",
    content: `
      <p>4 Şubat 2004 günü Pentagon, LifeLog adlı araştırma projesini resmen kapattı. Aynı gün öğleden sonra Mark Zuckerberg, Harvard'daki yurt odasından TheFacebook'u yayına aldı.</p>

      <p>Komplo teorileriyle ilgilenmiyorum. İki olay arasında doğrudan bir devir teslim olduğunu gösteren hiçbir resmi belge yok. Bir pazarlamacı olarak beni ilgilendiren kısım şu: Devletin kurmaya çalıştığı versiyon altı ayda tepkilerden çökerken, ticari versiyona neden üç milyar insan kendi isteğiyle kayıt oldu?</p>

      <h2>DARPA ne kurmaya çalışıyordu?</h2>

      <p>2003 ortasında program yöneticisi Douglas Gage, DARPA bünyesinde LifeLog projesini başlattı. Amaç, bir insanın tüm günlük hayatını tek bir dijital veri tabanında toplamaktı. Her telefon görüşmesi, her e-posta, her GPS koordinatı, her kredi kartı harcaması ve dinlenen her şarkı.</p>

      <p>Askeri araştırmacılar bu veri setini, yazılımların insan karar mekanizmasını taklit edebilmesi için istiyordu. Gazeteciler ve mahremiyet savunucuları 2003 sonunda projeyi öğrendi ve sert bir kampanya başlattı. Kimse devletin kendisi hakkında her şeyi hatırlayan bir günlük tutmasını istemiyordu. DARPA, 4 Şubat'ta projeyi iptal etti.</p>

      <h2>İnsanlar ticari versiyona neden gönüllü oldu?</h2>

      <p>İnsanlar devlet veri tabanına karşı dişe diş mücadele etti. Ardından birebir aynı kişisel geçmişi ticari bir web sitesine bedavaya, kendi elleriyle yazdılar; savunma veri şirketi Palantir'in de kurucu ortağı olan Peter Thiel gibi erken yatırımcılar bu büyümeyi finanse etti.</p>

      <p>Çünkü ortadaki teşvik (incentive) değişmişti.</p>

      <p>Big Brother ve Biri Bizi Gözetliyor gibi yarışmalar, beş yıl boyunca izleyiciyi özel hayatı kamusal bir sahneye çevirmeye hazırlamıştı. İzlenmek bir ceza olmaktan çıkıp statüye dönüştü. Facebook 2006'da Haber Kaynağı'nı (News Feed) ve 2009'da Beğen (Like) butonunu eklediğinde, yüklenen her fotoğraf ve yazılan her durum güncellemesi çevrenizden anında görünür bir puan getirmeye başladı.</p>

      <blockquote>"İnsanlar adını 'veri tabanı' koyduğunuz takip sistemini reddeder; adını 'profil' koyduğunuzda ise içine girmek için sıraya girer."</blockquote>

      <h2>Telefon masadan cebimize indiğinde</h2>

      <p>2004 yılında hayatınızı internete kaydetmek hala zahmetliydi. Masaya oturmanız, dijital fotoğraf makinesini kabloyla bilgisayara bağlamanız ve klavyeden yazmanız gerekiyordu.</p>

      <p>2007 ile 2010 arasında iPhone ve Android bu zahmeti ortadan kaldırdı. Takip cihazı cebimize girdi. Uygulamalar sizin bir şey yazmanızı beklemek yerine nereye yürüdüğünüzü, başparmağınızın bir videoda kaç milisaniye duraksadığını ve sabah kaçta uyandığınızı kendiliğinden kaydetmeye başladı.</p>

      <h2>Bugünün pazarlamacıları bundan ne çıkarmalı?</h2>

      <p>Bugünkü tüm reklam platformları ve üretken yapay zeka modelleri, DARPA'nın 2003'te toplamak istediği o davranışsal izlerin üzerinde çalışıyor. Markaların birinci taraf veri (first-party data) toplama kurgularını denetlerken bu tarihten dört ders çıkarıyorum:</p>

      <ul>
        <li><strong>Anında sosyal veya pratik bir karşılık verin:</strong> Müşteriler sizin CRM tablonuzu zenginleştirmek için form doldurmaz. Veriyi, akışlarını anında kişiselleştirdiğinde, beden ölçüsünü kaydettiğinde veya onlara somut bir kolaylık sağladığında paylaşırlar.</li>
        <li><strong>Anket cevaplarına değil, pasif davranışa bakın:</strong> Bir kullanıcının sayfada dört saniye nerede duraksadığı, müşteri anketinde işaretlediği şıktan çok daha doğru bilgi verir.</li>
        <li><strong>Teşhir sınırını aşmayın:</strong> Davranış sinyallerini önerileri iyileştirmek için kullanmak işe yarar. Ama birinin özel gezinme geçmişini reklam metninde yüzüne vurmak hesabını kapatmasına neden olur.</li>
        <li><strong>Modeli kimin için eğittiğinizi unutmayın:</strong> Meta veya Google'a geri gönderdiğiniz her tıklama ve satış sinyali, onların teklif verme (bidding) motorunu rakipleriniz için de eğitir; bu yüzden en değerli müşteri kayıtlarınızı kendi sunucularınızda tutun.</li>
      </ul>

      <h3>Referanslar ve Ek Okumalar</h3>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=EzplUAbgFbU" target="_blank" rel="noopener noreferrer">Video: How the Military Studied Social Media (2004 Zaman Çizelgesi)</a></li>
        <li><a href="https://www.wired.com/2004/02/pentagon-kills-lifelog-project/" target="_blank" rel="noopener noreferrer">Wired (4 Şubat 2004): Pentagon Kills LifeLog Project</a></li>
      </ul>
    `
  },
  "why-orkut-died-and-facebook-won": {
    title: "Orkut Neden Battı, Facebook Nasıl Kazandı?",
    excerpt: "2000 yılında Orkut Büyükkökten Stanford'da inCircle'ı kurdu. Statik rehberler canlı aktivite akışlarına neden yenildi ve bu bugün retention için ne anlatıyor?",
    date: "18 Nis 2026",
    content: `
      <p>2000 yılında, daha Friendster açılmadan iki yıl önce, Stanford Üniversitesi'nde Türk bilgisayar bilimi araştırmacısı Orkut Büyükkökten kampüs içi ilişkileri haritalamak için inCircle adında bir ağ geliştirdi. Dört yıl sonra Google bünyesinde Orkut'u kurdu. Birkaç ay içinde Orkut, Brezilya ve Türkiye'de sosyal medyayı tek başına domine etmeye başladı.</p>

      <p>Ardından Facebook beş yıldan kısa sürede Orkut'u, Friendster'ı ve MySpace'i silip süpürdü.</p>

      <p>Sonraki yirmi yıl boyunca onlarca topluluk platformunun Orkut'un hatasını tekrarladığını izledim. Canlı bir akışa ihtiyaçları varken statik bir telefon rehberi inşa ettiler.</p>

      <h2>Telefon rehberi hatası</h2>

      <p>Erken dönem sosyal siteler kullanıcıyı bir fihristteki sabit sayfa gibi görüyordu. Kaydoluyor, sevdiğiniz müzik gruplarını yazıyor, dört fotoğraf yüklüyor ve okulunuz veya mahalleniz için birkaç topluluğa katılıyordunuz. Arkadaşlarınızı ekledikten sonra, birinin fotoğraf değiştirip değiştirmediğini görmek için yirmi profili tek tek gezmediğiniz sürece Salı sabahı sitede yapacak hiçbir şey kalmıyordu.</p>

      <p>Orkut, São Paulo ve İstanbul gibi şehirlerdeki yoğun mikro toplulukların davetiye prestijiyle ne kadar hızlı büyüyebileceğini kanıtladı. Yine de ürün, kullanıcı bir şey aramaya girene kadar olduğu yerde duruyordu.</p>

      <h2>Müşteri tutundurmayı (retention) değiştiren iki özellik</h2>

      <p>Facebook hayatta kaldı çünkü bir rehber gibi davranmayı bırakıp hareketi kaydetmeye başladı. Bu kırılmayı iki somut ürün değişikliği tetikledi:</p>

      <ul>
        <li><strong>Haber Kaynağı / News Feed (Eylül 2006):</strong> Güncelleme var mı diye on arkadaşınızın profilini tek tek gezmek yerine, giriş yaptığınız saniyede her ayrılık, parti fotoğrafı ve grup katılımı ana ekranınıza düştü.</li>
        <li><strong>Beğen / Like Butonu (Şubat 2009):</strong> Yorum yazmak otuz saniyelik düşünme gerektiriyordu. Başparmak butonuna basmak ise yarım saniye sürdü ve paylaşımı yapan kişiye peşinden koşacağı sayısal bir skor tablosu verdi.</li>
      </ul>

      <p style="text-align: center; font-style: italic; margin: 2rem 0;">Statik Profil Rehberi &rarr; Canlı Aktivite Akışı &rarr; Tek Tıklamalık Skor Tablosu</p>

      <blockquote>"Rehber sizin onu ziyaret etmenizi bekler. Akış ise bir günü kaçırdığınızda sizi cezalandırır."</blockquote>

      <h2>Markalar Orkut'un hatasını bugün nasıl tekrarlıyor?</h2>

      <p>Bir şirket bana marka topluluğunun, sadakat uygulamasının veya B2B müşteri portalının neden birinci aydan sonra giriş almadığını sorduğunda sorun neredeyse her zaman aynıdır: Statik bir rehber kurmuşlardır.</p>

      <p>Müşteri Perşembe günü uygulamanıza girdiğinde Pazartesi gördüğü ekranın birebir aynısını görüyorsa, ikinci ayda uygulamayı açmayı bırakır. Bir ürünü veya topluluğu canlı tutmak için dört noktayı kontrol ediyorum:</p>

      <ul>
        <li><strong>Son ziyaretten beri neyin değiştiğini gösterin:</strong> Yeni kullanıcı hareketlerini, fiyat değişimlerini veya ilerleme güncellemelerini doğrudan giriş ekranına çıkarın.</li>
        <li><strong>İlk tepkinin maliyetini düşürün:</strong> Üyelerden bir paragraf yazı istemeden önce tek dokunuşla kaydetme, oylama veya katılma imkanı verin.</li>
        <li><strong>Önce küçük ve yoğun grupları doldurun:</strong> Kapıları herkese açmadan önce Orkut'un erken dönem yayılımını kopyalayın; tek bir okulu, şehri veya meslek grubunu %60 yoğunluğa ulaştırın.</li>
        <li><strong>Gerçek akran hareketine bağlı bildirimler gönderin:</strong> Genel haftalık hatırlatma e-postaları atmak yerine, kullanıcının yakın çevresinden biri aksiyon aldığında bildirim gönderin.</li>
      </ul>
    `
  },
  "influencer-measurement-ghost-successes": {
    title: "Influencer Seçiminde Skor Kartı Nasıl Kullanılır?",
    excerpt: "Kampanya sonu raporları milyonlarca izlenme gösterirken satışlar yerinde sayabilir. Sözleşme imzalamadan önce bu 5 maddelik tabloyu kullanın.",
    date: "21 Mar 2026",
    content: `
      <p>Geçen ay katıldığım bir kampanya sonu değerlendirme toplantısında ajans 4 milyon izlenmeyi kutluyordu. Satışlar tek bir adet bile kıpırdamamıştı.</p>

      <p>Bu toplantıyı onlarca kez izledim. Biri tertemiz bir sunum açar. Herkes erişim rakamlarına ve etkileşim oranına bakıp başını sallar. Kimse cirodan bahsetmez çünkü rapor en baştan ciroyu takip edecek şekilde kurulmamıştır.</p>

      <h2>Sadece izlenme saydığınızda ne olur?</h2>

      <p>Kampanya başlamadan önce net bir değerlendirme tablosu yoksa, ekipler dışa aktarması en kolay rakamlara sığınır. Genelde dört kötü sonuç ortaya çıkar.</p>

      <p>Reklamlar teslimat bölgenizin dışında yaşayan veya ürünü satın alma gücü olmayan milyonlarca insana ulaşır. Otomatik oynatma döngüleri, izleyiciler sesi kapalı şekilde kaydırıp geçerken video izlenmelerini şişirir. Komik bir skeç, B2B yazılım satmaya çalışan bir marka için lise öğrencileri arasında viral olur. Ajanslar tamamen çekiliş yorumlarıyla şişirilmiş %6'lık etkileşim oranlarını başarı diye raporlar.</p>

      <p>Bunun için içerik üreticilerini suçlamıyorum. Onlar brief'te ne istendiyse onu teslim etti.</p>

      <h2>Etkileşim oranı neden yanıltır?</h2>

      <p>Etkileşim oranı haftadan haftaya sert dalgalanır. Tek bir tartışmalı yorum dizisi ya da hediye çekilişi bu oranı bir gecede ikiye katlayabilir. Yüksek etkileşim insanların paylaşıma tepki verdiğini gösterir, ancak kimsenin ürünü satın almak isteyip istemediği hakkında hiçbir şey söylemez.</p>

      <p>Ben doğrudan ticari davranışa bağlı metrikleri tercih ediyorum.</p>

      <h2>Sözleşme imzalamadan önce kontrol ettiğim beş kriter</h2>

      <p>Bir içerik üreticisi iş birliğini denetlerken beş somut faktörü puanlıyorum.</p>

      <ul>
        <li><strong>Alıcı örtüşmesi:</strong> Bu kişinin kitlesi, ürününüze gerçekten para ödeyen insanlarla eşleşiyor mu?</li>
        <li><strong>Rakip blokajı:</strong> Bu isimle siz çalışmazsanız, gelecek ay ana rakibiniz onu bağlayacak mı?</li>
        <li><strong>Satış geçmişi:</strong> Takipçileri geçmişte önerdiği ürünleri gerçekten satın aldı mı, yoksa sadece eğlence için mi izliyorlar?</li>
        <li><strong>Ham veri erişimi:</strong> Kırpılmış ekran görüntüleri yerine link tıklamalarını, izlenme sürelerini ve UTM trafiğini paylaşmayı kabul ediyor mu?</li>
        <li><strong>Tekrar satın alma oranı:</strong> İndirim koduyla gelen müşteriler ikinci kez alışveriş yapıyor mu, yoksa indirim biter bitmez kayboluyor mu?</li>
      </ul>

      <h2>Skor kartını kullanmak</h2>

      <p>Aşağıdaki hesaplayıcıyı, bütçe harcanmadan önce içerik üreticilerini bu beş kritere göre puanlamak için hazırladım. Temel rakamları girin, kampanyanız için önemli olan ağırlıkları seçin ve puanın kötü eşleşmeleri baştan elemesine izin verin.</p>

      <div data-widget="evaluation"></div>
    `
  },
  "tragedy-of-attention-commons": {
    title: "Rage-Bait İçerikler Müşteri Güvenini Nasıl Tüketir?",
    excerpt: "Sahte kancalarla izlenme toplayan her içerik üreticisi, dürüst markalar için dikkat maliyetini artırır. Gerçek güveni filtrelemenin 4 yolu.",
    date: "23 Oca 2026",
    content: `
      <p>1968 yılında Garrett Hardin, ortak bir merayı paylaşan besicilerin hikayesini yazdı.<sup id="fnref1" class="footnote-ref"><a href="#fn1">1</a></sup> Her besici biraz daha fazla kazanmak için meraya bir inek daha ekler. Sonunda otlar tükenir ve tüm sürüler aç kalır.</p>

      <p>İnternetteki kullanıcı dikkati de birebir aynı şekilde çalışır.</p>

      <h2>Kötü bir paylaşımın herkese kestiği vergi</h2>
      <p>Bir içerik üreticisi 500.000 izlenme kapmak için sahte bir kanca veya öfke yemi (rage-bait) kullandığında, ortak güven havuzundan küçük bir parçayı yakar. İzleyici bir kez kandırılır. Ertesi gün aynı izleyici, gardını aldığı için dürüst üç içerik üreticisini kaydırıp geçer.</p>

      <p>George Akerlof bunun ikinci el araba pazarında nasıl işlediğini göstererek Nobel kazandı.<sup id="fnref2" class="footnote-ref"><a href="#fn2">2</a></sup> Alıcılar para ödemeden önce sağlam arabayla ayıplı arabayı (lemon) ayırt edemediğinde, tüm arabalar için ödemeye razı oldukları fiyatı düşürürler. İyi satıcılar pazarlardan çekilir. Geriye sadece kötü arabalar kalır.</p>

      <blockquote>"İzleyici ilk üç saniyede gerçek uzmanlıkla ucuz yemi ayırt edemediğinde, herkese duyduğu güveni aşağı çeker."</blockquote>

      <h2>Gerçek güveni nasıl filtreliyorum?</h2>
      <p>Faydalı bilgi kamusal bir altyapı gibidir. Bütçenizi yönetmek için benim hazırladığım bir tabloyu kullanmanız, başka on kişinin aynı dosyayı kullanmasını engellemez.</p>

      <p>Bu güveni korumak dört pratik adım gerektirir:</p>
      <ul>
        <li><strong>Medya satın almada ucuz yemi cezalandırın:</strong> Erişim sıçramalarını yapay tartışmalardan veya sahte başlıklardan alan isimleri marka listelerinden çıkarıyorum.</li>
        <li><strong>Doğrulanmış aksiyona ödeme yapın:</strong> Ücretin bir kısmını yorum gruplarıyla taklit edilemeyecek nitelikli trafiğe veya gerçek kayıtlara bağlayın.</li>
        <li><strong>Meslektaş referanslarına bakın:</strong> Sektördeki diğer uygulayıcıların bu kişinin çalışmalarına gerçekten atıf yapıp yapmadığını kontrol edin.</li>
        <li><strong>Takipten çıkma ve gizleme oranlarını izleyin:</strong> Sponsorlu bir paylaşım yayınlandıktan sonra kaç kişinin kanalı sessize aldığını takip edin.</li>
      </ul>

      <h2>Paranın bir sonraki durağı</h2>
      <p>Yapay zeka akışları ucuz video ve metinlerle doldurdukça, ham erişim her ay daha da ucuzluyor. Doğrulanmış güven ise pahalılaşıyor. Bir klip kanalında on milyon ucuz gösterim satın almaktansa, okurlarının 2.000 kelimelik bir incelemeyi sonuna kadar okuduğu küçük bir uzmana iki katı CPM ödemeyi tercih ederim.</p>

      <hr />
      <section class="footnotes">
        <ol>
          <li id="fn1">Hardin, G. (1968). "The Tragedy of the Commons." Science. <a href="#fnref1">↩</a></li>
          <li id="fn2">Akerlof, G. A. (1970). "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism." Quarterly Journal of Economics. <a href="#fnref2">↩</a></li>
        </ol>
      </section>
    `
  },
  "intellectual-captivity-luxury-dopamine": {
    title: "Şık Strateji Sunumları Neden Nadiren Hayata Geçer?",
    excerpt: "Kusursuz diyagramlarla dolu strateji sunumları zeki hissettirir ama Pazartesi sabahı hiçbir davranışı değiştirmez. Planları uygulanabilir kılmanın yolu.",
    date: "10 Oca 2026",
    content: `
      <p>Bir müşterim, her üç slaytta bir özel diyagramların yer aldığı 90 sayfalık bir marka stratejisi sunumu için 80.000 Euro ödemişti. Altı ay sonra medya satın alma planları ve açılış sayfaları, ajansı tutmadan önceki günle birebir aynıydı.</p>

      <p>Ben buna <strong>Lüks Dopamin</strong> diyorum. İnsanlar saatlerce boş akış kaydırmanın verdiği o uyarılma hissini, şık tipografi ve MBA kelimeleriyle paketlenmiş olarak alıyor.</p>

      <h2>Akıllı ekipler bu tuzağa neden düşer?</h2>
      <p>Karmaşık bir şemayı okumak insana iş yapıyormuş hissi verir. Toplantı odasındaki herkes analizin çok keskin olduğunda hemfikir olur. Sunum ortak sürücüye kaydedilir. Sonra Salı sabahı gelir ve kimse hangi reklamı kapatacağını ya da hangi fiyatı değiştireceğini bilmez.</p>

      <p>Bir strateji dokümanı bir tercihi zorlamak yerine sofistike görünmeye odaklandığında, pahalı bir eğlenceye dönüşür.</p>

      <h2>Sürtünmeyi doğru yere koymak</h2>
      <p>Gerçek operasyonel değişim rahatsız edici bir adım gerektirir. Birinin mevcut bir alışkanlığı durdurması, bir bütçe kalemini kesmesi veya kötü çalışan bir kayıt ekranını baştan yazması gerekir.</p>

      <p>Her strateji dokümanını tek bir soruyla test ediyorum: Bu sayfa yüzünden ekipteki bir kişi Cuma gününe kadar hangi somut işi farklı yapacak?</p>

      <div data-widget="luxurydopaminequiz"></div>

      <h2>Parlak planlar nerede kırılır?</h2>
      <p>Sunumlar genellikle dağınık bir CRM'e, yazılımcıların iş listesine veya aylık hacim üzerinden prim alan bir satış ekibine değdiği ilk anda dağılır. Bir öneri insanların nasıl prim aldığını ve verinin araçlar arasında nasıl aktığını hesaba katmıyorsa, o PDF'in içinde kalmaya mahkumdur.</p>
    `
  },
  "paradox-of-precision-local-optima": {
    title: "Aşırı Dar Hedefleme Gelecekteki Büyümeyi Nasıl Küçültür?",
    excerpt: "Sadece bu hafta satın alacağı kesin olan kitleyi hedeflemek, altı ay sonraki satış havuzunuzu kurutur. Retargeting ve soğuk kitle dengesi.",
    date: "10 Oca 2026",
    content: `
      <p>Danışmanlık verdiğim bir e-ticaret markası, 14 ay boyunca Meta hedeflemesini geçmiş alıcıların en üst %2'lik benzer (lookalike) kitlesine kadar daralttı. ROAS rakamları 2,4'ten 4,1'e çıktı. Toplam çeyreklik ciroları ise %30 düştü.</p>

      <p>Kendilerini optimize ede ede bir köşeye sıkıştırmışlardı.</p>

      <h2>Yakındaki tepenin tuzağı</h2>
      <p>Matematikte yerel optimum (local optimum), sırf yanındaki daha yüksek dağa ulaşmak için vadiye inmeyi reddettiğiniz için size en yüksek nokta gibi görünen küçük bir tepedir.<sup class="footnote-ref" id="fnref3"><a href="#fn3">3</a></sup> Reklam algoritmaları küçük tepeleri çok sever. Bugün satın almaya en hazır kişileri bulur ve o kitle tükenene kadar reklamı aynı kişilere gösterir.</p>

      <p>Satın alma kararı vermesi yedi günden uzun süren her kitleyi sistemden kestiğinizde, gelecek çeyreğin müşterilerini de kesmiş olursunuz.</p>

      <h2>Mevcut talebi toplamak vs. yeni alan aramak</h2>
      <p>Her pazarlama bütçesi işini iki görev arasında bölmek zorundadır:</p>
      <ul>
        <li><strong>Mevcut talebi hasat etmek:</strong> Sepetini terk edenleri ve ürünü zaten arayan yüksek niyetli kişileri yeniden hedeflemek.</li>
        <li><strong>Soğuk cepleri test etmek:</strong> Gelecek yıl kimin ilgilenebileceğini görmek için markayı henüz tanımayan gruplara bütçe ayırmak.</li>
      </ul>

      <blockquote>"7 günlük ROAS'ı maksimize etmesini söylediğiniz bir algoritma, oranını korumak için şirketinizi memnuniyetle küçültür."</blockquote>

      <h2>Bütçeyi nasıl bölüyorum?</h2>
      <p>Ücretli medya bütçesinin %15 ila %20'sini ayrı bir havuza alıyor ve bu havuzdan kısa vadeli ROAS hedeflerini kaldırıyorum. O para, ilk haftada dönüşüm oranlarının çirkin göründüğü yeni kreatif açıları ve soğuk kitleleri test etmek için var.</p>

      <p>Bütçenizin %100'ü adını zaten bilen insanlara gidiyorsa, o küçük havuz reklamlarınızdan sıkıldığı anda müşteri edinme maliyetiniz dikey olarak fırlar.</p>

      <hr />
      <section class="footnotes">
      <ol>
      <li id="fn3">Multi-Armed Bandit problemlerindeki Exploration-Exploitation (Keşif-Kullanım) dengesinin klasik bir uygulaması. <a href="#fnref3">↩</a></li>
      </ol>
      </section>
    `
  },
  "influence-coordination-problem": {
    title: "İki Günde 80 İçerik Üreticisi Neden Ayda 8 İsimden İyidir?",
    excerpt: "Influencer bütçesini on aya yaymak sadece arka plan gürültüsü yaratır. 80 sesi aynı 48 saatlik pencereye koymak pazarı harekete geçirir.",
    date: "09 Oca 2026",
    content: `
      <p>8 içerik üreticisine bir yıl boyunca ayda bir kez paylaşım yapmaları için para öderseniz neredeyse hiçbir şey olmaz. Daha küçük 80 içerik üreticisine aynı Salı sabahı paylaşım yapmaları için ödeme yaparsanız, insanlar birbirine mesaj atıp neler olduğunu sormaya başlar.<sup class="footnote-ref" id="fnref1"><a href="#fn1">1</a></sup></p>

      <h2>Bir reklamı görmek vs. herkesin o reklamı gördüğünü görmek</h2>
      <p>Instagram'da bir ürünün tek bir kez önerildiğini gördüğümde geçip giderim. Kendi alanımdaki dört farklı kişinin öğle yemeğinden önce aynı araçtan bahsettiğini gördüğümde ise yeni bir sekme açıp ürünü incelerim.</p>

      <p>Ekonomist Thomas Schelling, insanların ortak sinyaller etrafında nasıl harekete geçtiğini göstermişti. Oyun teorisinde bu durum "ortak bilgiye" (common knowledge) dayanır: Ürünü biliyorum ve meslektaşlarımın da bu ürünü bildiğini biliyorum.</p>

      <h2>Damla damla yapılan kampanyalar neden çalışmaz?</h2>
      <p>Medya planlamacıları grafikteki trafik çizgisini düz tutmak için bütçeyi çeyreklere eşit yaymayı çok sever. Bu alışkanlık ivmeyi öldürür. Haftada tek bir içerik üreticisi paylaşımı, kitlenin bir örüntü fark etme eşiğinin altında kalır.</p>

      <h2>Yoğunlaştırılmış bir lansman nasıl yapılır?</h2>
      <p>Bir lansman planlarken zamanlamayı dört kural etrafında kuruyorum:</p>
      <ul>
        <li><strong>Zaman penceresini sıkıştırın:</strong> İçerik üreticisi paylaşımlarının %70'ini altı haftaya yaymak yerine 48 saatlik tek bir bloğa yerleştirin.</li>
        <li><strong>Tek bir topluluğun içinde kalın:</strong> Birbiriyle alakasız kategorilerdeki 50 kişi yerine, aynı 200.000 okuru paylaşan 50 içerik üreticisi seçin.</li>
        <li><strong>Katılımı görünür kılın:</strong> Alıcılara kamerada veya profillerinde hemen tanınan somut bir rozet, bekleme listesi sırası ya da fiziksel bir parça verin.</li>
        <li><strong>Stok veya erişim sınırı koyun:</strong> Pencereyi Cuma günü kapatın ki geç kalanlar beklemenin maliyetini hissetsin.</li>
      </ul>

      <blockquote>"Tek bir ses reklamdır. İki günde kırk ses ise yerel bir olaydır."</blockquote>

      <hr />
      <section class="footnotes">
      <ol>
      <li id="fn1">Schelling'in (1960) koordinasyon oyunlarındaki odak noktaları (focal points) çalışmasıyla paraleldir. <a href="#fnref1">↩</a></li>
      </ol>
      </section>
    `
  },
  "clustering-mechanics-growth-loops": {
    title: "Yoğun Topluluklar Geniş Erişimden Neden Daha Hızlı Büyür?",
    excerpt: "Küçük bir mahallenin veya meslek grubunun %40'ını kazanmak, genel kitlenin %0,1'ini kazanmaktan çok daha karlıdır.",
    date: "09 Oca 2026",
    content: `
      <p>Facebook, Harvard'da tek bir öğrenci yurdunda başladı ve ikinci bir okula açılmadan önce orada %70 kullanım oranına ulaştı. Bugün çoğu girişim ilk günden tüm internete açılıyor ve sonra kimsenin arkadaşlarını neden davet etmediğini merak ediyor.</p>

      <p>Geniş erişim dağılır ve incelir. Yoğun cepler ise katlanarak büyür.</p>

      <h2>Komşular neden komşuları kopyalar?</h2>
      <p>Sıkı bir grupta insanlar her hafta aynı on meslektaşıyla konuşur. Aynı ajanstaki dört tasarımcı Figma'ya geçerse, beşinci tasarımcı sırf dosyaları açabilmek için geçmek zorunda kalır. Otoyolda birbirini tanımayan 100.000 kişinin gördüğü bir açıkhava ilanının böyle bir baskısı yoktur.</p>

      <p>Yakın çevrenizdeki üç kişinin bir ürünü kullandığını gördüğünüzde, deneme riskiniz sıfıra iner.</p>

      <h2>Tek bir cepten büyüme nasıl kurulur?</h2>
      <p>Geniş erişim satın almak yerine, kaynakları devrilme noktasına (tipping point) gelene kadar küçük bir gruba odaklıyorum:</p>

      <ul>
        <li><strong>Sınırları belli bir grup seçin:</strong> Üyelerin birbirini zaten tanıdığı tek bir şehir, tek bir üniversite veya tek bir iş unvanı belirleyin.</li>
        <li><strong>Ürünü iş arkadaşlarıyla daha faydalı hale getirin:</strong> Yalnızca kullanıcının ekibi veya arkadaşları katıldığında tam kapasite çalışan özellikler ekleyin.</li>
        <li><strong>Devrilme noktasından önce yeni gruba geçmeyin:</strong> B grubuna tek bir lira harcamadan önce, A grubunda organik davetlerin ücretli kayıtları geçmesini bekleyin.</li>
        <li><strong>Toplam kaydı değil, yoğunluğu ölçün:</strong> Belirli bir şirketin veya kulübün yüzde kaçının aracı aktif kullandığını takip edin.</li>
      </ul>

      <blockquote>"Aynı ofisteki on kullanıcı, bin farklı şehirdeki bin kullanıcıdan daha değerlidir."</blockquote>

      <h2>Reklam maliyetleri fırladığında ne olur?</h2>
      <p>Meta veya Google'da CPM'ler ikiye katlandığında, geniş hedefleme üzerine kurulu markaların kar marjı bir gecede erir. Sıkı toplulukların içine yerleşmiş markalar ise o grupların içindeki kulaktan kulağa yayılımla büyümeye devam eder.</p>
    `
  },
  "dopamine-economy-meaning-economy": {
    title: "Müşteri Tatmini Sonsuz Kaydırmayı Neden Yener?",
    excerpt: "Algoritmalar beklentiyi otomatikleştirdi ve kullanıcıları tatmin etmek yerine yordu. Apple, Duolingo ve LEGO net bitiş çizgileriyle sadakati nasıl kuruyor?",
    date: "11 Oca 2026",
    content: `
      <p>Sabah 07:30'da tek bir mesaja bakmak için telefonunuzu açıyorsunuz. Kırk dakika sonra on dokuz kısa video izlemiş, altı öfkeli tartışma okumuş ve hiçbirini hatırlamıyor oluyorsunuz.</p>

      <p>Her şey elinizin altındaydı. Hiçbir şey tamamlanmış hissettirmedi.</p>

      <h2>Beklenti vs. tatmin</h2>
      <p>Nörobilimciler dopaminin ödülü aldıktan sonra değil, ödülden hemen önce salgılandığını vurgular. Sizi bir sonraki şeye tıklamaya iter. Öneri akışları bu beklenti tetikleyicisini her dört saniyede bir ateşlemeyi çözerken, tatminin gerçekleştiği duraksama anını sistemden sildi.</p>

      <p style="text-align: center; font-style: italic; margin: 2rem 0;">Merak &rarr; Çaba &rarr; Ödül &rarr; Bitiş Çizgisi</p>

      <p>On yıl önce iyi bir albüm veya iyi bir restoran bulmak yirmi dakikalık bir araştırma gerektiriyordu. Harcanan o küçük çaba, sonucun kazanılmış hissettirmesini sağlıyordu. Şimdi akış, siz elinizdeki videoyu bitirmeden bir sonrakini önünüze sürüyor.</p>

      <p>On bin küçük başlangıç yaşıyorsunuz ama tek bir kapanış bile yok.</p>

      <h2>Bitirmenize izin veren dört ürün</h2>
      <p>Bugün sadakatimi koruyan markalar, süreci bilinçli olarak yavaşlatan veya bana net bir durma noktası veren markalar:</p>

      <ul>
        <li><strong>Bilinçli duraksama:</strong> Apple, iPhone kutusunun kapağını hava boşluğu sayesinde dört saniyede yavaşça açılacak şekilde tasarlar; bu küçük bekleme anı değerli kılar.</li>
        <li><strong>Günlük çaba sınırı:</strong> Duolingo ve Wordle size günde beş dakikalık, gerçekten biten bir görev verir; böylece uygulamadan tamamlanmış hissederek çıkarsınız.</li>
        <li><strong>Yıllık özet:</strong> Spotify Wrapped, bir yıllık pasif dinleme verisini başı ve sonu olan tek bir hikayeye dönüştürür.</li>
        <li><strong>Fiziksel tamamlanma:</strong> LEGO, birleştirmesi on iki saat süren ve bittiğinde rafta somut olarak duran setler satar.</li>
      </ul>

      <blockquote>"Her uygulamanın insanları sonsuza kadar ekranda tutmaya çalıştığı bir pazarda, kullanıcının işini bitirmesine izin veren marka güveni kazanır."</blockquote>

      <h2>Ürün ekiplerine sorduğum sorular</h2>
      <p>Bir kayıt akışını veya içerik stratejisini incelerken oturumun nasıl bittiğine bakıyorum:</p>
      <ul>
        <li>Kullanıcı bir işi tamamlamış hissederek mi ayrılıyor, yoksa sadece yorulduğu için mi sekmeyi kapatıyor?</li>
        <li>Sonucun kazanılmış hissettirmesi için nereye küçük bir çaba adımı ekleyebiliriz?</li>
        <li>Bizim ürünümüzde bir kitabın bölüm sonu sayfasının karşılığı ne?</li>
      </ul>
    `
  },
  "influencer-marketing-measurement-problem": {
    title: "Son Tıklama Modeli Influencer Bütçelerini Nasıl Yanıltır?",
    excerpt: "Müşteri ürünü Ocak ayında bir içerik üreticide görür, Mart'ta Google'da aratıp alır. Son tıklama tüm krediyi Google'a verir. Gerçek etkiyi ölçmenin 4 yolu.",
    date: "11 Oca 2026",
    content: `
      <p>Geçen yıl bir cilt bakım markası bana analiz panelini gösterdi. İndirim kodu kullanımları düşük göründüğü için en iyi üç YouTube içerik üreticisiyle sözleşmelerini kesmişlerdi. İki ay sonra Google'daki markalı arama hacimleri %38 düştü.</p>

      <p>Satışı getiren içerik üreticileriydi. Google sadece kasada fişi kesiyordu.</p>

      <h2>İki aylık gecikme</h2>
      <p>İnsanlar nadiren bir TikTok videosunun içindeki linke tıklayıp o saniyede 150 dolarlık bir ürünü satın alır. Ocak ayında bir içerik üreticisinin üründen bahsettiğini izlerler. Şubat'ta bir arkadaşlarında görürler. Mart ayında Google'a marka adını yazıp satın alırlar.</p>

      <p>Son tıklama (last-click) modeli bu satışın %100 kredisini markalı arama reklamına yazar. Ardından performans ekibi arama reklamlarına daha fazla bütçe kaydırır ve talebi en başta yaratan içerik üreticisi bütçesini kısar.</p>

      <p style="text-align: center; font-style: italic; margin: 2rem 0;">İçerik Üretici Bahsi &rarr; Hafıza &rarr; Markalı Arama &rarr; Satın Alma</p>

      <blockquote>"İçerik üreticisi iş birliklerini yalnızca indirim kodlarıyla değerlendirmek, bir açıkhava ilanını kaç kişinin direğe tırmanıp panoya dokunduğuyla ölçmeye benzer."</blockquote>

      <h2>Gerçekte ne olduğunu ölçmenin dört yolu</h2>
      <p>Gerçek ticari artışı görmek için dört kontrolü birleştiriyorum:</p>

      <ul>
        <li><strong>Bölgesel kontrol grupları (Holdout testleri):</strong> Kampanyayı bir şehirde veya ülkede çalıştırırken benzer bir bölgeyi karanlıkta bırakın, ardından toplam satış artışını karşılaştırın.</li>
        <li><strong>Markalı arama sıçramaları:</strong> Büyük bir video yayınlandıktan sonraki 72 saat içinde Google Search Console'daki marka aramalarını izleyin.</li>
        <li><strong>Satın alma sonrası anketler:</strong> Ödeme onay ekranına tek bir zorunlu soru koyun: "Bizi ilk nerede duydunuz?"</li>
        <li><strong>12 aylık kohort takibi:</strong> İçerik üreticisi kampanya haftalarında gelen müşterilerin tekrar satın alma oranlarını, indirim reklamından gelen alıcılarla karşılaştırın.</li>
      </ul>

      <h2>Matematiği düzelttiğinizde ne değişir?</h2>
      <p>Link tıklamalarının yanında markalı arama artışını ve ödeme sonrası anket yanıtlarını takip etmeye başladığınızda, size en yüksek kar marjlı müşterileri getiren içerik üreticilerini işten çıkarmayı bırakırsınız.</p>
    `
  },
  "reach-is-not-influence": {
    title: "Takipçi Sayısı Satışı Neden Öngöremez?",
    excerpt: "Kararına güvenilen 12.000 okurlu bir uzman, 5 milyon pasif izleyicisi olan bir ünlüden neredeyse her zaman daha fazla ürün satar.",
    date: "11 Oca 2026",
    content: `
      <p>Bir moda markasının tek bir Reels videosu için 4 milyon takipçili bir ünlüye 60.000 dolar ödediğini gördüm. Paylaşım 900.000 izlendi ve 14 ceket sattı. Aynı hafta Substack'te 11.000 abonesi olan niş bir stilist aynı ceketten bahsetti ve iki günde 180 adet sattırdı.</p>

      <p>İzlenme sayısı kaç gözün ekrandan kayıp geçtiğini sayar. Satış ise kaç kişinin fikrinin değiştiğini.</p>

      <h2>Büyük hesaplar neden genelde düşük performans gösterir?</h2>
      <p>Kitlesel hesaplar herkese hitap ederek büyür. 5 milyon takipçiye ulaşmak için içeriğin genel eğlenceye dönüşmesi gerekir. İnsanlar komedi, magazin veya yaşam tarzı için izler ve kaydırıp geçer.</p>

      <p>Küçük uzmanlar ise tek bir konuda haklı çıkarak büyür. 15.000 takipçili bir koşu antrenörü belirli bir ayakkabının diz ağrısını çözdüğünü söylediğinde, yorumlardaki 3.000 koşucu gerçekten not alır.</p>

      <p style="text-align: center; font-style: italic; margin: 2rem 0;">Genel Eğlence &rarr; Pasif İzlenme &rarr; Sıfır Aksiyon</p>

      <h2>Gerçek etkiyi gösteren dört sinyal</h2>
      <p>Takipçi sayısına bakmadan önce kitlenin yorumlarda nasıl konuştuğunu kontrol ediyorum:</p>
      <ul>
        <li><strong>Spesifik sorular:</strong> Takipçiler "kalıbı dar mı, bir numara büyük mü almalıyım?" diye mi soruyor, yoksa sadece ateş emojisi mi bırakıyor?</li>
        <li><strong>Takipçilerin birbirine yanıtları:</strong> Yorumlarda insanlar içerik üreticisini beklemeden birbirinin sorusunu yanıtlıyor mu?</li>
        <li><strong>Kaydetme / izlenme oranı:</strong> İnsanlar kredi kartını çıkardığında tekrar bakmak için paylaşımı kaydediyor mu?</li>
        <li><strong>Platform dışı tıklamalar:</strong> Bu kişi izleyicilerinin %5'ini Instagram'dan çıkarıp uzun bir inceleme sayfasını okumaya ikna edebiliyor mu?</li>
      </ul>

      <blockquote>"Erişimi parayla satın alırsınız. Etkiyi ise yalnızca kitle göndericinin kararına güvendiğinde elde edersiniz."</blockquote>

      <h2>Bütçeyi nereye koyuyorum?</h2>
      <p>2 milyon takipçili tek bir yaşam tarzı ünlüsü yerine, 20.000 takipçili on alan uzmanıyla çalışmayı tercih ederim. Toplam erişim sunum slaydında daha küçük görünür ama kasa çok daha fazla çalışır.</p>
    `
  },
  "designing-payoffs": {
    title: "Kullanıcılar Tıklamadan Önce Neyi Hesaplar?",
    excerpt: "Her kayıt formu kullanıcıyı hızlı bir maliyet-fayda hesabına zorlar. Çoğu huni, karşılığında somut bir şey vermeden çok fazla veri istediği için sızdırır.",
    date: "11 Oca 2026",
    content: `
      <p>Bugün on tane B2B yazılım sitesini açın; sekizi size fiyat etiketini göstermeden önce iş e-postanızı, telefon numaranızı, şirket büyüklüğünüzü ve unvanınızı soracaktır. Ziyaretçilerin çoğu dört saniye içinde sekmeyi kapatır.</p>

      <p>Ortadaki takas adaletsiz olduğunda, butonun üzerindeki metnin hiçbir önemi kalmaz.</p>

      <h2>Sessiz takas</h2>
      <p>Her kullanıcı her ekranda hızlı bir hesap yapar. Şu an benden ne kadar zaman, çaba veya kişisel veri istiyorsun ve önümüzdeki on saniye içinde bana karşılığında ne veriyorsun?</p>

      <p>Bir marka daha ilk ekranda beş form alanı doldurtup karşılığında belirsiz bir "satış ekibimiz sizinle iletişime geçecek" vaadi sunduğunda, kullanıcı bu takasta zararlı çıkar. Ve sayfadan ayrılır.</p>

      <h2>Kullanıcıların gerçekten umursadığı dört karşılık</h2>
      <p>Birinin bir sonraki adıma geçmesini istiyorsanız, ona hemen şu dört somut karşılıktan birini verin:</p>
      <ul>
        <li><strong>Kazanılan zaman:</strong> 30 dakikalık bir işi 20 saniyede bitiren bir hesaplayıcı veya şablon.</li>
        <li><strong>Net yanıtlar:</strong> Demo görüşmesi arkasına saklanmadan net fiyatı ve kurulum süresini göstermek.</li>
        <li><strong>Statü veya kanıt:</strong> Pazartesi toplantısında yöneticisine gösterebileceği bir kıyaslama (benchmark) puanı.</li>
        <li><strong>Düşürülmüş risk:</strong> E-posta adresi yazmadan önce aracı tarayıcıda denemesine izin vermek.</li>
      </ul>

      <p style="text-align: center; font-style: italic; margin: 2rem 0;">Kullanıcı Çabası &lt; Anlık Karşılık = Sonraki Adım</p>

      <blockquote>"Bir dönüşüm hunisi sızdırıyorsa başlığı yeniden yazmayı bırakın; çok erken aşamada çok fazla şey isteyip istemediğinizi kontrol edin."</blockquote>

      <h2>Sızdıran bir kayıt akışını düzeltmek</h2>
      <p>Terk edilme oranı yüksek bir kayıt akışını denetlerken, sayfanın sol tarafına kullanıcıdan istenen her alanı ve tıklamayı, sağ tarafına ise o anda geri verilen her somut faydayı yazarım. Sol tarafın sağ taraftan ağır bastığı her noktada formu yarıya indirir ya da ücretsiz aracı e-posta duvarının önüne taşırım.</p>
    `
  },
  "nike-resonance": {
    title: "Nike Küresel Marka Kampanyalarını Nasıl Ölçekliyor?",
    excerpt: "Nike, kimin sporcu olduğuna dair tek bir katı küresel kuralı korurken Londra, Lagos ve Tokyo'daki şehir ekiplerinin uygulamayı yerelleştirmesine nasıl izin veriyor?",
    date: "11 Oca 2026",
    content: `
      <p>1988 yılında Nike, Golden Gate Köprüsü'nde koşan 80 yaşındaki Walt Stack ile "Just Do It" kampanyasını başlattı. Otuz sekiz yıl sonra şirket, birebir aynı temel önermeyi kullanarak 190 ülkede ayakkabı satıyor.</p>

      <p>Küresel markaların çoğu ya aynı televizyon reklamını altyazıyla her ülkeye dayatır ya da yerel ofislerin birbirinden kopuk yirmi farklı marka kimliği uydurmasına göz yumar. Nike iki hatadan da kaçındı.</p>

      <p style="text-align: center; font-style: italic; margin: 2rem 0;">Küresel Kural &rarr; Yerel Sokak Bağlamı &rarr; Kişisel Ekipman</p>

      <h2>Sistem nasıl çalışıyor?</h2>
      <p>Nike, asla değişmeyen çekirdek ile şehirden şehre değişmesi gereken yüzeyi birbirinden ayırır:</p>
      <ul>
        <li><strong>Tek bir sabit inanç:</strong> Kurucu ortak Bill Bowerman'ın "Bir bedenin varsa, sporcusun" cümlesi istisnasız her pazarda geçerlidir.</li>
        <li><strong>Şehir düzeyinde özerklik:</strong> Güney Londra'daki bir kampanya Amerikan basketbol sahalarını değil, yerel grime sanatçılarını ve Pazar günü mahalle ligi futbol sahalarını gösterir.</li>
        <li><strong>Koşu kulüpleri ve yerel ekipler:</strong> Nike mahalle koşu gruplarını ve sokak turnuvalarını destekler; böylece insanlar bir çift ayakkabı satın almadan önce markayı kendi arkadaşlarıyla deneyimler.</li>
        <li><strong>Ürün kişiselleştirme:</strong> Nike By You, alıcıların renk kombinasyonunu seçmesine izin verir; böylece ayakkabı tek tip bir üniforma yerine kişisel bir ekipman gibi hissettirir.</li>
      </ul>

      <blockquote>"Temel inancı katı tutun. Sokak düzeyindeki uygulamayı yerel şehre bırakın."</blockquote>

      <h2>Diğer markalar buradan ne kopyalayabilir?</h2>
      <p>Bölgesel bir kampanya başarısız olduğunda, genel merkez genellikle onay süreçlerini sıkılaştırarak ve küresel şablonları zorunlu kılarak tepki verir. Bu da yerel işleri daha da yapay hale getirir. Nike tam tersini yapıyor: Genel merkez ana fikri koruyor ve kendi sokaklarında hangi sporun, hangi yüzlerin ve hangi dilin karşılık bulacağına yerel ekiplerin karar vermesine izin veriyor.</p>

      <h3>Referanslar ve Ek Okumalar</h3>
      <ul>
        <li><a href="https://about.nike.com/en/newsroom" target="_blank" rel="noopener noreferrer">Nike Newsroom: Küresel Girişimler</a></li>
        <li><a href="https://hbr.org/2016/06/branding-in-the-age-of-social-media" target="_blank" rel="noopener noreferrer">Harvard Business Review: Sosyal Medya Çağında Markalaşma</a></li>
      </ul>
    `
  },
  "authority-is-a-system-outcome": {
    title: "Uzun Vadeli Marka Elçileri Güveni Nasıl İnşa Eder?",
    excerpt: "Mavi, her çeyrekte yüz değiştirmek yerine yıllarca Serenay Sarıkaya ve Kıvanç Tatlıtuğ ile çalıştı. Uzun süreli iş birlikleri güveni nasıl katlar?",
    date: "11 Oca 2026",
    content: `
      <p>Mavi'nin yıllar boyunca Serenay Sarıkaya ve Kıvanç Tatlıtuğ ile nasıl çalıştığına ya da büyük otel gruplarının aynı ünlü marka elçisini en az üç sezon boyunca nasıl koruduğuna bakın. Bunu, her bahar tek seferlik paylaşımlar için on iki farklı influencer kiralayıp Haziran'da hepsini bırakan bir moda markasıyla karşılaştırın.</p>

      <p>İnsanlar yıllar boyunca aynı yüzün aynı markanın arkasında durduğunu gördüğünde, bunu ücretli bir reklam olarak görmeyi bırakır. Gerçek bir bağlılık olarak görmeye başlar.</p>

      <p>Aynı matematik içerik üreticisi için de geçerlidir. Altı ayda beş rakip moda markasıyla çalışan bir içerik üreticisi kendi adını ucuzlatır. Tek bir markayla uzun vadeli elçi olarak çalışan kişi ise markaya değer katarken kendi marka değerini de yukarı taşır. İki taraf da sadık kalarak daha fazla kazanır.</p>

      <h2>Beyin tekrarı neden ödüllendirir?</h2>
      <p>İnsanlar her gün sıfırdan değerlendirme yapmaktan yorulur. Bir şirket yıllar boyunca aynı standartları, aynı yüzleri ve aynı ürün kalitesini koruduğunda, alıcılar alternatif aramayı bırakır. Tanıdık isme yönelirler çünkü o marka onları hiçbir zaman kötü bir sürprizle karşılaştırmamıştır.</p>

      <p style="text-align: center; font-style: italic; margin: 2rem 0;">Net Söz &rarr; Çok Yıllık Tutarlılık &rarr; Varsayılan Güven</p>

      <p>Bu konumu dört alışkanlık inşa eder:</p>
      <ul>
        <li><strong>Çok yıllık elçi anlaşmaları:</strong> Hafta sonu kampanyası için elli yüz kiralamak yerine, daha az sayıda isimle iki veya üç yıllık sözleşmeler imzalayın.</li>
        <li><strong>Tutarlı lider iletişimi:</strong> Üst yönetim iletişimini istikrarlı tutun ki müşteriler iyi çeyreklerde de kötü çeyreklerde de aynı öncelikleri duysun.</li>
        <li><strong>Marka dışı anlaşmalara hayır demek:</strong> Kendi alanı dışındaki kategorileri reddeden içerik üreticileri, önerilerinin inandırıcılığını korur.</li>
        <li><strong>Her seferinde aynı ürün standardı:</strong> Çeyreklik kar marjını şişirmek için malzeme kalitesini asla sessizce düşürmeyin.</li>
      </ul>

      <blockquote>"Güveni zekice bir sloganla talep edemezsiniz. Üç yıl üst üste aynı şekilde durarak kazanırsınız."</blockquote>

      <h2>Yıllık bütçe planlayan müşterilere ne söylüyorum?</h2>
      <p>İçerik üreticisi listenizi yarıya indirin ve ürününüzü gerçekten kullanan isimlerin sözleşme süresini iki katına çıkarın. İlk kampanya bilinirlik getirir. Aynı kişiyle yapılan dördüncü kampanya ise gerçek kar marjının başladığı yerdir.</p>
    `
  },
  "engineering-meaning-automated-systems": {
    title: "Pazarlama Otomasyonlarının Çoğu Neden Spam Gibi Hissettirir?",
    excerpt: "Bir hafta sonu Prag ve Paris'i karşılaştırdım. Booking.com nasıl bir gezi planladığımı sormak yerine bir ay boyunca bana Prag araç kiralama spam'i attı.",
    date: "11 Oca 2026",
    content: `
      <p>Geçen yıl bir hafta sonu Prag'daki otellere ve müzelere baktım. Uçak bileti almamıştım. Bir hafta sonu kaçamağının maliyetini görmek için Prag ile Paris'i karşılaştırıyordum.</p>

      <p>Booking.com bu gezinme oturumunu kesinleşmiş bir karar sanıp harekete geçti. Sonraki üç hafta boyunca gelen kutum otomatik uyarılarla doldu: "Prag otel fiyatları yükseliyor", "Prag müze kartınızı kaçırmayın", "Prag'da araç kiralayın." Gelen her e-posta, bir sonrakini açma ihtimalimi biraz daha düşürdü.</p>

      <p>Bir otel sayfasına tıklamam Prag'a gitmeye karar verdiğim anlamına gelmez. Sistem bunun yerine bana tek bir akıllı soru sorsaydı ne olurdu? "İki kişilik bir hafta sonu mu planlıyorsunuz? Prag ve Paris'te romantik hafta sonu aktivitelerinin karşılaştırması burada." Böyle bir e-posta rezervasyonumu o anda kazanırdı.</p>

      <h2>Tıklamayı kararla karıştırmak</h2>
      <p>Kitlesel pazar ve FMCG markaları pazarlama otomasyonlarında bu hatayı her gün yapıyor. Bir kullanıcı kategori sayfasına iki kez baktı diye tetikleyici ateşleniyor. CRM, kişinin neden baktığını hiç anlamadan tıkladığı ürün için %10 indirim dayatan beş takip e-postası gönderiyor.</p>

      <p>Otomasyon yanlış tahmin yürütüp üstüne bir de sesini yükselttiğinde, müşteri anlaşıldığını değil takip edildiğini hisseder.</p>

      <p style="text-align: center; font-style: italic; margin: 2rem 0;">Ham Tıklama &rarr; Yanlış Varsayım &rarr; Spam &rarr; Abonelikten Çıkış</p>

      <blockquote>"Birinin on dakika önce göz attığı ürünü peşinden gezdirmek kişiselleştirme değil, tembel örüntü eşleştirmesidir."</blockquote>

      <h2>Otomatik akışları nasıl düzeltiyorum?</h2>
      <p>Otomatik e-postaları gerçekten işe yarar hale getirmek için CRM'de dört kuralı değiştiriyorum:</p>
      <ul>
        <li><strong>Gezinme ile satın alma niyetini ayırın:</strong> Tek oturumda üç şehre bakmak kişinin seçenekleri karşılaştırdığını gösterir; ona geri sayım sayacı yerine bir karşılaştırma rehberi gönderin.</li>
        <li><strong>Amacı sorun:</strong> Kullanıcının çift olarak mı, çocuklarla mı yoksa iş için mi seyahat ettiğini seçmesine izin verin ve önerileri o bağlama göre kurgulayın.</li>
        <li><strong>Gönderim sıklığına sert sınır koyun:</strong> Biri bir destinasyon hakkındaki iki e-postayı görmezden geldiyse, aynı yer hakkında üçüncüyü göndermeyi durdurun.</li>
        <li><strong>Son 30 günü hatırlayın:</strong> Web gezinmesini, geçmiş rezervasyonları ve e-posta tıklamalarını birbirine bağlayın ki sistem her zaman butik otelde kalan birine ucuz pansiyon önermesin.</li>
      </ul>
    `
  },
  "ethics-of-influence-system-problem": {
    title: "Yanlış KPI'lar Karanlık Tasarımları (Dark Patterns) Nasıl Doğurur?",
    excerpt: "Bir şirket ürün ekibinin primini tek bir abonelik iptal (churn) rakamına bağladığında, ekip hedefi tutturmak için yanıltıcı iptal ekranları kurar.",
    date: "11 Oca 2026",
    content: `
      <p>Denetlediğim bir abonelik uygulamasında altı ekranlık bir iptal labirenti vardı; "Aboneliğimi Koruyun" butonu parlak yeşildi, "İptali Onayla" bağlantısı ise tıklanmayan soluk gri bir metin gibi görünüyordu. Bunu kuran ürün yöneticisi son derece kibar, düşünceli biriydi. Yıllık primi tamamen aylık abonelik iptalini (churn) %1,5 düşürmesine bağlıydı.</p>

      <p>Bir ekibin primini hiçbir koruma sınırı koymadan tek bir rakama bağladığınızda, sonunda o rakamı tutturmak için bir tuzak inşa ederler.</p>

      <h2>Tek metrikli hedefler nasıl yoldan çıkar?</h2>
      <p>E-posta ekibine sadece açılma oranıyla değerlendirileceklerini söyleyin; sahte "Ynt: Siparişiniz" konu başlıkları yazmaya başlarlar. Reklam ekibine sadece tıklama oranıyla ölçüleceklerini söyleyin; markayı utandıracak sansasyonel yemler kullanırlar. Kimsenin onlara sınırı aşmalarını emretmesine gerek yoktur. Skor tablosu onları oraya iter.</p>

      <p style="text-align: center; font-style: italic; margin: 2rem 0;">Dar KPI &rarr; Ekip Baskısı &rarr; Karanlık Tasarım &rarr; Kaybedilen Güven</p>

      <blockquote>"Bana karanlık tasarım (dark pattern) kullanan bir şirket gösterin, size yanlış KPI'ı ölçen bir yönetim paneli göstereyim."</blockquote>

      <h2>Büyüme ekiplerine koyduğum dört koruma sınırı</h2>
      <p>Optimizasyonu dürüst tutmak için her ana büyüme hedefinin yanına bir karşı-metrik bağlamak gerekir:</p>
      <ul>
        <li><strong>Dönüşümü iade oranıyla eşleştirin:</strong> Yeni bir ödeme akışı dönüşümleri %8 artırırken ters ibrazları (chargeback) veya iadeleri %6 artırıyorsa o testi iptal edin.</li>
        <li><strong>İptali tek tıklamaya indirin:</strong> Çıkış kapısının kayıt butonundan daha fazla tıklama gerektirmemesini zorunlu kılın.</li>
        <li><strong>Otomatik kazananları her ay denetleyin:</strong> En yüksek performans gösteren A/B testi varyantlarını bir insanın gözden geçirmesini sağlayın; agresif bir ifadenin alıcıları yanıltarak kazanmadığından emin olun.</li>
        <li><strong>Öfkeli destek taleplerini sayın:</strong> Kaç müşterinin yenileme veya promosyon şartları yüzünden kandırıldığını düşünerek destek ekibine yazdığını takip edin.</li>
      </ul>

      <h2>Bir hilenin gerçek maliyeti</h2>
      <p>Bir müşteriyi 19 dolarlık aboneliğin fazladan bir ayına sıkıştırmak size 19 dolar kazandırır ve o kişinin dört arkadaşına şirketinize asla yaklaşmamalarını söylemesini garanti eder. Bu, her ölçekte berbat bir ticarettir.</p>
    `
  },
  "prisoner-dilemma-attention": {
    title: "Günlük Bildirimler Müşteri Listenizi Nasıl Tüketir?",
    excerpt: "Bir perakendeci her gün promosyon SMS'i atmaya başladığında rakipleri de kopyalar. Çok geçmeden herkes her gün mesaj atar ve müşteriler tüm kategoriyi sessize alır.",
    date: "11 Oca 2026",
    content: `
      <p>Geçen Kasım ayındaki Black Friday haftasında telefonunuza kaç tane promosyon SMS'i ve uygulama bildirimi geldiğini bir düşünün. Bir perakendeci Cuma yoğunluğundan önce davranmak için Pazartesi sabahı mesaj atmaya başladı. Ertesi yıl her perakendeci iki hafta önceden mesaj atmaya başladı. Toplam satışlar ikiye katlanmadı. Abonelikten çıkma oranları ise tarihi zirveyi gördü.</p>

      <p>Oyun teorisi buna Mahkum İkilemi (Prisoner's Dilemma) adını verir.</p>

      <h2>Rasyonel rakipler herkesi nasıl fakirleştirir?</h2>
      <p>A Markası haftada iki e-posta gönderirken B Markası beş e-posta gönderirse, B Markası kısa vadede biraz ciro çalar. Bunun üzerine A Markası da takvimini haftada beş e-postaya çıkarır. Altı ay içinde sektördeki her marka her gün mesaj yağdırmaya başlar, e-posta sağlayıcıları hepsini tanıtımlar sekmesine süpürür ve müşteriler hiçbirini açmamaya başlar.</p>

      <blockquote>"Yorgun bir gelen kutusuna iki kat fazla mesaj göndermek, en iyi müşterilerinize adınızı görmezden gelmeyi öğretir."</blockquote>

      <h2>Gürültünün dışına nasıl çıkılır?</h2>
      <p>Yüksek açılma oranlarını ve sağlıklı kar marjlarını koruyan markalar hacim oyununu oynamayı reddeder. Dört şeyi farklı yaparlar:</p>
      <ul>
        <li><strong>Daha az gönderin, daha net konuşun:</strong> Dolgu bültenleri kesin ve müşterilere yalnızca gerçek bir yeni ürün, stok yenilemesi veya işlerine yarayacak bir güncelleme olduğunda ulaşın.</li>
        <li><strong>Sıklığı kullanıcının seçmesine izin verin:</strong> Abonelere ya hep ya hiç şeklinde bir çıkış dayatmak yerine, haftalık özet ile sadece büyük lansman bildirimleri arasında kolay bir seçim sunun.</li>
        <li><strong>Ölü adresleri her çeyrek temizleyin:</strong> 90 gündür tek bir e-postayı bile açmayan kişileri listeden çıkarın ki gerçekten ilgilenenler için teslim edilebilirlik (deliverability) yüksek kalsın.</li>
        <li><strong>Mesajı tek başına faydalı kılın:</strong> E-postanın içine doğrudan faydalı bir içerik veya bilgi koyun ki okur o gün alışveriş yapmasa bile e-postayı açtığına değsin.</li>
      </ul>

      <h2>Sessiz kalarak kazanmak</h2>
      <p>On rakip her öğleden sonra bildirim ekranında bağırırken, ayda bir kez okunmaya değer bir şeyle konuşan marka bir arkadaştan gelen mesaj gibi karşılanır.</p>
    `
  },
  "hubspot-utility": {
    title: "HubSpot Ücretsiz Bir Araçla Nasıl Milyonlarca Lead Topladı?",
    excerpt: "HubSpot'un Website Grader aracı 4 milyondan fazla web sitesini ücretsiz puanladı ve neredeyse sıfır reklam maliyetiyle nitelikli B2B yazılım müşterisi getirdi.",
    date: "05 Oca 2026",
    content: `
      <p>2007 yılında HubSpot kurucu ortağı Dharmesh Shah, Website Grader adında basit bir web uygulaması yazdı. Site adresinizi yazıyordunuz ve otuz saniye sonra arama etiketlerinize, sayfa hızınıza ve mobil uyumluluğunuza göre sitenize 100 üzerinden bir puan veriyordu. Tek bir araçtan 4 milyondan fazla web sitesi geçti.</p>

      <p>Çoğu yazılım şirketi o bütçeyi banner reklamlara harcardı. HubSpot ise satışı kendi adına yapan ücretsiz bir teşhis aracı kurdu.</p>

      <h2>Soğuk reklamlar neden zorlanıyordu?</h2>
      <p>2007'de küçük işletme sahipleri, büyük vaatlerde bulunan SEO ajanslarından haftada on kez soğuk telefon alıyordu. Güven düşüktü ve reklam tıklamaları pahalıydı. Yabancı birinden bir banner reklama tıklayıp 45 dakikalık yazılım demosu ayırtmasını istemek nadiren işe yarıyordu.</p>

      <h2>Grader işlem sırasını nasıl değiştirdi?</h2>
      <p>Website Grader akışın sırasını dört noktada tersine çevirdi:</p>
      <ul>
        <li><strong>Satış konuşmasından önce değer:</strong> Kullanıcı daha bir satış temsilcisiyle konuşmadan önce kendi sitesindeki eksik etiketlerin ve yavaş sayfaların net listesini aldı.</li>
        <li><strong>Otomatik ön eleme verisi:</strong> Girilen her URL, HubSpot'a potansiyel müşterinin trafik düzeyini, mevcut teknoloji altyapısını ve tam zayıf noktalarını söyledi.</li>
        <li><strong>Paylaşılabilir prestij kancası:</strong> Sitesi 85 ve üzeri puan alan kurucular rozetlerini kendi bloglarına astı ve meslektaşlarını ücretsiz olarak araca taşıdı.</li>
        <li><strong>Ürüne doğal köprü:</strong> Raporda işaretlenen her sorun, doğrudan HubSpot'un ücretli yazılımının çözdüğü bir konuydu.</li>
      </ul>

      <h2>Buradan ne çıkarılmalı?</h2>
      <p>Derecelendirilen dört milyon site, tıklama başına ödeme yapmadan milyarlarca dolarlık bir satış hattı kurdu. Lead toplama reklamlarına 50.000 dolar harcamadan önce, 10.000 dolarlık bir hesaplayıcının, puanlama aracının veya kıyaslama testinin müşterinin ilk sorusunu ücretsiz çözüp çözemeyeceğini sorun.</p>

      <h3>Referanslar ve Ek Okumalar</h3>
      <ul>
        <li><a href="https://website.grader.com/" target="_blank" rel="noopener noreferrer">HubSpot Website Grader: Orijinal Araç</a></li>
        <li><a href="https://www.hubspot.com/company-news" target="_blank" rel="noopener noreferrer">HubSpot Yatırımcı İlişkileri: Büyüme ve Müşteri Edinme Verileri</a></li>
      </ul>
    `
  },
  "collapse-of-trust-creator-economies": {
    title: "İçerik Üreticileri Satış Güçlerini Nasıl Kaybeder?",
    excerpt: "Bir içerik üreticisi Pazartesi yatak, Çarşamba VPN, Cuma vitamin tanıttığında izleyiciler şakalar için kalır ama bütün linkleri görmezden gelir.",
    date: "04 Oca 2026",
    content: `
      <p>Orta ölçekli bir YouTuber'ın 500.000 aboneye ulaşıp bir menajerlik ajansıyla imzalamasını izleyin. Doksan gün içinde kanalında genellikle Pazartesi bir yatak markası, Çarşamba bir VPN ve Cuma günü toz yeşillik takviyesi tanıtımı dönmeye başlar. Altı ay sonra bin izlenme başına link tıklamaları %70 düşer.</p>

      <p>Kitle videoları izlemeye devam eder. Sadece reklam aralarını duymamayı öğrenmiştir.</p>

      <h2>Kısa vadeli ücret kovalamak dönüşümü nasıl öldürür?</h2>
      <p>Menajerler genellikle brüt sponsorluk anlaşmalarından %20 komisyon alır. Teşvikleri, içerik üreticisinin ürünü hayatında kullanıp kullanmadığına bakmaksızın bu ay en yüksek parayı veren sponsorla her boş video alanını doldurmaktır.</p>

      <p>İlk uyumsuz sponsorluk iyi satış yapar çünkü iki yıllık kazanılmış güvenin sırtına biner. Beşinci uyumsuz sponsorda ise izleyiciler içerik üreticisinin çek karşılığında her metni okuyacağını anlar.</p>

      <blockquote>"Kitle bir kez önerilerinizin en yüksek teklifi verene satılık olduğuna karar verdiğinde, artık kişiliği olan bir reklam panosusunuzdur."</blockquote>

      <h2>Kitlenin satın almaya devam etmesini sağlayan dört kural</h2>
      <p>Beşinci yılında hala linkleri satışa dönüşen içerik üreticileri iş birliklerini farklı yönetir:</p>
      <ul>
        <li><strong>Kötü ürünleri açıkça reddedin:</strong> Bir ürünü test edip bozulduğu için sponsorluk çekini geri çevirdiğinizde bunu kitlenize açıkça anlatın.</li>
        <li><strong>Sponsor kategorilerini üçle sınırlayın:</strong> Rakipleri sırayla tanıtmak yerine her kategoride tek bir markayla en az bir yıl çalışın.</li>
        <li><strong>Hisse veya gelir ortaklığı alın:</strong> Yirmi tane tek seferlik metin okumak yerine, her gün gerçekten kullandığınız iki ürünle derin ortaklık kurun.</li>
        <li><strong>Eğlence ile onaylamayı ayırın:</strong> Ücretli bir reklam metnini asla tesadüfi bir kişisel keşifmiş gibi sunmayın.</li>
      </ul>

      <h2>Markalar neye bakmalı?</h2>
      <p>Bir içerik üreticisiyle anlaşmadan önce son otuz paylaşımını geriye doğru kaydırın ve tanıttığı her markayı listeleyin. İki ayda birbiriyle alakasız on iki ürün tanıttıysa bütçenizi cebinizde tutun.</p>
    `
  },
  "trust-as-long-game": {
    title: "Müşteri Güveni Edinme Maliyetlerini (CAC) Nasıl Düşürür?",
    excerpt: "Ödeme adımında gizli bir ücret çıkarmak veya ürün vaadini abartmak bir çeyreklik satış kazandırır ama yıllarca müşteri edinme maliyetinizi artırır.",
    date: "04 Oca 2026",
    content: `
      <p>İkinci el bir ilan sitesinde sıfır yorumlu bir yabancıdan kamera lensi almakla, aynı lensi Amazon veya B&H Photo'dan almak arasındaki farkı düşünün. İlan sitesinde iki gün boyunca mesajlaşır, seri numarası ister ve yine de kutudan taş çıkmasından endişe edersiniz. B&H'te ise bir sorun çıkarsa geri alacaklarını bildiğiniz için sekiz saniyede satın al butonuna basarsınız.</p>

      <p>O sekiz saniyelik ödeme, birikmiş güvenin finansal değeridir.</p>

      <h2>Tutulmayan bir sözün gizli vergisi</h2>
      <p>Tekrarlanan oyunlarda oyuncular geçen turda ne yaptığınızı hatırlar. Her sipariş zamanında ulaştığında ve vaat edildiği gibi çalıştığında, bir sonraki satış ucuzlar. Daha az yeniden hedefleme (retargeting) reklamına, daha küçük indirimlere ve daha kısa açılış sayfalarına ihtiyaç duyarsınız.</p>

      <p>Ödeme adımındaki tek bir gizli ücret veya abartılı bir iddia bu matematiği tersine çevirir. Artık alıcı küçük yazıları okur, %30 indirim kodu bekler ya da bir dahaki sefere rakibinizden alışveriş yapar.</p>

      <blockquote>"Müşteriyi her kandırdığınızda, önümüzdeki üç yıl boyunca kendi müşteri edinme maliyetinizi (CAC) artırırsınız."</blockquote>

      <h2>Gelecekteki reklam maliyetlerini düşüren dört alışkanlık</h2>
      <p>On yıllar boyunca güveni katlayan şirketler günlük operasyonlarına dört alışkanlık yerleştirir:</p>
      <ul>
        <li><strong>Toplam fiyatı ilk ekranda gösterin:</strong> Kargo ve vergileri son ödeme adımında sürpriz yapmak yerine en başta açıkça yazın.</li>
        <li><strong>Kimin almaması gerektiğini söyleyin:</strong> Ürününüz bir ziyaretçinin kullanımı için fazla büyük, fazla temel veya yanlışsa bunu açıkça belirtin.</li>
        <li><strong>Hataları tartışmadan düzeltin:</strong> Kusurlu siparişleri müşteriye üç ayrı form doldurtmak yerine anında iade alın veya değiştirin.</li>
        <li><strong>Otomatik yenilemeden önce hatırlatın:</strong> Yıllık abonelik karttan çekilmeden yedi gün önce müşteriye bilgilendirme e-postası gönderin.</li>
      </ul>
    `
  },
  "marketing-as-game-of-incentives": {
    title: "Reklam Metnini Bırakıp Ödül Yapısını Düzeltmek",
    excerpt: "Dropbox, banner reklamlarını yeniden yazmak yerine iki arkadaşa da 500 MB ücretsiz alan vererek 100.000'den 4 milyon kullanıcıya çıktı.",
    date: "03 Oca 2026",
    content: `
      <p>2009 yılında Dropbox, Google AdWords reklamları satın almayı denedi ve 99 dolarlık bir ürün için müşteri başına 230 dolardan fazla harcadı. Reklam metinlerini yeniden yazmak matematiği düzeltmedi. Mevcut kullanıcılara davet ettikleri her arkadaş için 500 megabayt ücretsiz depolama alanı vermek ise Dropbox'ı 15 ayda 100.000 kullanıcıdan 4 milyona taşıdı.</p>

      <p>Yabancıları kelimelerle ikna etmeye çalışmayı bırakıp kullanıcıların paylaşarak ne kazandığını değiştirdiler.</p>

      <h2>Metin değişiklikleri neden tavana çarpar?</h2>
      <p>Bir kampanya tıkandığında çoğu ekip kreatif toplantısı düzenler. Beş yeni başlık denerler, buton renklerini değiştirirler ve e-posta dizisini baştan yazarlar. Oysa alttaki teklif tüm riski müşterinin sırtına yükleyip karşılığında küçücük bir ödül veriyorsa, daha parlak sıfatlar dönüşümü yalnızca binde birkaç oynatır.</p>

      <p>İnsanlar kendi çıkarlarına göre hareket eder. Bir iş arkadaşını davet etmek kendi iş gününü kolaylaştırıyorsa veya o an ihtiyaç duyduğu depolama alanını açıyorsa, tek bir marka manifestosu bile okumadan arkadaşını davet eder.</p>

      <blockquote>"Güçlü bir teşvik ortalama bir metni çalıştırır. Harika bir metin ise kötü bir teklifi nadiren kurtarır."</blockquote>

      <h2>Davranışı değiştiren dört teşvik</h2>
      <p>Tıkanmış bir kampanyayı yeniden kurgularken metne dokunmadan önce dört kaldıraca bakıyorum:</p>
      <ul>
        <li><strong>Çift taraflı davet ödülü:</strong> Hem gönderene hem de arkadaşına somut bir yükseltme verin ki davet göndermek arkadaşını satmak gibi değil, hediye vermek gibi hissettirsin.</li>
        <li><strong>Anında ürün kapasitesi:</strong> Aksiyonları bedavacı avcılarını çeken 5 dolarlık hediye çekleriyle değil, ekstra depolama alanı, kullanıcı koltuğu veya özelliklerle ödüllendirin.</li>
        <li><strong>Riskin tersine çevrilmesi:</strong> Alıcının otuz gün sonra ödemesine veya iki tıklamayla iptal etmesine izin verin ki ürünü denemenin hiçbir kaybı olmasın.</li>
        <li><strong>Satış ekibi uyumu:</strong> Satış temsilcilerine ikinci ayda iptal edilen sözleşmeler üzerinden değil, 6 aylık müşteri tutundurma (retention) başarısı üzerinden prim ödeyin.</li>
      </ul>
    `
  },
  "samsung-multi-tier": {
    title: "Samsung Tek İsim Altında 160 ve 1.800 Dolarlık Telefonu Nasıl Satıyor?",
    excerpt: "Samsung aynı marka adıyla hem 160 dolarlık bütçe dostu telefon hem de 1.800 dolarlık katlanabilir model satıyor. Ucuz modeller amiral gemisini nasıl bozmuyor?",
    date: "03 Oca 2026",
    content: `
      <p>İstanbul'da veya Cakarta'da bir elektronik mağazasına girin; 160 dolarlık bir Samsung Galaxy A serisi telefonun yirmi adım ötesinde 1.800 dolarlık bir Samsung Galaxy Z Fold görürsünüz. Koridorun devamında aynı logo bir buzdolabının ve televizyonun üzerinde durur.</p>

      <p>Kitabi marka stratejisi bunun batması gerektiğini söyler. Lüks markalar fiyat güçlerini ucuz model satmayı reddederek korur; ucuz markalar ise 1.800 dolara telefon koyduğunda ciddiye alınmaz. Samsung küresel ölçekte ikisini aynı anda başarıyor.</p>

      <h2>Segmentlerin birbirini yemesini nasıl engelliyorlar?</h2>
      <p>Samsung, ürün ve pazarlama yapısının içinde dört net ayrım uyguluyor:</p>
      <ul>
        <li><strong>En tepede donanım halesi:</strong> Ultra ve Fold serileri kameralar ve katlanan cam etrafında dev küresel lansmanlarla çıkar; orta segment alan müşteriye bile şirketin teknoloji lideri olduğunu kanıtlar.</li>
        <li><strong>Parça üretimi gücü:</strong> Samsung rakiplerinin de kullandığı OLED ekranları ve bellek çiplerini bizzat ürettiği için, alıcılar şirketi bir moda etiketinden çok bir mühendislik devi olarak görür.</li>
        <li><strong>Bölgesel ürün tasarımı:</strong> Hindistan ve Güneydoğu Asya'daki yerel ekipler A ve M serilerini o pazardaki kullanıcıların batarya ömrü ve çift SIM ihtiyaçlarına göre özel olarak kurgular.</li>
        <li><strong>Ayrıştırılmış alt markalar:</strong> Galaxy Z, Galaxy S ve Galaxy A serilerinin mağaza stantları, ödeme planları ve içerik üreticisi listeleri ayrıdır; böylece Fold alıcısı kendisini asla giriş seviyesi reyonunda hissetmez.</li>
      </ul>

      <h2>Çok katmanlı model ne zaman çalışır?</h2>
      <p>Her fiyat katmanında aynı anda satış yapabilmek için en üst katmanın henüz kimsenin üretemediği bir donanımı gözle görülür şekilde icat etmesi gerekir. 1.800 dolarlık uçta katlanan ekranlar ve amiral gemisi sensörler olmasaydı, 200 dolarlık telefonlar tüm markayı üç yıl içinde sıradan bir fiyat markasına çekerdi.</p>

      <h3>Referanslar ve Ek Okumalar</h3>
      <ul>
        <li><a href="https://news.samsung.com/global/" target="_blank" rel="noopener noreferrer">Samsung Global Newsroom: Ar-Ge Girişimleri</a></li>
        <li><a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights" target="_blank" rel="noopener noreferrer">McKinsey Insights: Küresel Pazar Segmentasyon Stratejileri</a></li>
      </ul>
    `
  },
  "why-engagement-metrics-lie": {
    title: "Sosyal Medya Beğenileri Neden Nadiren Satış Getirir?",
    excerpt: "Bir fotoğrafa çift tıklamak yarım saniye sürer ve bedavadır. Satın almak ise kredi kartı gerektirir. Beğeni yerine takip etmeniz gereken 4 sinyal.",
    date: "02 Oca 2026",
    content: `
      <p>Bir B2B yazılım kurucusu geçen ay bana LinkedIn istatistiklerini gösterdi. Yılın en çok beğenilen paylaşımı 14.000 tepki ve 800 yorum almıştı. 22 yaşında aldığı bir ret yanıtını anlatan duygusal bir özçekimdi. Sıfır demo talebi getirdi. Üç gün sonra bir fiyatlandırma tablosunu adım adım anlatan kuru bir paylaşım 42 beğeni aldı ve toplam 120.000 dolar değerinde dört kurumsal sözleşme getirdi.</p>

      <p>Beğeni sayısı, bir paylaşıma yarım saniyede katılmanın ne kadar kolay olduğunu ölçer.</p>

      <h2>Platformlar neden yanlış skor tablosunu öne çıkarır?</h2>
      <p>Instagram, TikTok ve LinkedIn insanları uygulamada tutarak paylaşımlar arasında daha fazla reklam göstermekten para kazanır. Yorumlarda 500 hızlı tartışma çıkaran bir paylaşım platformu zengin eder. Sizin ürününüzden ise nadiren tek bir adet bile satar.</p>

      <blockquote>"Başparmakla ekrana dokunmanın izleyiciye hiçbir maliyeti yoktur. Bunu satın alma niyeti sanmayı bırakın."</blockquote>

      <h2>Beğeni yerine takip ettiğim dört rakam</h2>
      <p>İçerik performansını değerlendirirken okurdan gerçek bir çaba gerektiren hareketlere bakıyorum:</p>
      <ul>
        <li><strong>Özel mesajla (DM) iletilme:</strong> Kaç kişi paylaşımı iş arkadaşına veya ortağına "buna bir bakalım" notuyla özelden gönderdi?</li>
        <li><strong>Kaydetmeler:</strong> İnsanlar bir proje planlarken veya satın alma yaparken tekrar bakmak için paylaşımı kaydetti mi?</li>
        <li><strong>Aynı gün arama hacmi:</strong> Paylaşım yayına girdikten sonraki saatlerde Google'daki markalı aramalar sıçradı mı?</li>
        <li><strong>Yüksek niyetli sayfa görüntülemeleri:</strong> Kaç okur fiyatlandırma sayfasına veya vaka analizine tıklayıp iki dakikadan fazla kaldı?</li>
      </ul>

      <h2>Kaydıranlar için değil, alıcılar için yazmak</h2>
      <p>Gerçek alıcıları dönüştüren paylaşımlar genellikle viral olamayacak kadar spesifiktir. Net fiyatları, teknik ödünleşimleri ve somut hataları açıkça yazarlar. Kalabalığın yarısı kaydırıp geçer; bütçesi olan yirmi kişi ise doğrudan e-posta gönderir.</p>
    `
  },
  "not-everything-should-be-optimized": {
    title: "Aşırı Otomasyon Müşteri Sadakatini Nasıl Zedeler?",
    excerpt: "Her temas noktasını otomatikleştirmek kuruşlar kazandırır ama markanızı otomat makinesine çevirir. Müşterilerin hatırladığı şey küçük insani detaylardır.",
    date: "02 Oca 2026",
    content: `
      <p>Geçen yıl Lizbon'da kaldığım butik bir otel, hala dolmakalemle iki cümlelik el yazısı bir hoş geldiniz kartı yazıyor ve masaya bir tabak taze incir bırakıyor. Bir maliyet danışmanı onlara kartı otomatik check-in SMS'iyle değiştirmelerini ve oda başına 3,40 Euro tasarruf etmek için inciri kaldırmalarını söylerdi.</p>

      <p>O 3,40 Euro'luk detay, aynı oteli üç kez ayırtmamın ve altı arkadaşıma önermemin tek sebebi.</p>

      <h2>Verimlilik sinyali ne zaman öldürür?</h2>
      <p>Ekonomide maliyetli sinyal (costly signaling) yalnızca gönderici ucuza taklit edilemeyecek gerçek bir çaba harcadığında çalışır. Bankanızdan gelen otomatik doğum günü e-postasının hiçbir anlamı yoktur çünkü bir yazılımın gece yarısı on milyon kişiye sıfır maliyetle aynı mesajı attığını bilirsiniz.</p>

      <p>El yazısı bir not, kendi e-posta kutusundan yanıt veren bir kurucu ya da senaryoya bağlı kalmadan telefonda yirmi dakika kalmasına izin verilen bir müşteri temsilcisi tam da verimsiz olduğu için öne çıkar.</p>

      <blockquote>"İnsanlar işinizin açıkça insan zamanı harcanmış kısımlarına güvenir."</blockquote>

      <h2>Otomatikleştirmeyi reddettiğim dört alan</h2>
      <p>Faturalandırmayı, lojistiği ve veri tabanı senkronizasyonlarını sonuna kadar otomatikleştirin; ancak şu dört anda direksiyonu insanlarda bırakın:</p>
      <ul>
        <li><strong>Yüksek değerli müşteriler için ilk karşılama:</strong> İşleriyle ilgili spesifik bir detaya değinen 45 saniyelik kişisel bir video veya düz metin bir e-posta gönderin.</li>
        <li><strong>Bir sorun çıktığında telafi süreci:</strong> Siparişi kırık gelen öfkeli bir müşteriyi asla bir chatbot döngüsünün içine hapsetmeyin.</li>
        <li><strong>Kutu açılışı:</strong> Paketin içinde tamamen kutuyu açma anını özel kılmak için var olan tek bir fiziksel detay bırakın.</li>
        <li><strong>Kreatif denemeler:</strong> Ekibin cesur fikirleri deneyebilmesi için pazarlama bütçesinin %10'unu katı ön test zorunluluklarından muaf tutun.</li>
      </ul>
    `
  },
  "attention-optimization-suboptimal": {
    title: "Tık Yemi (Clickbait) Bir Markayı Yavaş Yavaş Nasıl İflas Ettirir?",
    excerpt: "Abartılı e-posta başlıkları ve pop-up'lar bu Salı tıklamaları artırır, on dört ay sonra ise ölü müşteri tutundurma (retention) rakamları olarak geri döner.",
    date: "01 Oca 2026",
    content: `
      <p>İncelediğim bir medya yayıncısı, sabah bültenlerinde acil kırmızı alarm havası veren konu başlıkları test etti. İlk haftada açılma oranları %28'den %39'a fırladı. Büyüme yöneticisi terfi aldı. Sonraki on dört ay içinde toplam aktif okur kitlesi yarıya indi çünkü okurlar aciliyet tonuna inanmayı bıraktı ve göndericiyi spam klasörüne attı.</p>

      <p>Kısa vadeli paneller birinci haftadaki sıçramayı kutlar ve bunu on dördüncü aydaki mezarlıkla nadiren ilişkilendirir.</p>

      <h2>Hasar neden bir yıl boyunca gizlenir?</h2>
      <p>Birini dramatik bir başlığa veya tam ekran pop-up'a tıklaması için kandırdığınızda, tıklama bugünün raporuna anında yansır. Rahatsızlık ise müşterinin zihnine kaydedilir. Çoğu zaman o saniyede abonelikten çıkmazlar. Sadece sonraki dört mesajınızı okumadan geçerler ve sonunda hesapları tamamen soğur.</p>

      <blockquote>"Her ucuz numara, gelecek yılın kitlesinden tefeci faiziyle tıklama borç alır."</blockquote>

      <h2>Kitle yorgunluğunu erken yakalayan dört metrik</h2>
      <p>Ekiplerin listeyi yakmasını engellemek için ana panele dört yorgunluk kontrolü koyuyorum:</p>
      <ul>
        <li><strong>Sonuna kadar okuma oranı:</strong> Başlığa tıklayanların yüzde kaçının sayfanın en altına kadar okuduğunu ölçün.</li>
        <li><strong>90 günlük kohort açılma oranları:</strong> Altı ay önce katılan abonelerin mesajları hala yeni kayıt olanlarla aynı oranda açıp açmadığını takip edin.</li>
        <li><strong>Spam şikayet oranı:</strong> Kampanya başına spam bildirimlerini izleyin ve %0,05 sınırını aşan her şablonu anında durdurun.</li>
        <li><strong>Tekrar ziyaret aralığı:</strong> Kullanıcıların bir bildirimle dürtülmeye ihtiyaç duymadan kendi kendilerine geri gelip gelmediğini ölçün.</li>
      </ul>
    `
  },
  "mcdonalds-glocalization": {
    title: "McDonald's Küresel Standartlarla Yerel Menüleri Nasıl Dengeliyor?",
    excerpt: "McDonald's mutfak operasyonlarını küresel olarak kilitlerken yerel ekiplerin McAloo Tikki ve Ebi Burger geliştirmesine izin vererek günde 70 milyon kişiye hizmet veriyor.",
    date: "01 Oca 2026",
    content: `
      <p>Mumbai'de bir McDonald's'a girerseniz baharatlı patates ve bezelyeyle yapılan McAloo Tikki sipariş edebilirsiniz. Tokyo'da bir şubeye girerseniz karidesli Ebi Filet-O alırsınız. İkisinin de mutfağına girerseniz fritözlerin, gıda güvenliği zamanlayıcılarının ve araçla servis (drive-thru) düzenlerinin Chicago ile saniyesi saniyesine aynı kurallarla çalıştığını görürsünüz.</p>

      <p>100'den fazla ülkede günde 70 milyon müşteriye hizmet vermek, hangi kuralların taşa yazıldığını ve hangilerinin yerel yöneticiye ait olduğunu net biçimde ayırmayı gerektirir.</p>

      <h2>Birebir kopyalar yurt dışında neden batar?</h2>
      <p>Amerikan sığır ve domuz eti menüsünü olduğu gibi Hindistan veya Malezya'ya ihraç etmek boş bir restoran garantiler. Her yerel bayinin kendi mutfak akışını ve tedarik zinciri standardını uydurmasına izin vermek ise hızı ve gıda güvenliğini bozar.</p>

      <h2>Sabit kalanlar vs. değişenler</h2>
      <p>McDonald's işi dört net katmana ayırır:</p>
      <ul>
        <li><strong>Kilitli mutfak operasyonları:</strong> Soğuk zincir lojistiği, fritöz sıcaklıkları, tedarikçi denetimleri ve hazırlama süreleri tüm dünyada birebir aynıdır.</li>
        <li><strong>Kilitli ana ürünler:</strong> Patates kızartması ve imza burgerler Lizbon, New York ve İstanbul'da aynı tattadır; böylece seyahat edenler temel standardı her zaman bilir.</li>
        <li><strong>Yerel menü özgürlüğü:</strong> Ülke ekipleri mevcut mutfak ekipmanlarını kullanarak Malezya'da Bubur Ayam veya Orta Doğu'da McArabia gibi yerel ürünler geliştirir.</li>
        <li><strong>Yerel mağaza temposu:</strong> Avrupa'daki McCafé'ler öğleden sonra uzun oturumlar için kruvasan ve koltuk düzeniyle kurulurken, ABD banliyö şubeleri çift şeritli araç servisine göre optimize edilir.</li>
      </ul>

      <blockquote>"Tezgahın arkasındaki mutfağı standartlaştırın. Tezgahın önündeki menü panosunu yerelleştirin."</blockquote>

      <h2>Bunu uluslararası büyümeye uyarlamak</h2>
      <p>Bir marka yeni bir ülkeye girip tökezlediğinde genellikle bu iki katmanı birbirine karıştırmıştır. Ya operasyonel omurgasını gevşetip kaliteyi bozmuştur ya da vitrindeki teklifini yerel alışkanlıklara uyarlamayı reddetmiştir.</p>

      <h3>Referanslar ve Ek Okumalar</h3>
      <ul>
        <li><a href="https://corporate.mcdonalds.com/corpmcd/our-stories.html" target="_blank" rel="noopener noreferrer">McDonald's Corp: Küresel Etki Raporları</a></li>
        <li><a href="https://www.economist.com/topics/mcdonalds-corporation" target="_blank" rel="noopener noreferrer">The Economist: Big Mac Endeksi ve Küresel Standartlaşma</a></li>
      </ul>
    `
  },
  "influence-as-a-graph": {
    title: "Takipçi Sayısı Yerine Kitlenin Unvanlarını Haritalamak",
    excerpt: "Aralarında kırk Fortune 500 başkan yardımcısının bulunduğu 6.500 okurlu bir bülten, 500.000 takipçili genel bir hesaptan çok daha fazla B2B satış getirir.",
    date: "31 Ara 2025",
    content: `
      <p>Bir B2B yazılım şirketinin iki sektör bülteni yazarı arasında seçim yapmasına yardımcı olmuştum. A Yazarının 120.000 abonesi vardı; çoğunluğu öğrenciler ve genç serbest çalışanlardı. B Yazarının ise 6.500 abonesi vardı ve e-posta uzantılarına hızlıca baktığımızda kırk Fortune 500 şirketinden başkan yardımcısı düzeyinde alıcılar gördük. B Yazarı üçte bir fiyatına mal oldu ve 400.000 dolarlık satış hattı (pipeline) getirdi.</p>

      <p>Etki, bir kişinin ağın neresinde durduğuna ve konuştuğunda onu kimin dinlediğine bağlıdır.</p>

      <h2>Köprü kuran isimler neden en değerlidir?</h2>
      <p>Ağ analizinde en değerli noktalar, normalde birbiriyle nadiren konuşan iki grubu birbirine bağlayan kişilerdir. Klinik araştırmalar yaparken aynı zamanda hastane yöneticileri için anlaşılır bir köşe yazan bir doktor, teknik bulguları satın alma kararlarına tercüme eder.</p>

      <p>Takipçi sayısına göre sıralanmış bir Excel tablosu o kişiyi 400. sıraya koyar. Alıcıları gerçekte kimin etkilediğini gösteren bir harita ise 1. sıraya yazar.</p>

      <blockquote>"Bir içerik üreticisini kaç kişinin takip ettiğini sormadan önce, kitlesindeki hangi on kişinin çekleri imzaladığını sorun."</blockquote>

      <h2>Bütçe harcamadan önce bir nişi haritalamanın dört yolu</h2>
      <p>Hazır bir veri tabanı aracından ilk 50 listesi çekmek yerine, alanı dört adımda haritalıyorum:</p>
      <ul>
        <li><strong>On gerçek alıcıya ne okuduklarını sorun:</strong> Son dönemde satın alma yapmış on müşteriyle konuşun ve her hafta kontrol ettikleri podcast'leri, bültenleri ve hesapları listeleyin.</li>
        <li><strong>Büyük isimlerin kime atıf yaptığına bakın:</strong> Sektördeki bilinen seslerin kimi paylaştığını, alıntıladığını veya yayınlarına davet ettiğini inceleyin.</li>
        <li><strong>Gruplar arası bağlayıcıları bulun:</strong> Teknik uygulayıcılar ile bütçe sahibi yöneticiler arasında köprü kuran uzmanları belirleyin.</li>
        <li><strong>Yorum yapanların unvanlarını inceleyin:</strong> LinkedIn veya Substack'teki yirmi yorum dizisini okuyarak gerçek karar vericilerin yanıtlarda görünüp görünmediğine bakın.</li>
      </ul>
    `
  },
  "signal-vs-noise-influencer-intelligence": {
    title: "Sahte Influencer Etkileşimini Ödeme Yapmadan Önce Yakalamak",
    excerpt: "Bot çiftlikleri ve yorum grupları 200 dolara 100.000 izlenme üretebilir. Gerçek kitle dikkatini ödeme yapmadan önce doğrulamanın 4 yolu.",
    date: "30 Ara 2025",
    content: `
      <p>İki ay önce incelediğim bir medya listesinde 380.000 Instagram takipçisi ve %4,8 etkileşim oranı olan bir yaşam tarzı içerik üreticisi vardı. Kağıt üzerinde kelepir görünüyordu. Son beş Reels videosunu açtığımda ise yorumların %90'ının video yüklendikten sonraki ilk dört dakika içinde hep aynı kırk hesap tarafından yazılmış üç kelimelik kalıplar olduğunu gördüm.</p>

      <p>Etkileşim grupları (pod'lar) ve ucuz izlenme çiftlikleri yüzeydeki rakamları taklit etmeyi çok kolaylaştırdı.</p>

      <h2>İnsan zamanı gerektiren hareketlere bakın</h2>
      <p>Bir bot çiftliği bir öğle yemeği parasına 50.000 video izlenmesi ve 1.000 kalp emojisi üretebilir. Ancak C vitamini serumundaki belirli bir bileşeni tartışan ya da üç haftalık kullanım sonrası kişisel sonucunu anlatan kırk detaylı yorum yazamaz.</p>

      <p>Gerçek insan dikkati dağınık ve spesifik izler bırakır.</p>

      <blockquote>"Tıklaması yarım saniye süren her şey ölçekli olarak taklit edilebilir. Yazması iki dakika süren şeylere bakın."</blockquote>

      <h2>Hesap geçmişinde yaptığım dört adli kontrol</h2>
      <p>Bir iş birliği bütçesini onaylamadan önce hesabın geçmişinde dört kontrol çalıştırıyorum:</p>
      <ul>
        <li><strong>Yorum zamanlama sıçramaları:</strong> Yorumların 24 saate doğal bir eğriyle mi yayıldığına, yoksa ilk on dakikada hep aynı hesaplardan mı yığıldığına bakın.</li>
        <li><strong>Yorum özgüllüğü:</strong> Sadece başlığı değil, videonun ortasındaki spesifik bir detayı referans gösteren kaç yorum olduğunu sayın.</li>
        <li><strong>İzlenme / takipçi istikrarı:</strong> Son yirmi sponsorsuz paylaşıma bakarak taban izlenmelerin istikrarlı mı gittiğini, yoksa reklam basıldığında 2.000 ile 500.000 arasında uçup uçmadığını kontrol edin.</li>
        <li><strong>Trafik ve coğrafya kanıtı:</strong> Son altı aydaki marka iş birliklerinden gelen link tıklamalarının ve kitle coğrafyasının ekran kaydını isteyin.</li>
      </ul>
    `
  },
  "systems-of-resonance": {
    title: "Canlı Etkinlikler Kalıcı Marka Dünyalarını Nasıl Kurar?",
    excerpt: "Shakira ve Andrea Bocelli konserleri iki saatlik bir bilet olmaktan çıkarıp bütün bir yaşam tarzını satan çok günlük kültür deneyimlerine nasıl dönüştürüyor?",
    date: "30 Ara 2025",
    content: `
      <p>Shakira'nın Las Mujeres Ya No Lloran dünya turnesi duraklarını nasıl kurguladığına bakın. Live Nation ve ekibi stadyum kapılarını iki saatlik bir konser için akşam 7'de açmakla yetinmedi; büyük stadyumların etrafındaki çok hektarlık alanları gün boyu yaşayan kültür parklarına dönüştürdü. Hayranlar Super Bowl kostümlerinin sergilendiği kariyer müzesini gezdi, yerel Latin yemek stantlarında yemek yedi, aile alanlarını ziyaret etti ve Iberdrola iş birliğiyle kurulan elektrikli servis ağlarıyla alana taşındı. İnsanlar konserden altı saat önce alana geldi çünkü konserin etrafındaki dünya biletin bir parçasıydı.</p>

      <p>Andrea Bocelli bunun lüks versiyonunu Toskana'daki memleketi Lajatico'da yapıyor. Ekibi yılda bir kez tepelerin arasına Teatro del Silenzio adında açık hava amfitiyatrosu kuruyor, iki gece konser veriyor ve ardından alanı gelecek yaza kadar tamamen söküp doğaya geri bırakıyor. Seyahat operatörleri VIP koltukları helikopter transferleri, Toskana villalarında konaklama, Bocelli aile bağlarında şarap tadımı ve çiftlik evinde akşam yemekleriyle paketleyip 50.000 dolara kadar satıyor. Alıcılar sadece doksan dakikalık bir opera satın almıyor. Belirli bir İtalyan yaşamının içinde üç gün satın alıyor.</p>

      <h2>Tek bir paylaşım neden artık marka kurmuyor?</h2>
      <p>Instagram'da bir influencer'a şişe tutturmak artık insanların markayı umursaması için yeterli değil. Gerçekten canlı hissettiren markalar, insanlara şu iki cümleyi kurduran fiziksel ve kültürel bir dünya inşa ediyor: "Orada olmak istiyorum" ve "Bu kişi benim istediğim yaşam tarzını temsil ediyor."</p>

      <p>Etkinlik, müzik, yemek, ulaşım ve ürün aynı ruh halini paylaştığında, marka bir reklamveren gibi değil ziyaret edebileceğiniz bir yer gibi hissettirmeye başlar.</p>

      <blockquote>"İnsanlar bir bilet veya ürün satın almakla övünmez. Başkalarının içinde olmak isteyeceği bir dünyanın parçası olmakla övünür."</blockquote>

      <h2>O dünyayı kuran dört unsur</h2>
      <p>Stadyum bütçesi olmadan da markalar Shakira ve Bocelli'nin arkasındaki yapıyı kopyalayabilir:</p>
      <ul>
        <li><strong>Tekrarlayan fiziksel bir ritüel sahiplenin:</strong> Takvimi bittiğinde ortadan kalkan imza bir etkinlik veya buluşma etrafında kurun ki kaçırmanın gerçek bir maliyeti olsun.</li>
        <li><strong>Öncesindeki ve sonrasındaki saatleri tasarlayın:</strong> Mekana gelişi, yemeği, müziği ve odadaki insanları ana ürünle aynı özenle kurgulayın.</li>
        <li><strong>Yerel kültürle bağ kurun:</strong> Kiralık bir otel balo salonuna logonuzu yapıştırmak yerine gerçek yerel üreticileri, mekanları ve kültürel figürleri işin içine katın.</li>
        <li><strong>Yaşam tarzını görünür kılın:</strong> Katılımcılara çekmeye değer anlar verin ki kendi paylaşımları arkadaşlarına "orada olmalıyım" sinyalini taşısın.</li>
      </ul>
    `
  },
  "from-influencers-to-authorities": {
    title: "İçerik Üreticileri Sektörde Kalıcı Referans Noktasına Nasıl Dönüşür?",
    excerpt: "Çoğu influencer algoritma değiştiğinde kaybolur. Rand Fishkin ve Gary Vaynerchuk isimlerinin arkasına kalıcı veri ve şirketler kurarak kalabalıktan nasıl ayrıldı?",
    date: "29 Ara 2025",
    content: `
      <p>2000'lerin başında plak şirketleri yeni bir Britney Spears üretmek için milyonlarca dolar harcadı. Jessica Simpson, JoJo ve bir düzine başka şarkıcı benzer prodüktörlerle, benzer koreografilerle ve benzer imajlarla piyasaya çıktı. Bazılarının hit şarkıları oldu. Ama herkesin kıyaslandığı ikon Britney kaldı.</p>

      <p>İçerik üreticisi pazarı da birebir aynı şekilde ikiye ayrılıyor. Influencer'ların %99'u birbirinin kopyası sabah rutinleri ve kıyafet linkleri paylaşarak aynı denizde (sea of sameness) yüzüyor ve algoritma değiştiğinde kayboluyor. On yıl ayakta kalan küçük grup ise kişilik üzerinden yarışmayı bırakıp kendi alanında kalıcı referans noktasına dönüşüyor.</p>

      <h2>Geçişi başaran iki küresel örnek</h2>
      <p>Rand Fishkin 2004 yılında arama motorları üzerine bir blog yazarak ve beyaz tahta önünde "Whiteboard Friday" videoları çekerek başladı. Sponsorluk satan bir içerik üreticisi olarak kalmak yerine, üniversitelerde ders kitabı olarak okutulan O'Reilly SEO kitabını yazdı, Moz'u büyük bir yazılım şirketine dönüştürdü ve ardından SparkToro'yu kurdu. Bugün kurumsal pazarlama ekipleri ve sektör analistleri bütçe dağıtırken onun sıfır tıklamalı (zero-click) arama araştırmalarını kaynak gösteriyor. Pazar Rand'e kişiliği için para ödemiyor. Başka kimsede olmayan verisi için başvuruyor.</p>

      <p>Gary Vaynerchuk 2006'da ailesinin içki dükkanı için YouTube'da şarap videoları çekerek başladı. O erken dikkati VaynerMedia'yı kurmak için kullandı; şirket bugün PepsiCo ve Johnson & Johnson gibi Fortune 500 markalarıyla geleneksel reklam holdinglerinin yanında yıllık strateji sözleşmeleri yürütüyor. Harvard Business School firması hakkında vaka analizleri yazıyor çünkü kişisel erişimini kurumsal bir metoda dönüştürdü.</p>

      <h2>İkonları kopyalardan ayıran dört adım</h2>
      <p>Aynılık denizinden çıkmak, bu haftanın algoritmasından daha uzun yaşayacak varlıklar inşa etmeyi gerektirir:</p>
      <ul>
        <li><strong>Özgün veri veya metot yayınlayın:</strong> Sektördeki diğer profesyonellerin kaynak göstermek zorunda kalacağı araştırmalar yapın, yazılım geliştirin veya referans kılavuzu yazın.</li>
        <li><strong>Sponsor metni okumaktan sahipliğe geçin:</strong> Müşterilerin kitlenizin gözlerini kiralamak yerine doğrudan sonuç için para ödediği bir ürün, ajans veya araç kurun.</li>
        <li><strong>Sektör abartılarına karşı net duruş alın:</strong> Fishkin, herkes alkış tutarken girişim sermayesi tuzakları ve platformların veri manipülasyonu hakkında açıkça yazarak kurumsal güven kazandı.</li>
        <li><strong>Yüzünüzden daha büyük bir ekip kurun:</strong> Her gün video paylaşmadığınızda bile değer üretmeye devam eden bir şirket veya metodoloji oluşturun.</li>
      </ul>
    `
  },
  "repeated-games-trust": {
    title: "Tekrar Satın Alma Matematiği Ücretli Büyümeyi Nasıl Yönetir?",
    excerpt: "Müşteri edinme maliyeti 80 dolar ve ilk sipariş karı 30 dolarken, müşteriyi ilk siparişte gizli ek satışlarla sıkıştırmak zarar etmenizi garantiler.",
    date: "29 Ara 2025",
    content: `
      <p>Roma'da Kolezyum'un hemen karşısındaki turistik bir restoran 28 Euro'ya dondurulmuş makarna servis edip ayakta kalabilir; çünkü müşterilerinin %99'u yarın sabah ülkesine uçacaktır. Üç kilometre ötedeki mahalle lokantası ise taze yemeği adil fiyata verir; çünkü mahalleliyi bir kez kandırırsa o masa önümüzdeki on yıl boş kalır.</p>

      <p>Bugün çok fazla e-ticaret markası, mahalle lokantası sadakati gerektiren müşteri edinme maliyetleri (CAC) öderken ödeme ekranlarını turistik tuzak gibi işletiyor.</p>

      <h2>İkinci siparişin matematiği</h2>
      <p>Bugün çoğu tüketici kategorisinde ücretli reklamlar o kadar pahalıdır ki ilk satışta para kaybedersiniz. Başabaş noktasına ancak ikinci siparişte gelir, gerçek karı üçüncü siparişte yaparsınız.</p>

      <p>Bir büyüme ekibi ilk siparişte fazladan 8 dolar koparmak için agresif çapraz satışlar, önceden işaretlenmiş garanti kutuları veya yavaş kargo kullandığında, müşteri ikinci sipariş için asla geri gelmez. Excel tablosu Pazartesi günü daha yüksek bir ortalama sepet tutarı gösterir, Aralık ayında ise ölü bir şirket bırakır.</p>

      <blockquote>"Ayakta kalmak için tekrar alıcıya ihtiyaç duyan bir işte asla turist tuzağı taktiği kullanmayın."</blockquote>

      <h2>Tekrarlanan oyun pazarlaması için dört kural</h2>
      <p>Tutundurma (retention) ve ödeme ekipleri için kuralları belirlerken dört standardı zorunlu tutuyorum:</p>
      <ul>
        <li><strong>Önceden işaretlenmiş ek ürün yok:</strong> Alıcı açıkça tıklamadığı sürece sepete kargo sigortası veya otomatik yenilenen yedek paket eklemeyin.</li>
        <li><strong>Mevcut müşteriyi en az yeni müşteri kadar ödüllendirin:</strong> Yabancılara %30 indirim dağıtırken beş yıllık sadık aboneye tam fiyat kesmeyi bırakın.</li>
        <li><strong>Her A/B testinde 90 günlük tekrar alım oranına bakın:</strong> O alıcıların ikinci siparişi verip vermediğini görmeden hiçbir ödeme ekranı testini kazanan ilan etmeyin.</li>
        <li><strong>Teslimat tarihinde mütevazı söz verin:</strong> Alıcıya beş günde geleceğini söyleyin ve üçüncü günde kapısına bırakın.</li>
      </ul>
    `
  },
  "predicting-influence-decay": {
    title: "Kötü Bir Marka İş Birliğini Başlamadan Önce Nasıl Anlarsınız?",
    excerpt: "Kozmetik markaları ürünle hiçbir DNA uyumu olmayan, her yerde görünen aynı yüzlerle çalışmaya devam ediyor. Kampanya batmadan önce yapılacak 4 kontrol.",
    date: "28 Ara 2025",
    content: `
      <p>Bugün herhangi bir büyük pazarda Instagram'ı açın ve bir hafta boyunca kozmetik reklamlarını izleyin. Birebir aynı beş influencer'ın Pazartesi lüks bir Fransız serumunu, Perşembe market maskarasını, Cumartesi saç ekim kliniğini ve Pazar günü hızlı moda alışverişini tanıttığını göreceksiniz. Bu markaların hiçbirinin müşterisi veya marka DNA'sı birbiriyle örtüşmüyor.</p>

      <p>Kozmetik pazarlama ekipleri ajans sunumunda güvenli göründüğü için bu yüzleri kiralamaya devam ediyor. Böyle kurgulanan bir kampanya gördüğümde, daha ilk video yayınlanmadan ticari rakamların çökeceğini biliyorum.</p>

      <h2>Aşırı tüketilmiş yüzler neden satış yapamaz?</h2>
      <p>Her yerde görünen bir içerik üreticisi satış gücünü iki öngörülebilir nedenle kaybeder:</p>

      <p><strong>1. Reklam panosu körlüğü:</strong> Aynı yüz bir ayda cilt bakımı, banka, atıştırmalık ve GSM operatörü dahil on kampanyada göründüğünde, izleyiciler o kişiyi belirli bir zevkle ilişkilendirmeyi bırakır. Görsel duvar kağıdına dönüşürler. İnsanlar klibi on saniye izler ve bir saat sonra hangi ruj markasının ödeme yaptığını hatırlayamaz.</p>

      <p><strong>2. Sıfır DNA eşleşmesi:</strong> Bir içerik üreticisi kitlesini gürültülü magazin tartışmalarıyla veya genel komediyle topladıysa, onu minimalist bir klinik cilt bakımı kampanyasına koymak iki tarafı da bozar. Takipçileri 90 dolarlık klinik serum almaz; markanın mevcut müşterileri ise şirketin standartlarını neden düşürdüğünü sorgular.</p>

      <blockquote>"Aynı içerik üreticisi bu ay zaten dört reklam panosundaysa, beşinci için ödeme yapmak sadece kafa karışıklığı satın alır."</blockquote>

      <h2>Sözleşme imzalamadan önce marka uyumunu nasıl denetliyorum?</h2>
      <p>Bir kozmetik veya yaşam tarzı iş birliğini onaylamadan önce dört kontrol yapıyorum:</p>
      <ul>
        <li><strong>Son 90 günün reklamlarını çıkarın:</strong> İçerik üreticisinin son çeyrekte tanıttığı her markayı listeleyin. Doğrudan bir rakiple veya birbiriyle alakasız dörtten fazla kategoriyle çalıştıysa masadan kalkın.</li>
        <li><strong>Estetik ve fiyat katmanını eşleştirin:</strong> Klinik markaları içerik maddelerine odaklanan uzmanlarla, renkli kitle kozmetiğini ise yüksek enerjili makyaj sanatçılarıyla eşleştirin.</li>
        <li><strong>Kategorinizde münhasırlık (exclusivity) satın alın:</strong> Kampanyadan sonra en az altı ay boyunca rakip güzellik markalarını tanıtmasını sözleşmeyle engelleyin.</li>
        <li><strong>Organik geçmişe bakın:</strong> Herhangi bir marka para teklif etmeden önce de sizin ürün kategoriniz hakkında konuşan insanlarla çalışın.</li>
      </ul>
    `
  },
  "satisfaction-as-system-outcome": {
    title: "Kullanıcının İşini Hızla Çözmek Sitede Kalma Süresini Neden Yener?",
    excerpt: "Alıcının sorusunu otuz saniyede yanıtlayan bir ürün sayfası, onu on dakika boyunca sayfada hapseden karmaşık bir sayfadan çok daha fazla sadakat yaratır.",
    date: "27 Ara 2025",
    content: `
      <p>Modern, reklam dolu bir yemek blogunda tarif aramakla Google'da uçuş durumu sorgulamayı karşılaştırın. Yemek blogunda kaç gram un kullanacağınızı bulmak için 1.500 kelimelik çocukluk anılarını kaydırır ve dört video pop-up'ı kapatırsınız. "Sitede kalma süreniz" dört dakikadır ve siteden nefret edersiniz. Google'da ise iki saniyede "Zamanında, Kapı B4" bilgisini görür, sekmeyi kapatır ve yarın tekrar gelirsiniz.</p>

      <p>Standart analiz panelleri yüksek oturum süresi için yemek blogunu över. Gerçekte ise müşteriyi iki saniyelik net yanıt kazanmıştır.</p>

      <h2>Yarım kalan işler neden müşteri kaybettirir?</h2>
      <p>Psikolog Bluma Zeigarnik 1920'lerde tamamlanmamış görevlerin zihinsel gerilim yarattığını gösterdi. Bir yazılım aracı veya alışveriş akışı insanları havada bıraktığında, siparişin geçip geçmediğinden emin olamadıklarında, hangi seçeneğin uygun olduğunu anlayamadıklarında veya sonsuz öneriler arasında boğulduklarında siteden hafif bir baş ağrısıyla ayrılırlar.</p>

      <blockquote>"Sitede kalma süresi çoğu zaman kullanıcınızın sitenizi ne kadar sevdiğini değil, kafasının ne kadar karıştığını ölçer."</blockquote>

      <h2>Temiz bir kapanış tasarlamanın dört yolu</h2>
      <p>Bir ürün veya içerik yolculuğunu incelerken kullanıcının işini temizce bitirmesini sağlayan dört unsura bakıyorum:</p>
      <ul>
        <li><strong>Cevabı en üste koyun:</strong> Fiyatı, tarif ölçülerini veya durum bilgisini kaydırmaya zorlamadan ilk ekranda verin.</li>
        <li><strong>Net bir ilerleme çubuğu gösterin:</strong> Kayıt veya ödeme akışı dört adımdan oluşuyorsa "Adım 2 / 4" şeklinde gösterin ki kullanıcı bitiş çizgisinin yakın olduğunu bilsin.</li>
        <li><strong>Net bir onay özeti gönderin:</strong> Biri satın alma veya rezervasyon yaptıktan hemen sonra bundan sonra ne olacağını ve ne zaman teslim edileceğini özetleyin.</li>
        <li><strong>Satın alma bittikten sonra öneriyi durdurun:</strong> Biri kışlık mont satın aldıktan sonra ona kararından şüphe ettirecek on iki kışlık mont daha göstermeyi bırakın.</li>
      </ul>
    `
  },
  "completion-vs-engagement": {
    title: "En İyi Dijital Ürünlerin Neden Bir Bitiş Çizgisi Vardır?",
    excerpt: "Wordle ve NYT Crossword, oyuncuya sonsuz akış dayatmak yerine 'bugünlük bitti' diyerek devasa abonelik alışkanlıkları kurdu.",
    date: "26 Ara 2025",
    content: `
      <p>New York Times 2022'de Wordle'ı satın aldığında, milyonlarca oyuncu her sabah üç dakika süren beş harfli tek bir kelime oyununu oynamak için giriş yapıyordu. Kelimeyi bildiğiniz anda ekran istatistiklerinizi gösteriyor ve bir sonraki bulmaca için gece yarısını beklemenizi söylüyordu. "Tekrar Oyna" butonu yoktu.</p>

      <p>O kesin duruş, basit bir tarayıcı oyununu abonelik tutundurmada (retention) onlarca milyon dolar değerinde günlük bir alışkanlığa dönüştürdü.</p>

      <h2>Sonsuz akışlar nitelikli kitleyi neden tüketir?</h2>
      <p>Sonu gelmeyen akışlar insana koca bir paket ucuz patates cipsini bitirmiş gibi hissettirir. Paket açık olduğu için elinizi uzatmaya devam edersiniz ve bittiğinde mideniz bulanır. Nitelikli ürünler her zaman sınır kullanmıştır. Kitabın bölümleri vardır. Tadım menüsünün servis sırası vardır. Derginin arka kapağı vardır.</p>

      <p>Oturumu kullanıcı hala zindeyken bitirmek, yarın sabah uygulamanızı açmayı iple çekmesini sağlar.</p>

      <blockquote>"Müşteriyi %10 daha fazlasını isterken bırakmak, sizden bıkana kadar içeride tutmaktan çok daha karlıdır."</blockquote>

      <h2>Bitiş çizgisi eklemenin dört yolu</h2>
      <p>Bir bülten, içerik platformu veya abonelik uygulaması yönetiyorsanız net sınırlar eklemeyi test edin:</p>
      <ul>
        <li><strong>Sabit bir günlük veya haftalık sayı yayınlayın:</strong> Okurlara seçilmiş beş madde verin ve en alta net bir "Bugünlük her şeyi tamamladınız" mesajı koyun.</li>
        <li><strong>Uzun programları kısa kilometre taşlarına bölün:</strong> 40 saatlik bir eğitimi, her biri tek bir metro yolculuğunda bitebilecek 20 dakikalık modüllere ayırın.</li>
        <li><strong>Ciddi içeriklerde otomatik oynatmayı kaldırın:</strong> Bir sonraki videoyu yüzüne çarpmadan önce okurun veya izleyicinin az önce bitirdiği şeyin üzerinde on saniye düşünmesine izin verin.</li>
        <li><strong>Tamamlanan hedefleri spam yapmadan kutlayın:</strong> Kullanıcı haftalık hedefini bitirdiğinde bunu onaylayın ve uygulamayı huzurla kapatmasına izin verin.</li>
      </ul>
    `
  },
  "nash-equilibrium-marketing": {
    title: "Markalar Birbirini Kopyalayan Kategorilerden Nasıl Çıkar?",
    excerpt: "Dört telekom veya banka web sitesini yan yana koyun; aynı fiyatları ve aynı vaatleri görürsünüz. Kazanmak için kategorinin yarıştığı ekseni değiştirmek gerekir.",
    date: "25 Ara 2025",
    content: `
      <p>Aynı ülkedeki en büyük dört telekom operatörünün veya dört perakende bankasının ana sayfalarını açın. Yan yana koyup logoları kapatın. Hepsi aynı gülümseyen stok fotoğrafları, birbirinden 1 Euro farklı üç fiyat paketini ve "sizin etrafınızda şekillenen kolaylık" vaat eden aynı başlığı kullanır.</p>

      <p>John Nash rakiplerin neden bu çıkmaza girdiğini matematiksel olarak göstermişti. Her marka diğerlerini o kadar yakından izler ki kimse ilk adımı atmaya cesaret edemez ve herkes karlı bir vasatlığa razı olur.</p>

      <h2>Lideri kopyalamak neden çalışmaz?</h2>
      <p>Beş marka aynı özellik listesini kopyalayıp birbirinin reklam bütçesini eşitlediğinde, müşteri edinme maliyetleri (CAC) beşi için de yükselir. Alıcılar aradaki farkı göremediği için o hafta hangisi 20 dolar indirim veriyorsa onu seçer.</p>

      <blockquote>"Logonuzu ana rakibinizin logosuyla değiştirdiğinizde reklam hala anlamlı duruyorsa, medya bütçenizi çöpe atıyorsunuz demektir."</blockquote>

      <h2>Kategori çıkmazını kırmanın dört yolu</h2>
      <p>Kalabalık bir kategoriden sıyrılan şirketler sektörün standart kontrol listesinde yarışmayı reddeder:</p>
      <ul>
        <li><strong>Fiyatlandırma birimini değiştirin:</strong> Film kiralama dükkanları gecikme cezalarını ana gelir kalemi yapmışken, Netflix gecikme cezasını tamamen kaldırdı ve sabit aylık abonelik kesti.</li>
        <li><strong>Hız kazanmak için özellik eksiltin:</strong> Sadece kurumsal müşterilerin %2'sinin kullandığı on şişkin özelliği atın ve ana işi on kat daha hızlı yapın.</li>
        <li><strong>Kalabalık olmayan bir kanal sahiplenin:</strong> Tıklaması 40 dolardan aynı 50 Google kelimesine teklif vermek yerine, rakiplerinizin bir gecede kopyalayamayacağı niş bir medya alanı veya ücretsiz araç kurun.</li>
        <li><strong>Sektör sırrını satış argümanınız yapın:</strong> Sektördeki diğer tüm oyuncuların arkasına saklandığı maliyet dökümünü veya gizli ücretleri şeffafça yayınlayın.</li>
      </ul>
    `
  },
  "attribution-blueprint": {
    title: "Çerezler Olmadan Pazarlama Etkisi Nasıl Ölçülür?",
    excerpt: "Uygulamalar arası piksel takibi iOS 14.5 ile kırıldı. Bölgesel holdout testleri, ödeme anketleri ve medya karması modellemesiyle gerçek geliri ölçmek.",
    date: "23 Ara 2025",
    content: `
      <p>2021 yılında Apple, iOS 14.5 güncellemesini yayınladı ve iPhone kullanıcılarının uygulamalar arası takibi tek dokunuşla kapatmasına izin verdi. Kullanıcıların %80'inden fazlası "Uygulamaya Takip Etmemesini Söyle" seçeneğine bastı. Bir gecede binlerce performans pazarlamacısı Facebook reklam panellerindeki raporlanan dönüşümlerin yarısının buharlaştığını gördü.</p>

      <p>Alıcılar ortadan kaybolmamıştı. Sadece gözetim yanılsaması kırılmıştı.</p>

      <h2>Tek temaslı takip neden her zaman yanlıştı?</h2>
      <p>Gizlilik kuralları sıkılaşmadan önce bile piksel takibi, müşterinin kararının cetvelle çizilmiş düz bir çizgide izlenebileceğini varsayıyordu. Gerçekte ise alıcınız sizi Slack'te bir iş arkadaşından duydu, arabada bir podcast sunucusundan dinledi, telefonunda bir Reddit tartışması okudu ve iki hafta sonra iş bilgisayarından satın aldı.</p>

      <p>Hiçbir takip pikseli o Slack mesajını veya araba yolculuğunu görmedi.</p>

      <h2>Bugün kullandığım dört parçalı ölçüm kurgusu</h2>
      <p>Platform piksellerinin kendi sınav kağıtlarını okumasına güvenmek yerine dört yöntemi birleştiriyorum:</p>
      <ol>
        <li><strong>Bölgesel kontrol (Geo holdout) testleri:</strong> Bir kanalı dört hafta boyunca üç şehirde kapatırken eşleşen diğer üç şehirde açık tutun, ardından toplam sipariş farkını ölçün.</li>
        <li><strong>Ödeme anketleri:</strong> Her yeni alıcıya seçenekleri rastgele sıralanmış olarak "Bizi ilk nerede duydunuz?" diye sorun; böylece tıklama izi bırakmayan podcast, kulaktan kulağa ve içerik üreticisi etkilerini yakalayın.</li>
        <li><strong>Pazarlama Karması Modellemesi (MMM):</strong> 18 ila 24 aylık dönemde kanal bazlı haftalık harcamaları toplam ciro ve organik arama hacmiyle karşılaştıran regresyon modelleri çalıştırın.</li>
        <li><strong>Toplam MER (Pazarlama Verimlilik Oranı) sınırları:</strong> Her hafta toplam ciroyu toplam pazarlama harcamasına bölün ki kanal yöneticileri toplam kar marjı düşerken sahte zaferler ilan edemesin.</li>
      </ol>
    `
  },
  "behavioral-architecture": {
    title: "Varsayılan Seçenekler (Defaults) Alıcı Davranışını Nasıl Şekillendirir?",
    excerpt: "Varsayılan olarak bağışçı olunan ülkelerde organ bağışı %90'a çıkarken, form doldurulan ülkelerde %20'de kalır. Fiyat ve form varsayılanlarını doğru kurmak.",
    date: "22 Ara 2025",
    content: `
      <p>Avusturya'da vatandaşların %90'ından fazlası kayıtlı organ bağışçısıdır. Sınırın hemen ötesindeki Almanya'da ise bu oran on yıllarca %20'nin altında kaldı.<sup id="fnref2" class="footnote-ref"><a href="#fn2">2</a></sup> Avusturyalılar Almanlardan beş kat daha yardımsever değil. Avusturya, kutucuğu işaretlemediğiniz sürece varsayılan olarak bağışçı olduğunuz (opt-out) bir form kullanıyor; Almanya ise katılmak için kutucuğu işaretlemeniz gereken (opt-in) bir form kullanıyordu.</p>

      <p>İnsanların çoğu sayfayı açtığında hangi kutucuk seçiliyse onunla devam eder.</p>

      <h2>Varsayılan ayarlar iknayı neden yener?</h2>
      <p>Müşterinin önüne koyduğunuz her ekran, daha tek bir kelime okunmadan önce bazı seçimler yapar. Hangi paketin orta sütunda durduğu, faturalandırmanın varsayılan olarak yıllık mı yoksa aylık mı geldiği, "daha fazla göster"e tıklamadan önce kaç seçeneğin göründüğü. Fiyatlandırma sayfasındaki yedi seçenek alıcıyı dondurur; iki veya üç net paket ise on saniyede karar vermesini sağlar.</p>

      <blockquote>"İnsanlar nadiren tüm seçenekleri okur. Önlerine koyduğunuz en kolay mantıklı yolu seçerler."</blockquote>

      <h2>Dürüst varsayılanlar kurmanın dört yolu</h2>
      <p>İyi kurgulanmış seçim ekranları, müşterinin altı ay sonra da memnun kalacağı seçeneği bulmasına yardımcı olur:</p>
      <ul>
        <li><strong>Alıcıların %70'ine uyan paketi önceden seçin:</strong> Herkesi en pahalı kurumsal pakete itmek yerine, en başarılı müşterilerinizin gerçekten kullandığı paketi öne çıkarın.</li>
        <li><strong>Seçenek kalabalığını kesin:</strong> Ana ekrandaki fiyat ve ürün varyasyonlarını üç veya dört seçenekle sınırlayın; gelişmiş ayarları ikincil bir sekmenin arkasına koyun.</li>
        <li><strong>Kalıcı işlemlere onay duraksaması ekleyin:</strong> Hesap silme veya iadesiz toplu sipariş verme adımlarına tek ve net bir onay sorusu koyun ki kullanıcılar pahalı hatalar yapmasın.</li>
        <li><strong>Şeffaflığı varsayılan yapın:</strong> Varsayılan ayarları asla insanları niyet etmedikleri tekrarlayan ödemelerin içine sokmak için kullanmayın.</li>
      </ul>

      <hr />
      <section class="footnotes">
      <ol>
      <li id="fn2">Johnson, E. J., & Goldstein, D. (2003). "Do Defaults Save Lives?" Science, ve Thaler & Sunstein'ın "Nudge" (2008) çalışması. <a href="#fnref2">↩</a></li>
      </ol>
      </section>
    `
  },
  "algorithmic-growth": {
    title: "Ürün Odaklı Büyüme Döngüleri Reklam Hilelerini Nasıl Yener?",
    excerpt: "Ucuz reklam açıkları on sekiz ayda kapanır. Calendly ve SurveyMonkey gibi şirketler normal ürün kullanımını bir sonraki müşteriyi getirmek için nasıl kullanıyor?",
    date: "21 Ara 2025",
    content: `
      <p>Pazarlamacılar birkaç yılda bir yeni bir platformda ucuz bir açık bulur. 2012'de Facebook sayfa paylaşımlarıydı. 2016'da ucuz Instagram hikaye reklamlarıydı. 2020'de erken dönem TikTok organik erişimiydi. Her seferinde on sekiz ay içinde rakipler üşüşür, CPM'ler üçe katlanır ve tamamen o açığın üzerine kurulmuş şirketler duvara çarpar.</p>

      <p>Ucuz trafik kiralamak geçici bir indirimdir. Her kullanıcının bir sonraki kullanıcıyı getirdiği bir döngü kurmak ise kalıcı bir varlıktır.</p>

      <h2>Gerçek bir büyüme döngüsü nasıl çalışır?</h2>
      <p>SurveyMonkey veya Calendly'nin nasıl büyüdüğüne bakın. Bir kullanıcı kaydolur, bir takvim linki veya anket oluşturur ve bunu şirket dışından on kişiye gönderir. On alıcının tamamı toplantı ayarlarken aracın ne kadar temiz çalıştığını görür. İkisi kendi hesabını açar ve ertesi hafta yirmi kişiye daha link gönderir.</p>

      <p><strong>Yeni Kullanıcı &rarr; Ürünü Dışarıya Açık Kullanır &rarr; Dışarıdakiler Deneyimler &rarr; Yeni Kayıtlar</strong></p>

      <p>Ürününüzün müşteri tutundurma (retention) oranı birinci ayda sızdırıyorsa, huninin tepesine daha fazla reklam parası dökmek sadece nakdi daha hızlı yakar.</p>

      <h2>Bir büyüme döngüsünde kontrol ettiğim dört nokta</h2>
      <p>Reklam harcamasını artırmadan döngüyü hızlandırmak için dört noktayı ölçüyorum:</p>
      <ul>
        <li><strong>İlk değere ulaşma süresi:</strong> Yeni kayıt olan birinin ürün içinde ilk gerçek işini bitirmesi kaç dakika sürüyor?</li>
        <li><strong>Dış görünürlük:</strong> Normal ürün kullanımı doğal olarak üye olmayanların önüne bir link, rapor, rozet veya davet çıkarıyor mu?</li>
        <li><strong>Alıcı dönüşüm oranı:</strong> Paylaşılan bir linki veya dosyayı alan her 100 dış kullanıcıdan kaçı tıklayıp kendi hesabını oluşturuyor?</li>
        <li><strong>Kanal tavanı:</strong> Ücretli müşteri edinme hangi aylık harcamada azalan verime giriyor ve bütçeyi ne zaman ürün içi davetlere kaydırmalıyız?</li>
      </ul>

      <blockquote>"Huninin tepesindeki reklamlara bir dolar daha harcamadan önce birinci ay tutundurmasındaki (retention) sızıntıyı kapatın."</blockquote>
    `
  },
  "ethical-layer-persuasion": {
    title: "Yalın Dürüstlük Yapay Zeka Satış Mesajlarını Neden Yener?",
    excerpt: "Yapay zeka komutları kahvaltıdan önce on bin kişiselleştirilmiş soğuk e-posta gönderebiliyor. Alıcılar sentetik övgüleri filtreledikçe yalın dürüstlük kazanıyor.",
    date: "20 Ara 2025",
    content: `
      <p>Bu sabah iş e-postanızı açın; muhtemelen mezun olduğunuz üniversiteden, geçen Salı yazdığınız bir LinkedIn paylaşımından ve şirketinizin son iş ilanından bahseden üç soğuk satış e-postası göreceksiniz. Beş yıl önce o e-posta bir satış temsilcisinin on beş dakikalık araştırmasını gerektiriyor ve kibar bir yanıt alıyordu. Bugün bir yapay zeka komutu kahvaltıdan önce bunlardan on bin tanesini tarayıp gönderiyor ve herkes gördüğü anda siliyor.</p>

      <p>Kişiselleştirmeyi taklit etmek bedava hale geldiğinde, insanlar kişiselleştirilmiş övgülere güvenmeyi bırakır.</p>

      <h2>Gizli manipülasyon neden geri teper?</h2>
      <p>Alıcı, otomatik bir botun insan taklidi yaptığını veya sahte bir samimiyet kurmak için profil detaylarını kazıdığını fark ettiği anda gardını kalıcı olarak kaldırır. Bu ayın yanıt oranlarını şişirmek için sentetik mesajlar kullanan şirketler, tüm pazarı kendi alan adlarını görmezden gelecek şekilde eğitiyor.</p>

      <h2>Herkes yapay zeka kullanırken öne çıkmanın dört yolu</h2>
      <p>Otomatik mesajlar her kanalı doldururken ekiplere botların kolayca taklit edemeyeceği alanlara yüklenmelerini öneriyorum:</p>
      <ul>
        <li><strong>Otomatik araçları açıkça etiketleyin:</strong> Müşteri sitenizde bir yapay zeka asistanıyla konuşuyorsa bunu ilk satırda söyleyin ve tek tıklamayla gerçek bir insana bağlanma butonu koyun.</li>
        <li><strong>Şeffaf fiyatları ve sınırları yayınlayın:</strong> Gerçek fiyatlarınızı, sözleşme şartlarınızı ve ürününüzün bilinen sınırlarını web sitenizde açıkça yazın.</li>
        <li><strong>Kullanıcıların verilerini ve akışlarını kontrol etmesine izin verin:</strong> Müşterilere bir şeyin neden önerildiğini görebilecekleri ve istemedikleri takibi kapatabilecekleri basit bir ayarlar sayfası verin.</li>
        <li><strong>Doğrulanmış insan kanıtına yatırım yapın:</strong> Pazarlamanızın merkezine gerçek müşteri isimlerini, kurgusuz ürün inceleme videolarını ve yüz yüze etkinlikleri koyun.</li>
      </ul>

      <p>Sentetik övgülerle dolu bir pazarda, abartısız ve yalın gerçeği söylemek geriye kalan en keskin farktır.</p>
    `
  }
};

export function getLocalizedPost(post: Post, lang: Language): Post {
  if (lang === "en") return post;
  const tr = postsTr[post.slug];
  if (!tr) return post;
  return {
    ...post,
    title: tr.title,
    excerpt: tr.excerpt,
    date: tr.date,
    content: tr.content,
  };
}

