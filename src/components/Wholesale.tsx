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
          {t("From Local to Global", "स्थानीय से वैश्विक तक")}
        </h2>
        <div className="space-y-4 font-body-md text-on-surface-variant">
          <p>
            {t(
              "We believe India's villages and rural communities hold the key to natural, healthy food.",
              "हमारा मानना है कि भारत के गाँव और ग्रामीण समुदाय प्राकृतिक, स्वस्थ भोजन की कुंजी हैं।"
            )}
          </p>
          <p>
            {t(
              "Chaskilyf™ is dedicated to giving these local products the quality control, presentation, and branding required to reach larger, more demanding markets.",
              "चस्किलाइफ™ इन स्थानीय उत्पादों को बड़े, अधिक मांग वाले बाजारों तक पहुंचने के लिए आवश्यक गुणवत्ता नियंत्रण, प्रस्तुति और ब्रांडिंग देने के लिए समर्पित है।"
            )}
          </p>
          <div className="pt-6 grid grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary">
                check
              </span>
              <span>{t("Quality Control", "गुणवत्ता नियंत्रण")}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary">
                check
              </span>
              <span>{t("Better Presentation", "बेहतर प्रस्तुति")}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary">
                check
              </span>
              <span>{t("Modern Branding", "आधुनिक ब्रांडिंग")}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary">
                check
              </span>
              <span>{t("Larger Markets", "बड़े बाज़ार")}</span>
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
            src="/home3.png"
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
