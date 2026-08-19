import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export function Manufacturing() {
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelectorAll<HTMLElement>('.parallax-bg');
      let offset = window.pageYOffset;
      parallax.forEach(function (bg) {
        bg.style.backgroundPositionY = (offset * 0.7) + "px";
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      {/* Hero Section with Industrial Parallax */}
      <header className="relative h-[600px] md:h-[819px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 parallax-bg opacity-40 brightness-50" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=800&auto=format&fit=crop')" }}></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block bg-primary-container text-on-primary-container px-6 py-1 rounded-full font-label-bold text-label-bold mb-6">{t("How We Make It", "हम कैसे बनाते हैं")}</span>
          <h1 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-primary mb-6 leading-tight">{t("Mastery of ", "महारत ")}<span className="text-secondary">{t("Kachi Ghani", "कच्ची घानी की")}</span></h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">{t("We mix old traditions with new science. See how we use wood pressing to make the best oil for you.", "हम पुरानी परंपराओं को नए विज्ञान के साथ मिलाते हैं। देखें कि हम आपके लिए बेहतरीन तेल बनाने के लिए लकड़ी दबाने का उपयोग कैसे करते हैं।")}</p>
        </div>
      </header>

      {/* The "From Seed to Soul" Timeline */}
      <section className="py-20 md:py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-20">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t("Oils: From Seed to Soul", "तेल: बीज से आत्मा तक")}</h2>
            <div className="w-24 h-1 bg-secondary-container rounded-full"></div>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant/30 transform -translate-x-1/2"></div>
            {/* Steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Seed Selection", "बीज चयन")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("We source only non-GMO, organic seeds from heritage farms across the golden plains, ensuring the DNA of purity in every drop.", "हम सुनहरे मैदानों के पार विरासत वाले खेतों से केवल गैर-जीएमओ, जैविक बीज प्राप्त करते हैं, हर बूंद में शुद्धता का डीएनए सुनिश्चित करते हैं।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">psychology_alt</span>
                </div>
                <div className="w-full pl-20 md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Seed Selection" src="/oil1.jpeg" />
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center group">
                <div className="w-full pl-20 md:w-1/2 md:pl-20 mb-8 md:mb-0 text-left">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Pneumatic Cleaning", "वायवीय सफाई")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("Triple-stage air filtration removes dust and impurities without moisture, preserving the seed's natural moisture balance.", "ट्रिपल-स्टेज एयर फिल्ट्रेशन नमी के बिना धूल और अशुद्धियों को दूर करता है, बीज के प्राकृतिक नमी संतुलन को बनाए रखता है।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-secondary text-on-secondary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">air</span>
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Pneumatic Cleaning" src="/oil2.jpeg" />
                  </div>
                </div>
              </div>
              {/* Step 3: Cold Press Extraction */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Cold Press Extraction", "कोल्ड प्रेस निष्कर्षण")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("Our traditional wooden 'Kachi Ghani' rotates at low RPM, ensuring temperatures never exceed 45°C to protect vital nutrients.", "हमारी पारंपरिक लकड़ी की 'कच्ची घानी' कम आरपीएम पर घूमती है, यह सुनिश्चित करती है कि महत्वपूर्ण पोषक तत्वों की रक्षा के लिए तापमान कभी भी 45 डिग्री सेल्सियस से अधिक न हो।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">settings_slow_motion</span>
                </div>
                <div className="w-full pl-20 md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Cold Press Extraction" src="/oil3.jpeg" />
                  </div>
                </div>
              </div>
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center group">
                <div className="w-full pl-20 md:w-1/2 md:pl-20 mb-8 md:mb-0 text-left">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Natural Filtration", "प्राकृतिक निस्पंदन")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("No chemicals. No solvents. Just pure gravity and cotton filters to achieve crystalline clarity without sacrificing the pungent aroma.", "कोई रसायन नहीं। कोई सॉल्वैंट्स नहीं। तीखी सुगंध का त्याग किए बिना क्रिस्टलीय स्पष्टता प्राप्त करने के लिए बस शुद्ध गुरुत्वाकर्षण और कपास फिल्टर।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-secondary text-on-secondary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">filter_alt</span>
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Natural Filtration" src="/oil4.jpeg" />
                  </div>
                </div>
              </div>
              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Quality Testing", "गुणवत्ता परीक्षण")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("Every batch undergoes 18 rigorous lab tests for peroxide value, iodine value, and nutrient density in our ISO-certified lab.", "हमारे आईएसओ-प्रमाणित प्रयोगशाला में पेरोक्साइड मूल्य, आयोडीन मूल्य और पोषक तत्व घनत्व के लिए हर बैच 18 कठोर प्रयोगशाला परीक्षणों से गुजरता है।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">biotech</span>
                </div>
                <div className="w-full pl-20 md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Quality Testing" src="/oil5.jpeg" />
                  </div>
                </div>
              </div>
              {/* Step 6 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center group">
                <div className="w-full pl-20 md:w-1/2 md:pl-20 mb-8 md:mb-0 text-left">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Aseptic Packaging", "सड़न रोकनेवाला पैकेजिंग")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("Packed in UV-protected glass bottles to prevent oxidation and ensure the oil remains fresh from our facility to your kitchen.", "ऑक्सीकरण को रोकने के लिए यूवी-संरक्षित कांच की बोतलों में पैक किया गया और यह सुनिश्चित किया गया कि तेल हमारी सुविधा से आपकी रसोई तक ताजा रहे।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-secondary text-on-secondary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">inventory_2</span>
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Aseptic Packaging" src="/oil6.jpeg" />
                  </div>
                </div>
              </div>
              {/* Step 7 */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Global Delivery", "वैश्विक वितरण")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("Climate-controlled logistics ensure that the delicate chemical composition of our oils is preserved throughout the journey.", "जलवायु-नियंत्रित रसद सुनिश्चित करती है कि हमारे तेलों की नाजुक रासायनिक संरचना पूरी यात्रा में संरक्षित रहे।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">local_shipping</span>
                </div>
                <div className="w-full pl-20 md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Global Delivery" src="/oil7.jpeg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-20">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t("Mahua: From Forest to Feast", "महुआ: जंगल से दावत तक")}</h2>
            <div className="w-24 h-1 bg-secondary-container rounded-full"></div>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant/30 transform -translate-x-1/2"></div>
            {/* Steps */}
            <div className="space-y-24">

              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Wild Foraging", "जंगली फोरेजिंग")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("Our tribal partners carefully handpick fallen Mahua flowers from deep within the forest reserves before dawn.", "हमारे आदिवासी साथी भोर से पहले वन अभ्यारण्यों के भीतर से गिरे हुए महुआ के फूलों को सावधानीपूर्वक चुनते हैं।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">park</span>
                </div>
                <div className="w-full pl-20 md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Wild Foraging" src="/mahua1.png" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center group">
                <div className="w-full pl-20 md:w-1/2 md:pl-20 mb-8 md:mb-0 text-left">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Sun Drying", "धूप में सुखाना")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("The fresh flowers are naturally sun-dried on clean beds to preserve their nutritional integrity and rich flavor profile.", "ताजे फूलों को उनके पोषण संबंधी अखंडता और समृद्ध स्वाद प्रोफ़ाइल को संरक्षित करने के लिए साफ बिस्तरों पर प्राकृतिक रूप से धूप में सुखाया जाता है।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-secondary text-on-secondary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">light_mode</span>
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Sun Drying" src="/mahua2.jpeg" />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Traditional Extraction", "पारंपरिक निष्कर्षण")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("Using time-honored tribal methods, the dried flowers are processed without chemicals to extract the pure Mahua essence.", "समय-सम्मानित आदिवासी विधियों का उपयोग करते हुए, सूखे फूलों को शुद्ध महुआ सार निकालने के लिए रसायनों के बिना संसाधित किया जाता है।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">agriculture</span>
                </div>
                <div className="w-full pl-20 md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Traditional Extraction" src="/mahua3.jpeg" />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center group">
                <div className="w-full pl-20 md:w-1/2 md:pl-20 mb-8 md:mb-0 text-left">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Cold Filtration", "कोल्ड निस्पंदन")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("The extract undergoes a gravity-fed cold filtration process to remove impurities while retaining beneficial enzymes.", "अर्क लाभकारी एंजाइमों को बनाए रखते हुए अशुद्धियों को दूर करने के लिए गुरुत्वाकर्षण-आधारित कोल्ड निस्पंदन प्रक्रिया से गुजरता है।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-secondary text-on-secondary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">filter_alt</span>
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Cold Filtration" src="/mahua4.jpeg" />
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Quality Assurance", "गुणवत्ता आश्वासन")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("Each batch is tested for purity, moisture content, and authentic aroma to meet our stringent standards.", "प्रत्येक बैच का हमारे कड़े मानकों को पूरा करने के लिए शुद्धता, नमी सामग्री और प्रामाणिक सुगंध के लिए परीक्षण किया जाता है।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">verified</span>
                </div>
                <div className="w-full pl-20 md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Quality Assurance" src="/mahua5.jpeg" />
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center group">
                <div className="w-full pl-20 md:w-1/2 md:pl-20 mb-8 md:mb-0 text-left">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Sealed Freshness", "सीलबंद ताजगी")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("Packaged in eco-friendly bottles, ensuring the Mahua's natural goodness is delivered straight to your home.", "पर्यावरण के अनुकूल बोतलों में पैक किया गया, यह सुनिश्चित करते हुए कि महुआ की प्राकृतिक अच्छाई सीधे आपके घर तक पहुंचाई जाए।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-secondary text-on-secondary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">inventory_2</span>
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Sealed Freshness" src="/mahua6.jpeg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-20">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t("Nectar & Honey: Pure & Untouched", "नेक्टर और शहद: शुद्ध और अछूता")}</h2>
            <div className="w-24 h-1 bg-secondary-container rounded-full"></div>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant/30 transform -translate-x-1/2"></div>
            {/* Steps */}
            <div className="space-y-24">

              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Deep Forest Sourcing", "गहरे जंगल की सोर्सिंग")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("We source our honey from wild bee colonies thriving in untouched, pesticide-free forest environments.", "हम अपना शहद अछूते, कीटनाशक मुक्त जंगल के वातावरण में पनपने वाली जंगली मधुमक्खी कॉलोनियों से प्राप्त करते हैं।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">forest</span>
                </div>
                <div className="w-full pl-20 md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Deep Forest Sourcing" src="/honey1.jpeg" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center group">
                <div className="w-full pl-20 md:w-1/2 md:pl-20 mb-8 md:mb-0 text-left">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Sustainable Harvesting", "सतत संचयन")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("Skilled tribal honey gatherers use ethical harvesting methods that protect the bees and their natural habitat.", "कुशल आदिवासी शहद इकट्ठा करने वाले नैतिक संचयन विधियों का उपयोग करते हैं जो मधुमक्खियों और उनके प्राकृतिक आवास की रक्षा करते हैं।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-secondary text-on-secondary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">eco</span>
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Sustainable Harvesting" src="/honey2.jpeg" />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Raw & Unheated", "कच्चा और बिना गरम किया हुआ")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("Our honey is never pasteurized or subjected to high heat, preserving all natural pollens, enzymes, and antioxidants.", "हमारा शहद कभी पाश्चुरीकृत या उच्च गर्मी के अधीन नहीं होता है, जो सभी प्राकृतिक पराग, एंजाइम और एंटीऑक्सिडेंट को संरक्षित करता है।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">thermostat</span>
                </div>
                <div className="w-full pl-20 md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Raw & Unheated" src="/honey3.jpeg" />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center group">
                <div className="w-full pl-20 md:w-1/2 md:pl-20 mb-8 md:mb-0 text-left">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Natural Straining", "प्राकृतिक छानना")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("The raw honey is gently passed through natural cloth filters to remove beeswax and debris without chemical processing.", "रासायनिक प्रसंस्करण के बिना मोम और मलबे को हटाने के लिए कच्चे शहद को प्राकृतिक कपड़े के फिल्टर से धीरे से गुजारा जाता है।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-secondary text-on-secondary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">opacity</span>
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Natural Straining" src="/honey4.jpeg" />
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Purity Testing", "शुद्धता परीक्षण")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("Every batch is verified in our labs to ensure zero added sugars, adulterants, or artificial flavors.", "शून्य अतिरिक्त शर्करा, मिलावट या कृत्रिम स्वादों को सुनिश्चित करने के लिए हमारे प्रयोगशालाओं में हर बैच का सत्यापन किया जाता है।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">biotech</span>
                </div>
                <div className="w-full pl-20 md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Purity Testing" src="/honey5.jpeg" />
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center group">
                <div className="w-full pl-20 md:w-1/2 md:pl-20 mb-8 md:mb-0 text-left">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("Glass Bottling", "ग्लास बॉटलिंग")}</h3>
                  <p className="text-on-surface-variant font-body-md">{t("We use premium glass jars for packaging to prevent contamination and maintain the honey's pristine quality.", "हम संदूषण को रोकने और शहद की प्राचीन गुणवत्ता को बनाए रखने के लिए पैकेजिंग के लिए प्रीमियम कांच के जार का उपयोग करते हैं।")}</p>
                </div>
                <div className="absolute left-[31px] md:left-1/2 w-16 h-16 bg-secondary text-on-secondary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-[15deg]">kitchen</span>
                </div>
                <div className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
                    <img className="w-full h-full object-cover" alt="Glass Bottling" src="/honey6.jpeg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kachi Ghani vs. Refined Section */}
      <section className="py-20 md:py-32 bg-surface-container">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-[40px] overflow-hidden aspect-square shadow-2xl">
                <img className="w-full h-full object-cover" alt="Kachi Ghani comparison" src="/kacchighani.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <h4 className="font-headline-md text-headline-md mb-2">{t("The Texture of Truth", "सच्चाई की बनावट")}</h4>
                  <p className="font-body-md opacity-90">{t("Notice the viscosity. Pure cold-pressed oil clings to the soul.", "चिपचिपाहट पर ध्यान दें। शुद्ध कोल्ड-प्रेस्ड तेल आत्मा से चिपक जाता है।")}</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8">{t("Why ", "क्यों ")}<span className="text-secondary">{t("Kachi Ghani?", "कच्ची घानी?")}</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined">thermostat</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2">{t("Zero Thermal Damage", "शून्य तापीय क्षति")}</h4>
                    <p className="text-on-surface-variant font-body-md">{t("Refined oils are heated to 200°C, destroying antioxidants. Our wooden press maintains a cool 40°C, locking in Vit E and Omega fats.", "परिष्कृत तेलों को 200 डिग्री सेल्सियस तक गर्म किया जाता है, जिससे एंटीऑक्सिडेंट नष्ट हो जाते हैं। हमारा लकड़ी का प्रेस विट ई और ओमेगा वसा में लॉक करते हुए, 40 डिग्री सेल्सियस ठंडा बनाए रखता है।")}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined">science</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2">{t("Solvent-Free Purity", "सॉल्वेंट-मुक्त शुद्धता")}</h4>
                    <p className="text-on-surface-variant font-body-md">{t("Industrial extraction uses Hexane (a petroleum derivative). We use nothing but the pressure of heritage wood on organic seed.", "औद्योगिक निष्कर्षण हेक्सेन (एक पेट्रोलियम व्युत्पन्न) का उपयोग करता है। हम जैविक बीजों पर विरासत की लकड़ी के दबाव के अलावा कुछ भी उपयोग नहीं करते हैं।")}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                    <span className="material-symbols-outlined">eco</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2">{t("Active Bio-Markers", "सक्रिय बायो-मार्कर")}</h4>
                    <p className="text-on-surface-variant font-body-md">{t("Our process preserves the 'mustard signal'—sinigrin and myrosinase—that refined processes filter away as 'impurities'.", "हमारी प्रक्रिया 'सरसों संकेत' - सिनिग्रिन और मायरोसिनेस - को संरक्षित करती है, जिसे परिष्कृत प्रक्रियाएं 'अशुद्धियों' के रूप में फ़िल्टर करती हैं।")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Art of Laddoo Making Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t("The Art of Laddoo Making", "लड्डू बनाने की कला")}</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">{t("Experience the traditional process of crafting our authentic Mahua Laddoos, packed with nutrition and heritage.", "पोषण और विरासत से भरपूर हमारे प्रामाणिक महुआ लड्डू बनाने की पारंपरिक प्रक्रिया का अनुभव करें।")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-3xl overflow-hidden shadow-lg group">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop" alt="Foraging" />
              </div>
              <div className="p-6">
                <span className="text-secondary font-label-bold mb-2 block">01</span>
                <h4 className="font-headline-md text-primary mb-2">{t("Foraging & Selection", "खोज और चयन")}</h4>
                <p className="text-on-surface-variant font-body-md text-sm">{t("We carefully handpick premium forest-grade Mahua flowers, ensuring only the finest blooms are selected.", "हम सावधानीपूर्वक प्रीमियम वन-ग्रेड महुआ के फूलों को चुनते हैं, यह सुनिश्चित करते हुए कि केवल बेहतरीन फूलों का चयन किया जाए।")}</p>
              </div>
            </div>
            <div className="glass-card rounded-3xl overflow-hidden shadow-lg group">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1627998687702-86ff548d8aab?q=80&w=800&auto=format&fit=crop" alt="Sun Drying" />
              </div>
              <div className="p-6">
                <span className="text-secondary font-label-bold mb-2 block">02</span>
                <h4 className="font-headline-md text-primary mb-2">{t("Sun-Drying", "धूप में सुखाना")}</h4>
                <p className="text-on-surface-variant font-body-md text-sm">{t("The flowers are naturally sun-dried on clean platforms to retain their medicinal properties and natural sweetness.", "फूलों को प्राकृतिक रूप से धूप में सुखाया जाता है ताकि उनके औषधीय गुणों और प्राकृतिक मिठास को बरकरार रखा जा सके।")}</p>
              </div>
            </div>
            <div className="glass-card rounded-3xl overflow-hidden shadow-lg group">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop" alt="Traditional Roasting" />
              </div>
              <div className="p-6">
                <span className="text-secondary font-label-bold mb-2 block">03</span>
                <h4 className="font-headline-md text-primary mb-2">{t("Slow Roasting", "धीमी भुनाई")}</h4>
                <p className="text-on-surface-variant font-body-md text-sm">{t("Ingredients are slow-roasted in pure cow ghee to enhance the aroma and bring out the deep, rich flavors.", "सुगंध को बढ़ाने और गहरे, समृद्ध स्वादों को बाहर लाने के लिए सामग्री को शुद्ध गाय के घी में धीरे-धीरे भुना जाता है।")}</p>
              </div>
            </div>
            <div className="glass-card rounded-3xl overflow-hidden shadow-lg group">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop" alt="Hand Rolling" />
              </div>
              <div className="p-6">
                <span className="text-secondary font-label-bold mb-2 block">04</span>
                <h4 className="font-headline-md text-primary mb-2">{t("Hand-Rolling", "हाथ से गोल करना")}</h4>
                <p className="text-on-surface-variant font-body-md text-sm">{t("Bound together with natural jaggery and nuts, each laddoo is carefully hand-rolled with love and tradition.", "प्राकृतिक गुड़ और मेवों के साथ बंधे, प्रत्येक लड्डू को प्यार और परंपरा के साथ सावधानीपूर्वक हाथ से गोल किया जाता है।")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Testing Bento Grid */}
      <section className="py-20 md:py-32 bg-surface-bright relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t("Precision Testing", "सटीक परीक्षण")}</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">{t("While our heart is traditional, our eyes are microscopic. Every batch is validated by modern pharmaceutical-grade standards.", "जबकि हमारा दिल पारंपरिक है, हमारी आंखें सूक्ष्म हैं। प्रत्येक बैच आधुनिक फार्मास्युटिकल-ग्रेड मानकों द्वारा मान्य है।")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-gutter h-auto md:h-[600px]">
            <div className="md:col-span-2 glass-card rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group">
              <img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" alt="Metric 01" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop" />
              <div className="relative z-10">
                <span className="text-secondary font-label-bold text-label-bold tracking-widest uppercase">{t("Metric 01", "मीट्रिक 01")}</span>
                <h4 className="font-headline-md text-headline-md text-primary mt-2">{t("Peroxide Value", "पेरोक्साइड मूल्य")}</h4>
                <p className="text-on-surface-variant mt-2">{t("Ensuring zero oxidation for maximum shelf life and peak freshness.", "अधिकतम शेल्फ जीवन और शिखर ताजगी के लिए शून्य ऑक्सीकरण सुनिश्चित करना।")}</p>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-on-primary-container text-3xl">verified</span>
              </div>
              <h5 className="font-headline-md text-headline-md text-primary">{t("ISO 9001", "आईएसओ 9001")}</h5>
              <p className="text-label-bold font-label-bold opacity-60">{t("CERTIFIED FACILITY", "प्रमाणित सुविधा")}</p>
            </div>
            <div className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">psychology</span>
              </div>
              <h5 className="font-headline-md text-headline-md text-secondary">{t("Aflatoxin", "एफ्लाटॉक्सिन")}</h5>
              <p className="text-label-bold font-label-bold opacity-60">{t("ZERO TOLERANCE", "शून्य सहिष्णुता")}</p>
            </div>
            <div className="glass-card rounded-3xl p-10 flex flex-col justify-end md:col-start-1 md:col-span-1">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">opacity</span>
              <h4 className="font-headline-md text-headline-md text-primary">{t("Iodine Value", "आयोडीन मूल्य")}</h4>
              <p className="text-on-surface-variant text-sm mt-2">{t("Standardizing the degree of unsaturation for heart-healthy balance.", "हृदय-स्वस्थ संतुलन के लिए असंतृप्ति की डिग्री को मानकीकृत करना।")}</p>
            </div>
            <div className="md:col-span-3 glass-card rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden bg-primary text-on-primary">
              <div className="relative z-10">
                <h4 className="font-display-lg-mobile text-display-lg-mobile mb-4">{t("Real-time Batch Tracking", "रीयल-टाइम बैच ट्रैकिंग")}</h4>
                <p className="max-w-xl opacity-90 font-body-lg">{t("Scan any bottle to view its specific lab report, harvest date, and press operator. Transparency is our highest ingredient.", "अपनी विशिष्ट प्रयोगशाला रिपोर्ट, फसल की तारीख और प्रेस ऑपरेटर को देखने के लिए किसी भी बोतल को स्कैन करें। पारदर्शिता हमारा सर्वोच्च घटक है।")}</p>
              </div>
              <button className="relative z-10 self-start mt-8 bg-on-primary text-primary px-10 py-4 rounded-full font-label-bold text-label-bold hover:bg-primary-fixed transition-colors">{t("Trace Your Bottle", "अपनी बोतल को ट्रेस करें")}</button>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
