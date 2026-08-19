import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export function Timeline() {
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-32 relative bg-white overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-primary mb-4">
            {t("Our Simple & Natural Journey", "हमारी सरल और प्राकृतिक यात्रा")}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>
        <div className="space-y-12 md:space-y-24 relative">
          {/* Center Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant hidden md:block origin-top"
          ></motion.div>

          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2 md:order-1 text-left md:text-right"
            >
              <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
                {t("01. LOCAL", "01. स्थानीय")}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {t(
                  "Our products start with local resources, local farmers, and local traditions. We partner directly with tribal communities who have preserved these sustainable practices for generations. By sourcing directly from the roots, we ensure that every ingredient is pure, authentic, and naturally grown.",
                  "हमारे उत्पाद स्थानीय संसाधनों, स्थानीय किसानों और स्थानीय परंपराओं से शुरू होते हैं। हम सीधे आदिवासी समुदायों के साथ साझेदारी करते हैं जिन्होंने पीढ़ियों से इन स्थायी प्रथाओं को संरक्षित किया है। सीधे जड़ों से सोर्सिंग करके, हम सुनिश्चित करते हैं कि हर सामग्री शुद्ध, प्रामाणिक और प्राकृतिक रूप से उगाई गई हो।"
                )}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  className="w-full h-auto object-contain hover:scale-110 transition-transform duration-700"
                  src="/step1.png"
                  alt="Seed Selection"
                />
              </div>
            </motion.div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="order-1"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  className="w-full h-auto object-contain hover:scale-110 transition-transform duration-700"
                  src="/step2.png"
                  alt="Cold Press Extraction"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2"
            >
              <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
                {t("02. QUALITY", "02. गुणवत्ता")}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {t(
                  "Our products succeed through hygienic processing, reliable packaging, and consistent testing. We uphold the highest standards of cleanliness and hygiene in our facilities. Each batch is rigorously tested to ensure it meets our strict quality guidelines before it reaches your home.",
                  "हमारे उत्पाद स्वच्छ प्रसंस्करण, विश्वसनीय पैकेजिंग और निरंतर परीक्षण के माध्यम से सफल होते हैं। हम अपनी सुविधाओं में स्वच्छता और साफ-सफाई के उच्चतम मानकों को बनाए रखते हैं। प्रत्येक बैच का कड़ाई से परीक्षण किया जाता है ताकि यह सुनिश्चित हो सके कि यह आपके घर तक पहुंचने से पहले हमारे सख्त गुणवत्ता दिशानिर्देशों को पूरा करता है।"
                )}
              </p>
            </motion.div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2 md:order-1 text-left md:text-right"
            >
              <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
                {t("03. INNOVATION", "03. नवाचार")}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {t(
                  "Our products create value through modern branding and strong presentation. While our methods are traditional, our approach to delivering them is modern. We use thoughtful, eco-friendly packaging that preserves freshness and aligns with our commitment to the environment.",
                  "हमारे उत्पाद आधुनिक ब्रांडिंग और मजबूत प्रस्तुति के माध्यम से मूल्य बनाते हैं। जबकि हमारे तरीके पारंपरिक हैं, उन्हें वितरित करने का हमारा दृष्टिकोण आधुनिक है। हम विचारशील, पर्यावरण के अनुकूल पैकेजिंग का उपयोग करते हैं जो ताजगी को बरकरार रखती है और पर्यावरण के प्रति हमारी प्रतिबद्धता के अनुरूप है।"
                )}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  className="w-full h-auto object-contain hover:scale-110 transition-transform duration-700"
                  src="/step3.png"
                  alt="Natural Filtration"
                />
              </div>
            </motion.div>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="order-1"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  className="w-full h-auto object-contain hover:scale-110 transition-transform duration-700"
                  src="/step4.png"
                  alt="Artisanal Laddoo Crafting"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2"
            >
              <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
                {t("04. BRAND VALUE", "04. ब्रांड वैल्यू")}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {t(
                  "We bring local traditions to a wider market reach, delivering quality to modern consumers. Our mission is to bridge the gap between ancient tribal wisdom and contemporary lifestyles, ensuring that the health benefits of our natural products are accessible to everyone, everywhere.",
                  "हम स्थानीय परंपराओं को व्यापक बाजार तक ले जाते हैं, आधुनिक उपभोक्ताओं को गुणवत्ता प्रदान करते हैं। हमारा मिशन प्राचीन आदिवासी ज्ञान और समकालीन जीवन शैली के बीच की खाई को पाटना है, यह सुनिश्चित करना कि हमारे प्राकृतिक उत्पादों के स्वास्थ्य लाभ हर किसी के लिए, हर जगह सुलभ हों।"
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
