import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export function WhyChooseUs() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: "spa",
      title: t("Tradition", "परंपरा"),
      description: t("We respect traditional food knowledge and recognize its relevance in modern times.", "हम पारंपरिक खाद्य ज्ञान का सम्मान करते हैं और आधुनिक समय में इसकी प्रासंगिकता को पहचानते हैं।")
    },
    {
      icon: "eco",
      title: t("Quality", "गुणवत्ता"),
      description: t("We prioritize hygiene, reliable processing, and consistent product standards.", "हम स्वच्छता, विश्वसनीय प्रसंस्करण और सुसंगत उत्पाद मानकों को प्राथमिकता देते हैं।")
    },
    {
      icon: "health_and_safety",
      title: t("Natural Thinking", "प्राकृतिक सोच"),
      description: t("We believe natural resources provide the best foundations for healthy food products.", "हमारा मानना है कि प्राकृतिक संसाधन स्वस्थ खाद्य उत्पादों के लिए सबसे अच्छी नींव प्रदान करते हैं।")
    },
    {
      icon: "verified",
      title: t("Innovation", "नवाचार"),
      description: t("We find better ways to present and package traditional products for modern consumers.", "हम आधुनिक उपभोक्ताओं के लिए पारंपरिक उत्पादों को प्रस्तुत करने और पैकेज करने के बेहतर तरीके खोजते हैं।")
    },
    {
      icon: "workspace_premium",
      title: t("Local Empowerment", "स्थानीय सशक्तिकरण"),
      description: t("We support better opportunities for local resources, producers, and entrepreneurs.", "हम स्थानीय संसाधनों, उत्पादकों और उद्यमियों के लिए बेहतर अवसरों का समर्थन करते हैं।")
    },
    {
      icon: "science",
      title: t("Responsibility", "ज़िम्मेदारी"),
      description: t("We are committed to honest communication, safe packaging, and sustainable business practices.", "हम ईमानदार संचार, सुरक्षित पैकेजिंग और टिकाऊ व्यावसायिक प्रथाओं के लिए प्रतिबद्ध हैं।")
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
            {t("Our Core Values", "हमारे मूल मूल्य")}
          </h2>
          <p className="font-body-md md:font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t("The principles that guide our journey from local resources to modern markets.", "वे सिद्धांत जो स्थानीय संसाधनों से आधुनिक बाजारों तक की हमारी यात्रा का मार्गदर्शन करते हैं।")}
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
