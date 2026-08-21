import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export function Certifications() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-12 md:py-20 bg-primary/5 border-y border-outline-variant/30">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-label-bold text-lg md:text-xl text-on-surface-variant uppercase tracking-widest mb-12"
        >
          {t("Our Promise", "हमारा वादा")}
        </motion.p>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-70"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 text-center">
            <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-default">
              <span
                className="material-symbols-outlined text-6xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                health_and_safety
              </span>
            </div>
            <span className="font-label-bold text-base md:text-lg">{t("No Compromise on Hygiene", "स्वच्छता से कोई समझौता नहीं")}</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 text-center">
            <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-default">
              <span
                className="material-symbols-outlined text-6xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                spa
              </span>
            </div>
            <span className="font-label-bold text-base md:text-lg">{t("Authentic Processes", "प्रामाणिक प्रक्रियाएं")}</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 text-center">
            <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-default">
              <span
                className="material-symbols-outlined text-6xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
            </div>
            <span className="font-label-bold text-base md:text-lg">{t("Clean Ingredients", "स्वच्छ सामग्री")}</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 text-center">
            <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-default">
              <span
                className="material-symbols-outlined text-6xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                local_shipping
              </span>
            </div>
            <span className="font-label-bold text-base md:text-lg">{t("Reliable Supply Chain", "विश्वसनीय आपूर्ति श्रृंखला")}</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 text-center">
            <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-default">
              <span
                className="material-symbols-outlined text-6xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                visibility
              </span>
            </div>
            <span className="font-label-bold text-base md:text-lg">{t("Transparent Practices", "पारदर्शी प्रथाएं")}</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 text-center">
            <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-default">
              <span
                className="material-symbols-outlined text-6xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
            </div>
            <span className="font-label-bold text-base md:text-lg">{t("Consistent Quality", "लगातार गुणवत्ता")}</span>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full mt-16 md:mt-24">
        <img loading="lazy" decoding="async" 
          src="/home2.png" 
          alt="Natural Purity" 
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
