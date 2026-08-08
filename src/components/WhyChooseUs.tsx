import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export function WhyChooseUs() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: "spa",
      title: t("100% Pure & Natural", "100% शुद्ध और प्राकृतिक"),
      description: t("We get our seeds from trusted farms to make sure they are pure and have no mixed-in chemicals.", "हम सीधे किसानों से अच्छे बीज लाते हैं ताकि हमारा तेल एकदम शुद्ध हो और उसमें कोई मिलावट न हो।")
    },
    {
      icon: "eco",
      title: t("Traditional Method", "पुरानी और सच्ची विधि"),
      description: t("We use the traditional 'Kachi Ghani' method to keep the natural taste and health benefits.", "हम 'कच्ची घानी' विधि का उपयोग करते हैं जिससे तेल का प्राकृतिक स्वाद और फायदे बचे रहते हैं।")
    },
    {
      icon: "health_and_safety",
      title: t("Healthy & Nutritious", "स्वस्थ और पौष्टिक"),
      description: t("Our oils are full of good fats and vitamins that keep you healthy.", "हमारे तेल अच्छे फैट और विटामिन से भरपूर हैं जो आपको स्वस्थ रखते हैं।")
    },
    {
      icon: "verified",
      title: t("No Chemicals", "कोई केमिकल नहीं"),
      description: t("No fake colors, no fake flavors, and no bad chemicals. Just pure oil.", "कोई कृत्रिम रंग नहीं, कोई कृत्रिम स्वाद नहीं। यह बस एकदम शुद्ध तेल है।")
    },
    {
      icon: "workspace_premium",
      title: t("30+ Years of Trust", "30+ वर्षों का विश्वास"),
      description: t("Since 1994, we have given the best quality oils to people everywhere.", "1994 से, हम हर जगह लोगों को सबसे अच्छी क्वालिटी का तेल दे रहे हैं।")
    },
    {
      icon: "science",
      title: t("Quality Tested", "क्वालिटी टेस्टेड"),
      description: t("Every batch of oil is tested in a lab so you get only the best and safest oil.", "हमारे तेल के हर बैच की लैब में जांच होती है ताकि आपको सबसे अच्छा तेल मिले।")
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-16 md:py-32 bg-surface-container-low border-y border-outline-variant/30">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-label-bold text-label-bold mb-4 uppercase tracking-widest">
            {t("The Chaskilyf Difference", "चस्किलाइफ का अंतर")}
          </span>
          <h2 className="font-display-md text-display-md md:font-display-lg md:text-display-lg text-primary mb-4">
            {t("Why Choose Us", "हमें क्यों चुनें")}
          </h2>
          <p className="font-body-md md:font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t("We make our oils with care to keep them healthy and natural. Here is why you should choose us.", "हम अपने तेलों को बहुत ध्यान से बनाते हैं ताकि वे प्राकृतिक और सेहतमंद रहें। यहाँ कुछ कारण हैं कि आपको हमें क्यों चुनना चाहिए।")}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {feature.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">{feature.title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
