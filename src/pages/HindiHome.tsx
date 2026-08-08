import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../utils/useReveal";

export function HindiHome() {
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] md:h-[90vh] min-h-[500px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-40">
            <div className="w-full h-full bg-surface-variant"></div>
          </div>

          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full mt-16 md:mt-0">
            <div className="reveal-up text-center md:text-left">
              <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-label-bold text-label-bold mb-4 md:mb-6 text-sm">
                स्थापित 1994 • प्रीमियम गुणवत्ता
              </span>
              <h1 className="font-display-md text-display-md md:font-display-lg md:text-display-lg text-primary leading-tight mb-4 md:mb-6">
                हर बूँद में <br className="hidden md:block" />
                <span className="text-secondary italic">शुद्धता</span>
              </h1>
              <p className="font-body-md md:font-body-lg text-on-surface-variant max-w-md mx-auto md:mx-0 mb-8 md:mb-10">
                हमारे कोल्ड-प्रेस्ड (कच्ची घानी) तेलों के साथ प्रकृति के सार का अनुभव करें।
                पोषक तत्वों, सुगंध और बीज की आत्मा को संरक्षित करने के लिए सावधानीपूर्वक निकाला गया।
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link to="/contact" className="bg-primary text-on-primary rounded-full px-6 md:px-8 py-3 md:py-4 font-label-bold text-body-sm md:text-body-md hover:scale-105 transition-transform flex items-center gap-2">
                  पूछताछ करें <span className="material-symbols-outlined text-sm md:text-base">trending_flat</span>
                </Link>
                <Link to="/products" className="border-2 border-secondary text-secondary rounded-full px-6 md:px-8 py-3 md:py-4 font-label-bold text-body-sm md:text-body-md hover:bg-secondary/5 transition-colors">
                  कैटलॉग देखें
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center items-center mt-8 md:mt-0">
              <div className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="floating relative z-20">
                <img
                  className="w-[220px] md:w-[320px] h-auto drop-shadow-2xl"
                  src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=800&auto=format&fit=crop"
                  alt="Premium cold-pressed mustard oil"
                />
              </div>
              <div
                className="absolute bottom-4 md:bottom-10 right-0 md:-right-4 glass-card p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl max-w-[160px] md:max-w-[200px] reveal-up"
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                  <span
                    className="material-symbols-outlined text-secondary text-sm md:text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="font-label-bold text-label-bold text-secondary text-xs md:text-sm">
                    प्रमाणित
                  </span>
                </div>
                <p className="text-on-surface font-body-sm md:font-body-md text-xs md:text-sm">
                  100% जैविक कोल्ड-प्रेस्ड सरसों
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Hindi */}
        <section className="py-16 md:py-32 bg-surface-container-low border-y border-outline-variant/30">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-20 reveal-up">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-label-bold text-label-bold mb-4 uppercase tracking-widest">
                चस्किलाइफ ही क्यों
              </span>
              <h2 className="font-display-md text-display-md md:font-display-lg md:text-display-lg text-primary mb-4">
                हमें क्यों चुनें?
              </h2>
              <p className="font-body-md md:font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                हम केवल तेल नहीं निकालते; हम बीज के सार को संरक्षित करते हैं। जानिए क्या हमारे कोल्ड-प्रेस्ड तेलों को श्रेष्ठ बनाता है।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: "spa", title: "100% शुद्ध और प्राकृतिक", desc: "विश्वसनीय खेतों से प्राप्त, हमारे बीज बिना किसी मिलावट के पूर्ण शुद्धता सुनिश्चित करने के लिए कठोर चयन से गुजरते हैं।" },
                { icon: "eco", title: "कच्ची घानी परंपरा", desc: "प्राकृतिक एंटीऑक्सिडेंट और स्वादों को संरक्षित करते हुए, कमरे के तापमान पर पारंपरिक 'कच्ची घानी' विधि का उपयोग करके निकाला जाता है।" },
                { icon: "health_and_safety", title: "पोषक तत्वों से भरपूर", desc: "आवश्यक फैटी एसिड, विटामिन और खनिजों से भरपूर जो अक्सर पारंपरिक शोधन प्रक्रियाओं (रिफाइनिंग) में खो जाते हैं।" },
                { icon: "verified", title: "कोई रसायन नहीं", desc: "शून्य प्रिजर्वेटिव, शून्य सिंथेटिक रंग और शून्य कृत्रिम स्वाद। बिल्कुल वैसा ही जैसा प्रकृति ने चाहा।" },
                { icon: "workspace_premium", title: "30+ वर्षों का विश्वास", desc: "1994 से, हम विश्व स्तर पर घरों और व्यवसायों को प्रीमियम गुणवत्ता वाले तेल देने के लिए प्रतिबद्ध हैं।" },
                { icon: "science", title: "लैब प्रमाणित", desc: "गुणवत्ता, सुरक्षा और पोषण मूल्य की गारंटी के लिए हर बैच का परीक्षण प्रमाणित प्रयोगशालाओं में किया जाता है।" }
              ].map((f, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal-up" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">{f.title}</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Footer CTA */}
        <section className="py-20 text-center">
          <Link to="/" className="text-primary hover:underline font-label-bold">
            Back to English Version
          </Link>
        </section>

      </main>
    </div>
  );
}
