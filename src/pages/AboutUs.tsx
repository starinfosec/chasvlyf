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
            <div className="w-full h-full bg-cover bg-center scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
            <div className="max-w-2xl mt-12 md:mt-0">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-label-bold text-label-bold mb-6 uppercase tracking-widest">{t("ESTABLISHED 1994", "1994 में स्थापित")}</span>
              <h1 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-on-background mb-6 md:mb-8 leading-[1.1]">{t("Our Story", "हमारी कहानी")}</h1>
              <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-lg mb-10">{t("Thirty years of artisanal mastery, transforming the earth's purest harvests into botanical excellence. We don't just press oils; we preserve nature's legacy.", "कारीगरों की महारत के तीस साल, पृथ्वी की सबसे शुद्ध फसल को वानस्पतिक उत्कृष्टता में बदलना। हम सिर्फ तेल नहीं दबाते; हम प्रकृति की विरासत को संरक्षित करते हैं।")}</p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative order-2 md:order-1">
              <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5] relative">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=800&auto=format&fit=crop" alt="Artisanal oil press in 1994" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl p-6 flex-col justify-center hidden lg:flex bg-white shadow-2xl border border-surface-variant">
                <span className="font-display-lg text-display-lg text-primary leading-none">1994</span>
                <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest mt-2">{t("The Genesis", "उत्पत्ति")}</span>
              </div>
            </div>
            <div className="space-y-6 md:space-y-8 order-1 md:order-2">
              <h2 className="font-headline-lg text-headline-lg text-primary">{t("The Genesis of Pure Flavor", "शुद्ध स्वाद की उत्पत्ति")}</h2>
              <div className="w-20 h-1 bg-secondary"></div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {t(
                  "It all started in a small village where traditional methods of oil extraction were a way of life. The rhythmic sound of the wooden pestle, the intoxicating aroma of freshly crushed seeds, and the golden hue of the pure oil—these were the sensory experiences that shaped our founding vision.",
                  "यह सब एक छोटे से गाँव में शुरू हुआ जहाँ तेल निकालने के पारंपरिक तरीके जीवन का एक तरीका थे। लकड़ी के मूसल की लयबद्ध ध्वनि, ताजे कुचले बीजों की नशीली सुगंध, और शुद्ध तेल की सुनहरी छटा-ये संवेदी अनुभव थे जिन्होंने हमारी संस्थापक दृष्टि को आकार दिया।"
                )}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {t(
                  "We realized that the mass-produced, chemically refined oils of the modern world had lost their soul. We set out to bring back the authenticity of the 'Kachi Ghani' method, ensuring every drop we produce retains its natural nutrients and robust flavor profile.",
                  "हमने महसूस किया कि आधुनिक दुनिया के बड़े पैमाने पर उत्पादित, रासायनिक रूप से परिष्कृत तेलों ने अपनी आत्मा खो दी थी। हम 'कच्ची घानी' पद्धति की प्रामाणिकता को वापस लाने के लिए निकले, यह सुनिश्चित करते हुए कि हम जो भी बूंद पैदा करते हैं वह अपने प्राकृतिक पोषक तत्वों और मजबूत स्वाद प्रोफ़ाइल को बरकरार रखती है।"
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
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t("Guided by Nature", "प्रकृति द्वारा निर्देशित")}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{t("Our North Star in a world of compromises.", "समझौतों की दुनिया में हमारा ध्रुव तारा।")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Vision Card */}
              <div className="group p-8 md:p-12 rounded-3xl bg-surface transition-transform hover:-translate-y-1 shadow-md border border-surface-variant">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8 text-primary">
                  <span className="material-symbols-outlined text-3xl" data-weight="fill">visibility</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4 md:mb-6">{t("Our Vision", "हमारा नज़रिया")}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{t("To redefine luxury as a state of purity, where the most precious elements in your life are those provided directly by the sun, the soil, and the rain.", "विलासिता को शुद्धता की स्थिति के रूप में फिर से परिभाषित करने के लिए, जहाँ आपके जीवन के सबसे कीमती तत्व वे हैं जो सीधे सूरज, मिट्टी और बारिश द्वारा प्रदान किए जाते हैं।")}</p>
              </div>
              {/* Mission Card */}
              <div className="group p-8 md:p-12 rounded-3xl bg-primary text-on-primary transition-transform hover:-translate-y-1 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 md:mb-8">
                  <span className="material-symbols-outlined text-3xl" data-weight="fill">track_changes</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 md:mb-6">{t("Our Mission", "हमारा मिशन")}</h3>
                <p className="font-body-md text-body-md opacity-90 leading-relaxed">{t("To masterfully extract and protect the vitality of botanical life, ensuring every drop of Chaskilyf delivers the unadulterated essence of its origin.", "वनस्पति जीवन की जीवन शक्ति को कुशलता से निकालने और उसकी रक्षा करने के लिए, यह सुनिश्चित करते हुए कि चस्किलाइफ की हर बूंद अपने मूल का बिना मिलावट वाला सार प्रदान करती है।")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-16 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=800&auto=format&fit=crop" alt="Sustainable olive grove" />
            <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="bg-black/60 md:bg-black/50 border border-white/10 rounded-3xl md:rounded-[3rem] p-8 md:p-16 lg:p-24 max-w-4xl text-white shadow-2xl">
              <h2 className="font-display-sm text-display-sm md:font-display-lg md:text-display-lg mb-6 md:mb-8">{t("The Quality Promise", "गुणवत्ता का वादा")}</h2>
              <p className="font-body-md md:font-body-lg mb-10 md:mb-12 opacity-95 leading-relaxed">{t("Sustainability isn't a goal; it's our starting point. We practice regenerative agriculture that heals the earth while yielding oils of unmatched nutritional and sensory profiles. Every byproduct of our extraction process is repurposed into organic fertilizer or biomass energy.", "स्थिरता कोई लक्ष्य नहीं है; यह हमारा प्रारंभिक बिंदु है। हम पुनर्योजी कृषि का अभ्यास करते हैं जो बेजोड़ पोषण और संवेदी प्रोफाइल के तेल प्राप्त करते हुए पृथ्वी को ठीक करती है। हमारी निष्कर्षण प्रक्रिया के प्रत्येक उपोत्पाद को जैविक उर्वरक या बायोमास ऊर्जा में फिर से उपयोग किया जाता है।")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/20 pt-8 md:pt-12">
                <div>
                  <span className="font-label-bold text-label-bold uppercase tracking-widest block mb-1 opacity-80">{t("Sourcing", "सोर्सिंग")}</span>
                  <p className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md font-bold">{t("100% Organic", "100% जैविक")}</p>
                </div>
                <div>
                  <span className="font-label-bold text-label-bold uppercase tracking-widest block mb-1 opacity-80">{t("Process", "प्रक्रिया")}</span>
                  <p className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md font-bold">{t("Carbon Neutral", "कार्बन तटस्थ")}</p>
                </div>
                <div>
                  <span className="font-label-bold text-label-bold uppercase tracking-widest block mb-1 opacity-80">{t("Packaging", "पैकेजिंग")}</span>
                  <p className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md font-bold">{t("Infinite Glass", "अनंत ग्लास")}</p>
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
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600862080031-bb96db298c47?q=80&w=800&auto=format&fit=crop" alt="Rajiv Verma" />
              </div>
              <h4 className="font-headline-md text-headline-md text-primary">{t("Rajiv Verma", "राजीव वर्मा")}</h4>
              <p className="font-label-bold text-label-bold text-secondary mb-3 uppercase tracking-wider text-xs md:text-sm mt-1">{t("Founder & Master Miller", "संस्थापक और मास्टर मिलर")}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{t("With decades of experience in traditional oil extraction, Rajiv ensures our methods remain true to their ancestral roots.", "पारंपरिक तेल निष्कर्षण में दशकों के अनुभव के साथ, राजीव सुनिश्चित करते हैं कि हमारे तरीके अपनी पैतृक जड़ों के प्रति सच्चे रहें।")}</p>
            </div>
            {/* Team Member 2 
            <div className="bg-surface-container-lowest border border-surface-variant rounded-3xl p-6 transition-all hover:shadow-lg">
              <div className="rounded-2xl overflow-hidden aspect-square mb-6">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop" alt="Anya Sharma" />
              </div>
              <h4 className="font-headline-md text-headline-md text-primary">{t("Anya Sharma", "अन्या शर्मा")}</h4>
              <p className="font-label-bold text-label-bold text-secondary mb-3 uppercase tracking-wider text-xs md:text-sm mt-1">{t("Head of Quality", "गुणवत्ता प्रमुख")}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{t("Anya's rigorous testing protocols guarantee that only the highest quality oils reach our customers' tables.", "अन्या के कठोर परीक्षण प्रोटोकॉल गारंटी देते हैं कि केवल उच्चतम गुणवत्ता वाले तेल ही हमारे ग्राहकों की मेज तक पहुँचते हैं।")}</p>
            </div>
            {/* Team Member 3 
            <div className="bg-surface-container-lowest border border-surface-variant rounded-3xl p-6 transition-all hover:shadow-lg">
              <div className="rounded-2xl overflow-hidden aspect-square mb-6">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?q=80&w=800&auto=format&fit=crop" alt="David Chen" />
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
            <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-12 md:mb-16">{t("The Chaskilyf Values", "चस्किलाइफ मूल्य")}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              {/* Value 1: Integrity */}
              <div className="lg:col-span-4 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-surface-variant flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl text-secondary mb-4 md:mb-6">verified_user</span>
                  <h3 className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md text-primary mb-3 md:mb-4">{t("Integrity of Origin", "उत्पत्ति की अखंडता")}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{t("Every bottle is traceable back to the specific plot of land where its fruit was harvested.", "प्रत्येक बोतल को भूमि के उस विशिष्ट भूखंड पर वापस खोजा जा सकता है जहां इसके फल की कटाई की गई थी।")}</p>
                </div>
              </div>
              {/* Value 2: Artisanal (Tall Image) */}
              <div className="lg:col-span-4 min-h-[300px] relative rounded-3xl overflow-hidden shadow-sm">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600862080031-bb96db298c47?q=80&w=800&auto=format&fit=crop" alt="Artisanal Precision" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-8 md:p-10">
                  <h3 className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md text-white">{t("Artisanal Precision", "कारीगरों की सटीकता")}</h3>
                </div>
              </div>
              {/* Value 3: Purity */}
              <div className="lg:col-span-4 bg-primary p-8 md:p-10 rounded-3xl shadow-md flex flex-col justify-between text-white">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary-fixed mb-4 md:mb-6">eco</span>
                  <h3 className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md mb-3 md:mb-4">{t("Unwavering Purity", "अटूट शुद्धता")}</h3>
                  <p className="font-body-md text-body-md opacity-90">{t("No additives. No fillers. Just the pure, potent essence of the botanical source, cold-pressed and filtered naturally.", "कोई योजक नहीं। कोई भराव नहीं। सिर्फ वनस्पति स्रोत का शुद्ध, शक्तिशाली सार, कोल्ड-प्रेस्ड और प्राकृतिक रूप से फ़िल्टर किया गया।")}</p>
                </div>
              </div>
              {/* Value 4: Community */}
              <div className="lg:col-span-12 bg-secondary/10 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-8 md:gap-12 items-center border border-secondary/20">
                <div className="flex-1 order-2 md:order-1">
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">{t("Community Prosperity", "सामुदायिक समृद्धि")}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{t("We reinvest 15% of our profits into the rural farming communities that nurture our groves, providing education and health initiatives.", "हम अपने मुनाफे का 15% उन ग्रामीण कृषि समुदायों में फिर से निवेश करते हैं जो हमारे उपवनों का पोषण करते हैं, शिक्षा और स्वास्थ्य पहल प्रदान करते हैं।")}</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-2/5 h-48 md:h-64 rounded-2xl overflow-hidden shadow-md order-1 md:order-2">
                  <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=800&auto=format&fit=crop" alt="Community Prosperity" />
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
              <h2 className="font-headline-lg text-headline-lg md:font-display-sm md:text-display-sm text-primary mb-4 md:mb-6">{t("Taste the Difference", "अंतर का स्वाद लें")}</h2>
              <p className="font-body-md md:font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">{t("Join us in celebrating the true essence of nature. Explore our collection of artisanal cold-pressed oils.", "प्रकृति के सच्चे सार का जश्न मनाने में हमारे साथ जुड़ें। कारीगर कोल्ड-प्रेस्ड तेलों के हमारे संग्रह का अन्वेषण करें।")}</p>
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
