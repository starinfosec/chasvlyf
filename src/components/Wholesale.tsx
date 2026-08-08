import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export function Wholesale() {
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
          {t("India's Premier Wholesale Partner for Organic Oils", "ऑर्गेनिक तेलों के लिए भारत का प्रमुख थोक भागीदार")}
        </h2>
        <div className="space-y-4 font-body-md text-on-surface-variant">
          <p>
            {t(
              "Chaskilyf stands at the intersection of ancestral wisdom and modern quality control. As a leading manufacturer and exporter, we specialize in Cold Pressed (Kachi Ghani) oils that serve as the foundation for healthy kitchens across the globe.",
              "चस्किलाइफ ऑयल्स पैतृक ज्ञान और आधुनिक गुणवत्ता नियंत्रण के चौराहे पर खड़ा है। एक प्रमुख निर्माता और निर्यातक के रूप में, हम कोल्ड प्रेस्ड (कच्ची घानी) तेलों के विशेषज्ञ हैं जो दुनिया भर में स्वस्थ रसोई के लिए नींव का काम करते हैं।"
            )}
          </p>
          <p>
            {t(
              "Our infrastructure is built to handle Bulk Orders for global retail chains, restaurant groups, and wellness brands. By eliminating middlemen, we provide competitive pricing while maintaining 100% traceability from farm to bottle.",
              "हमारा बुनियादी ढांचा वैश्विक खुदरा श्रृंखलाओं, रेस्तरां समूहों और वेलनेस ब्रांडों के लिए थोक ऑर्डर को संभालने के लिए बनाया गया है। बिचौलियों को खत्म करके, हम खेत से बोतल तक 100% पता लगाने की क्षमता बनाए रखते हुए प्रतिस्पर्धी मूल्य निर्धारण प्रदान करते हैं।"
            )}
          </p>
          <div className="pt-6 grid grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary">
                check
              </span>
              <span>{t("Lab Tested Batches", "प्रयोगशाला परीक्षण बैच")}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary">
                check
              </span>
              <span>{t("Custom Packaging", "कस्टम पैकेजिंग")}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary">
                check
              </span>
              <span>{t("Zero Preservatives", "शून्य प्रिजर्वेटिव")}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary">
                check
              </span>
              <span>{t("Global Shipping", "ग्लोबल शिपिंग")}</span>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="aspect-square bg-surface-container rounded-[60px] overflow-hidden"
        >
          <img
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            src="https://images.unsplash.com/photo-1600862080031-bb96db298c47?q=80&w=800&auto=format&fit=crop"
            alt="Wholesale Partner"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="absolute bottom-4 left-4 md:-bottom-10 md:-left-10 glass-card p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-2xl max-w-[240px] md:max-w-[280px]"
        >
          <h4 className="font-headline-md text-headline-md text-primary mb-2">{t("30+ Years", "30+ साल")}</h4>
          <p className="text-sm font-body-md text-on-surface-variant">
            {t(
              "Of artisanal extraction expertise and trust from over 10,000 households.",
              "10,000 से अधिक घरों के कारीगर निष्कर्षण विशेषज्ञता और विश्वास का।"
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
