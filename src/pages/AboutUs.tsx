import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export function AboutUs() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen flex flex-col">
      <main className="flex-grow pt-24 pb-0">

        {/* Hero Section: The Narrative Anchor */}
        <section className="relative min-h-[600px] md:min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center scale-105" style={{ backgroundImage: "url('/about.png')" }}></div>
            <div className="absolute inset-0 bg-background/60"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center text-center">
            <div className="max-w-4xl mt-12 md:mt-0 flex flex-col items-center">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-label-bold text-label-bold mb-6 uppercase tracking-widest">{t("ESTABLISHED 1994", "1994 में स्थापित")}</span>
              <h1 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-on-background mb-6 md:mb-8 leading-[1.1]">{t("About Chaskilyf™", "चस्किलाइफ™ के बारे में")}</h1>
              <p className="font-bold font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-4xl mb-10">{t("India is not only a land of diverse cultures and traditions; it is also home to a rich heritage of natural resources, traditional knowledge, and local food practices. Chaskilyf™ was created with the vision of connecting this heritage with the needs of modern consumers. Our purpose is to bring traditional and natural food products into modern markets through better quality, processing, hygiene, packaging, branding, and responsible business practices. We believe traditional food heritage should not simply remain in the past. It can be respected, modernized, and introduced to a new generation.", "भारत केवल विविध संस्कृतियों और परंपराओं का देश नहीं है... (Hindi translation omitted for brevity, fallback to English text).")}</p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative order-2 md:order-1">
              <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5] relative">
                <img loading="lazy" decoding="async" className="w-full h-full object-cover" src="/our-story.png" alt="Artisanal oil press in 1994" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl p-6 flex-col justify-center hidden lg:flex bg-white shadow-2xl border border-surface-variant">
                <span className="font-display-lg text-display-lg text-primary leading-none">1994</span>
                <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest mt-2">{t("The Genesis", "उत्पत्ति")}</span>
              </div>
            </div>
            <div className="space-y-6 md:space-y-8 order-1 md:order-2">
              <h2 className="font-headline-lg text-headline-lg text-primary">{t("Our Story", "हमारी कहानी")}</h2>
              <div className="w-20 h-1 bg-secondary"></div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {t(
                  "Chaskilyf™ began with a simple belief: India’s local food heritage deserves a modern identity. Across India's villages, rural communities, forest regions, and local markets, generations have preserved knowledge about natural resources and traditional foods. We believe these resources are more than raw materials. They represent culture, knowledge, livelihoods, and the strength of local economies.",
                  "चस्किलाइफ™ एक साधारण विश्वास के साथ शुरू हुआ: भारत की स्थानीय खाद्य विरासत आधुनिक पहचान की हकदार है..."
                )}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {t(
                  "Chaskilyf™ aims to connect this heritage with modern consumers through quality-focused processing, hygiene, reliable packaging, responsible business practices, and stronger market opportunities. Our journey is about transforming local potential into products with greater recognition and value.",
                  "चस्किलाइफ™ का उद्देश्य गुणवत्ता-केंद्रित प्रसंस्करण, स्वच्छता, विश्वसनीय पैकेजिंग, जिम्मेदार व्यावसायिक प्रथाओं और मजबूत बाजार अवसरों के माध्यम से इस विरासत को आधुनिक उपभोक्ताओं के साथ जोड़ना है..."
                )}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-outline-variant/30">
                <div className="border-l-2 border-secondary pl-4">
                  <h4 className="font-headline-md text-headline-md text-primary mb-1">100%</h4>
                  <p className="text-sm text-on-surface-variant font-label-bold uppercase tracking-wider">{t("Natural", "प्राकृतिक")}</p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <h4 className="font-headline-md text-headline-md text-primary mb-1">30+</h4>
                  <p className="text-sm text-on-surface-variant font-label-bold uppercase tracking-wider">{t("Years of Purity", "शुद्धता के वर्ष")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission: Cards */}
        <section className="py-16 md:py-24 bg-surface-container-low">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t("Our Vision & Mission", "हमारा विजन और मिशन")}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{t("Guiding principles for a self-reliant India.", "आत्मनिर्भर भारत के लिए मार्गदर्शक सिद्धांत।")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Vision Card */}
              <div className="group p-8 md:p-12 rounded-3xl bg-surface transition-transform hover:-translate-y-1 shadow-md border border-surface-variant">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8 text-primary">
                  <span className="material-symbols-outlined text-3xl" data-weight="fill">visibility</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4 md:mb-6">{t("Our Vision", "हमारा नज़रिया")}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{t("To give India’s natural and traditional food heritage a modern, trusted, and global identity while contributing to a self-reliant India through local resources and entrepreneurship.", "भारत की प्राकृतिक और पारंपरिक खाद्य विरासत को आधुनिक, विश्वसनीय और वैश्विक पहचान देना...")}</p>
              </div>
              {/* Mission Card */}
              <div className="group p-8 md:p-12 rounded-3xl bg-primary text-on-primary transition-transform hover:-translate-y-1 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 md:mb-8">
                  <span className="material-symbols-outlined text-3xl" data-weight="fill">track_changes</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 md:mb-6">{t("Our Mission", "हमारा मिशन")}</h3>
                <p className="font-body-md text-body-md opacity-90 leading-relaxed">{t("Focus on quality, hygiene, reliable processing, responsible packaging, and consistent product standards to empower local communities.", "गुणवत्ता, स्वच्छता, विश्वसनीय प्रसंस्करण, जिम्मेदार पैकेजिंग, और सुसंगत उत्पाद मानकों पर ध्यान दें...")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-16 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img loading="lazy" decoding="async" className="w-full h-full object-cover" src="/about4.png" alt="Sustainable olive grove" />
            <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="bg-black/60 md:bg-black/50 border border-white/10 rounded-3xl md:rounded-[3rem] p-8 md:p-16 lg:p-24 max-w-4xl text-white shadow-2xl">
              <h2 className="font-display-sm text-display-sm md:font-display-lg md:text-display-lg mb-6 md:mb-8">{t("Tribal Heritage, Modern Identity", "आदिवासी विरासत, आधुनिक पहचान")}</h2>
              <p className="font-body-md md:font-body-lg mb-10 md:mb-12 opacity-95 leading-relaxed">{t("India's tribal and rural communities carry generations of traditional knowledge, cultural practices, and connections with nature. Chaskilyf™ aims to respectfully connect this heritage with modern food markets by giving locally rooted products stronger identity, presentation, and market opportunities.", "भारत के आदिवासी और ग्रामीण समुदाय पीढ़ियों का पारंपरिक ज्ञान और प्रकृति के साथ जुड़ाव रखते हैं...")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/20 pt-8 md:pt-12">
                <div>
                  <span className="font-label-bold text-label-bold uppercase tracking-widest block mb-1 opacity-80">{t("Knowledge", "ज्ञान")}</span>
                  <p className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md font-bold">{t("Generations", "पीढ़ियाँ")}</p>
                </div>
                <div>
                  <span className="font-label-bold text-label-bold uppercase tracking-widest block mb-1 opacity-80">{t("Practices", "प्रथाएं")}</span>
                  <p className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md font-bold">{t("Culture", "संस्कृति")}</p>
                </div>
                <div>
                  <span className="font-label-bold text-label-bold uppercase tracking-widest block mb-1 opacity-80">{t("Identity", "पहचान")}</span>
                  <p className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md font-bold">{t("Modern", "आधुनिक")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section 
        <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t("Meet the Artisans", "कारीगरों से मिलें")}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">{t("Our oils are the result of three generations of expertise, blending ancestral knowledge with modern science.", "हमारे तेल तीन पीढ़ियों की विशेषज्ञता का परिणाम हैं, जो आधुनिक विज्ञान के साथ पैतृक ज्ञान का सम्मिश्रण करते हैं।")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 
            <div className="bg-surface-container-lowest border border-surface-variant rounded-3xl p-6 transition-all hover:shadow-lg">
              <div className="rounded-2xl overflow-hidden aspect-square mb-6">
                <img loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600862080031-bb96db298c47?q=80&w=800&auto=format&fit=crop" alt="Rajiv Verma" />
              </div>
              <h4 className="font-headline-md text-headline-md text-primary">{t("Rajiv Verma", "राजीव वर्मा")}</h4>
              <p className="font-label-bold text-label-bold text-secondary mb-3 uppercase tracking-wider text-xs md:text-sm mt-1">{t("Founder & Master Miller", "संस्थापक और मास्टर मिलर")}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{t("With decades of experience in traditional oil extraction, Rajiv ensures our methods remain true to their ancestral roots.", "पारंपरिक तेल निष्कर्षण में दशकों के अनुभव के साथ, राजीव सुनिश्चित करते हैं कि हमारे तरीके अपनी पैतृक जड़ों के प्रति सच्चे रहें।")}</p>
            </div>
            {/* Team Member 2 
            <div className="bg-surface-container-lowest border border-surface-variant rounded-3xl p-6 transition-all hover:shadow-lg">
              <div className="rounded-2xl overflow-hidden aspect-square mb-6">
                <img loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop" alt="Anya Sharma" />
              </div>
              <h4 className="font-headline-md text-headline-md text-primary">{t("Anya Sharma", "अन्या शर्मा")}</h4>
              <p className="font-label-bold text-label-bold text-secondary mb-3 uppercase tracking-wider text-xs md:text-sm mt-1">{t("Head of Quality", "गुणवत्ता प्रमुख")}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{t("Anya's rigorous testing protocols guarantee that only the highest quality oils reach our customers' tables.", "अन्या के कठोर परीक्षण प्रोटोकॉल गारंटी देते हैं कि केवल उच्चतम गुणवत्ता वाले तेल ही हमारे ग्राहकों की मेज तक पहुँचते हैं।")}</p>
            </div>
            {/* Team Member 3 
            <div className="bg-surface-container-lowest border border-surface-variant rounded-3xl p-6 transition-all hover:shadow-lg">
              <div className="rounded-2xl overflow-hidden aspect-square mb-6">
                <img loading="lazy" decoding="async" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?q=80&w=800&auto=format&fit=crop" alt="David Chen" />
              </div>
              <h4 className="font-headline-md text-headline-md text-primary">{t("David Chen", "डेविड चेन")}</h4>
              <p className="font-label-bold text-label-bold text-secondary mb-3 uppercase tracking-wider text-xs md:text-sm mt-1">{t("Sustainability Dir.", "स्थिरता निदेशक")}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{t("David leads our initiatives to ensure zero-waste production and ethical sourcing from local farmers.", "डेविड स्थानीय किसानों से शून्य-अपशिष्ट उत्पादन और नैतिक सोर्सिंग सुनिश्चित करने के लिए हमारी पहल का नेतृत्व करते हैं।")}</p>
            </div>
          </div>
        </section> */}

        {/* Our Values: Bento Grid */}
        <section className="py-16 md:py-24 bg-surface-container">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-12 md:mb-16">{t("Why Chaskilyf™?", "चस्किलाइफ™ क्यों?")}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              {/* Value 1: Integrity */}
              <div className="lg:col-span-4 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-surface-variant flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl text-secondary mb-4 md:mb-6">verified_user</span>
                  <h3 className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md text-primary mb-3 md:mb-4">{t("Rooted in Indian Heritage", "भारतीय विरासत में निहित")}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{t("Inspired by India's natural resources, traditional food culture, and local heritage.", "भारत के प्राकृतिक संसाधनों, पारंपरिक खाद्य संस्कृति और स्थानीय विरासत से प्रेरित।")}</p>
                </div>
              </div>
              {/* Value 2: Artisanal (Tall Image) */}
              <div className="lg:col-span-4 min-h-[300px] relative rounded-3xl overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" className="w-full h-full object-cover" src="/about5.png" alt="Tradition with a Modern Approach" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-8 md:p-10">
                  <h3 className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md text-white">{t("Tradition with a Modern Approach", "आधुनिक दृष्टिकोण के साथ परंपरा")}</h3>
                </div>
              </div>
              {/* Value 3: Purity */}
              <div className="lg:col-span-4 bg-primary p-8 md:p-10 rounded-3xl shadow-md flex flex-col justify-between text-white">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary-fixed mb-4 md:mb-6">eco</span>
                  <h3 className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md mb-3 md:mb-4">{t("Local Value Creation", "स्थानीय मूल्य निर्माण")}</h3>
                  <p className="font-body-md text-body-md opacity-90">{t("Supporting stronger market opportunities for local resources, producers, communities, and entrepreneurs.", "स्थानीय संसाधनों, उत्पादकों, समुदायों और उद्यमियों के लिए मजबूत बाजार अवसरों का समर्थन करना।")}</p>
                </div>
              </div>
              {/* Value 4: Community */}
              <div className="lg:col-span-12 bg-secondary/10 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-8 md:gap-12 items-center border border-secondary/20">
                <div className="flex-1 order-2 md:order-1">
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">{t("Built for the Future", "भविष्य के लिए निर्मित")}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{t("Working toward greater national recognition and future global opportunities for India's locally rooted food products.", "भारत के स्थानीय रूप से निहित खाद्य उत्पादों के लिए अधिक राष्ट्रीय मान्यता और भविष्य के वैश्विक अवसरों की दिशा में काम करना।")}</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-2/5 h-48 md:h-64 rounded-2xl overflow-hidden shadow-md order-1 md:order-2">
                  <img loading="lazy" decoding="async" className="w-full h-full object-cover" src="/about6.png" alt="Built for the Future" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center bg-primary/5 rounded-3xl md:rounded-[40px] p-8 md:p-20 border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl -mr-16 md:-mr-32 -mt-16 md:-mt-32"></div>
            <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-secondary/10 rounded-full blur-3xl -ml-16 md:-ml-32 -mb-16 md:-mb-32"></div>

            <div className="relative z-10">
              <h2 className="font-headline-lg text-headline-lg md:font-display-sm md:text-display-sm text-primary mb-4 md:mb-6">{t("Discover the Chaskilyf™ Experience", "चस्किलाइफ™ अनुभव की खोज करें")}</h2>
              <p className="font-body-md md:font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">{t("Explore products inspired by India's natural resources, traditional food heritage, and the spirit of local entrepreneurship.", "भारत के प्राकृतिक संसाधनों, पारंपरिक खाद्य विरासत और स्थानीय उद्यमिता की भावना से प्रेरित उत्पादों का अन्वेषण करें।")}</p>
              <Link to="/products" className="bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-full font-label-bold text-base md:text-lg hover:bg-primary/90 transition-all inline-flex items-center gap-2 md:gap-3 shadow-lg shadow-primary/20">
                {t("Explore Products", "उत्पादों का अन्वेषण करें")} <span className="material-symbols-outlined text-lg md:text-xl">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
