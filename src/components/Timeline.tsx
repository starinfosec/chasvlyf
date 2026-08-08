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
            {t("Our Craft: From Seed to Soul", "हमारी कला: बीज से आत्मा तक")}
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
                {t("01. Seed Selection", "01. बीज का चयन")}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {t(
                  "We source only the finest, non-GMO seeds from certified organic farms. Every batch undergoes rigorous physical testing for maturity and moisture content.",
                  "हम प्रमाणित जैविक खेतों से केवल बेहतरीन, गैर-जीएमओ बीज प्राप्त करते हैं। हर बैच परिपक्वता और नमी के लिए कठोर शारीरिक परीक्षण से गुजरता है।"
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
              <div className="rounded-[40px] overflow-hidden shadow-2xl h-80">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1600862080031-bb96db298c47?q=80&w=800&auto=format&fit=crop"
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
              <div className="rounded-[40px] overflow-hidden shadow-2xl h-80">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1558237588-410cce508b47?q=80&w=800&auto=format&fit=crop"
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
                {t("02. Cold Press Extraction", "02. कोल्ड प्रेस निष्कर्षण")}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {t(
                  "Using traditional wooden Kohlus, we extract oil at temperatures below 40°C. This ensures that essential nutrients, enzymes, and natural flavors remain intact.",
                  "पारंपरिक लकड़ी के कोल्हू का उपयोग करके, हम 40°C से नीचे के तापमान पर तेल निकालते हैं। यह सुनिश्चित करता है कि आवश्यक पोषक तत्व, एंजाइम और प्राकृतिक स्वाद बरकरार रहें।"
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
                {t("03. Natural Filtration", "03. प्राकृतिक निस्पंदन")}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {t(
                  "No chemical refining. We use gravity-based sedimentation and multi-stage cotton cloth filtration to achieve crystal-clear purity without stripping away nutrients.",
                  "कोई रासायनिक शोधन नहीं। हम पोषक तत्वों को दूर किए बिना क्रिस्टल-क्लियर शुद्धता प्राप्त करने के लिए गुरुत्वाकर्षण-आधारित अवसादन और बहु-चरण सूती कपड़े के निस्पंदन का उपयोग करते हैं।"
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
              <div className="rounded-[40px] overflow-hidden shadow-2xl h-80">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=800&auto=format&fit=crop"
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
              <div className="rounded-[40px] overflow-hidden shadow-2xl h-80">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop"
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
                {t("04. Artisanal Laddoo Crafting", "04. पारंपरिक लड्डू निर्माण")}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {t(
                  "Using handpicked forest-grade Mahua flowers and pure ingredients, our Laddoos are rolled by hand to preserve their authentic taste, nutritional value, and cultural heritage.",
                  "चुने हुए वन-ग्रेड महुआ के फूलों और शुद्ध सामग्री का उपयोग करते हुए, हमारे लड्डू हाथ से बनाए जाते हैं ताकि उनका प्रामाणिक स्वाद, पोषण मूल्य और सांस्कृतिक विरासत बनी रहे।"
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
