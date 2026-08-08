import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export function Certificates() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certs = [
    {
      title: t("HACCP Certified", "एचएसीसीपी प्रमाणित"),
      icon: "verified",
      description: t("Our production process is strictly monitored to ensure your food is safe.", "खाद्य सुरक्षा सुनिश्चित करने के लिए हमारी उत्पादन प्रक्रिया की कड़ाई से निगरानी की जाती है।"),
      color: "text-primary",
      bg: "bg-primary/10",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" // General certificate image
    },
    {
      title: t("ISO 9001:2015", "आईएसओ 9001:2015"),
      icon: "workspace_premium",
      description: t("We follow international rules to make sure our oils are always of the highest quality.", "हम सुनिश्चित करते हैं कि हमारे तेल हमेशा बेहतरीन क्वालिटी के हों।"),
      color: "text-secondary-fixed",
      bg: "bg-secondary-fixed/10",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: t("100% Organic", "100% जैविक प्रमाणित"),
      icon: "eco",
      description: t("Our seeds come from organic farms. No bad chemicals are used.", "हमारे बीज जैविक खेतों से आते हैं। कोई हानिकारक रसायन नहीं।"),
      color: "text-tertiary",
      bg: "bg-tertiary/10",
      image: "https://images.unsplash.com/photo-1620603774640-571dd637ffaf?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: t("Non-GMO Verified", "नॉन-जीएमओ सत्यापित"),
      icon: "science",
      description: t("All our products are made from natural seeds, never genetically changed.", "हमारे सभी उत्पाद प्राकृतिक बीजों से बने हैं।"),
      color: "text-primary",
      bg: "bg-primary/10",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: t("Cold-Pressed", "कोल्ड-प्रेस्ड प्रामाणिक"),
      icon: "ac_unit",
      description: t("We keep temperatures low to save all the healthy nutrients.", "हम सभी स्वस्थ पोषक तत्वों को बचाने के लिए तापमान कम रखते हैं।"),
      color: "text-secondary-fixed",
      bg: "bg-secondary-fixed/10",
      image: "https://images.unsplash.com/photo-1471193945509-9cb06126bb70?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: t("Vegan & Cruelty-Free", "शाकाहारी और क्रूरता-मुक्त"),
      icon: "cruelty_free",
      description: t("Our oils are 100% plant-based and cruelty-free.", "हमारे तेल 100% पौधे-आधारित और क्रूरता-मुक्त हैं।"),
      color: "text-tertiary",
      bg: "bg-tertiary/10",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-24 relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-label-bold text-label-bold mb-4 uppercase tracking-widest">{t("Quality Assurance", "गुणवत्ता आश्वासन")}</span>
          <h1 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-primary mb-6">{t("Certificates", "प्रमाण पत्र")}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{t("Transparency and standards you can trust. Our commitment to purity is backed by rigorous international certifications.", "पारदर्शिता और मानक जिन पर आप भरोसा कर सकते हैं। शुद्धता के प्रति हमारी प्रतिबद्धता कठोर अंतरराष्ट्रीय प्रमाणपत्रों द्वारा समर्थित है।")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {certs.map((cert, idx) => (
            <div key={idx} className="bg-surface-container-lowest rounded-3xl shadow-sm border border-surface-variant hover:shadow-xl hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-lg text-primary`}>
                  <span className="material-symbols-outlined text-2xl">{cert.icon}</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">{cert.title}</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed flex-1">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center bg-surface-container-low rounded-3xl overflow-hidden border border-surface-variant">
            <div className="p-12">
                <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary mb-6">{t("Lab Tested Purity", "प्रयोगशाला परीक्षण शुद्धता")}</h2>
                <p className="font-body-lg text-on-surface-variant mb-6">{t("Every batch of Chaskilyf oil undergoes rigorous third-party laboratory testing. We screen for heavy metals, adulterants, and verify the fatty acid profile to guarantee you receive exactly what nature intended.", "चस्किलाइफ तेल के हर बैच का कठोर तृतीय-पक्ष प्रयोगशाला परीक्षण किया जाता है। हम भारी धातुओं, मिलावट के लिए स्क्रीन करते हैं, और यह गारंटी देने के लिए फैटी एसिड प्रोफाइल को सत्यापित करते हैं कि आपको ठीक वही प्राप्त होता है जो प्रकृति का इरादा था।")}</p>
                
                <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-on-surface font-label-bold">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        {t("Zero Trans Fats", "शून्य ट्रांस फैट्स")}
                    </li>
                    <li className="flex items-center gap-3 text-on-surface font-label-bold">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        {t("No Artificial Preservatives", "कोई कृत्रिम परिरक्षक नहीं")}
                    </li>
                    <li className="flex items-center gap-3 text-on-surface font-label-bold">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        {t("Authentic Aroma & Flavor Profile", "प्रामाणिक सुगंध और स्वाद प्रोफ़ाइल")}
                    </li>
                </ul>
                <Link to="/contact" className="text-primary font-label-bold hover:underline flex items-center gap-2">
                    {t("Request Lab Reports", "प्रयोगशाला रिपोर्ट का अनुरोध करें")} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </div>
            <div className="h-full min-h-[400px] bg-primary/5 relative flex items-center justify-center p-12">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#0d631b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-2xl relative z-10 border border-surface-variant max-w-sm rotate-3 transform transition-transform hover:rotate-0 duration-500">
                    <div className="border-b-2 border-outline-variant pb-4 mb-4 flex justify-between items-center">
                        <div className="font-label-bold text-primary">{t("Certificate of Analysis", "विश्लेषण का प्रमाण पत्र")}</div>
                        <span className="material-symbols-outlined text-secondary-fixed">verified</span>
                    </div>
                    <div className="space-y-3 opacity-60">
                        <div className="h-2 w-full bg-surface-variant rounded"></div>
                        <div className="h-2 w-3/4 bg-surface-variant rounded"></div>
                        <div className="h-2 w-5/6 bg-surface-variant rounded"></div>
                        <div className="h-2 w-full bg-surface-variant rounded"></div>
                        <div className="h-2 w-1/2 bg-surface-variant rounded"></div>
                    </div>
                    <div className="mt-8 flex justify-end">
                        <div className="w-16 h-16 rounded-full border-2 border-secondary-fixed text-secondary-fixed flex items-center justify-center font-label-bold rotate-[-15deg] opacity-80 text-[10px]">
                            {t("PASSED", "उत्तीर्ण")}
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
