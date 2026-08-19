import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen flex flex-col">
      {/* Main Content Canvas */}
      <main className="flex-grow pt-32 pb-24 relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Animated Background Decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full bg-botanical-blur"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full bg-botanical-blur"></div>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-label-bold text-label-bold mb-4 uppercase tracking-widest">{t("Partner with us", "हमारे साथ साझेदारी करें")}</span>
          <h1 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-primary mb-6">{t("Wholesale & Distribution", "थोक और वितरण")}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{t("Elevate your retail or hospitality experience with our award-winning cold-pressed oils. Join our global network of elite distributors.", "हमारे पुरस्कार विजेता कोल्ड-प्रेस्ड तेलों के साथ अपने खुदरा या आतिथ्य अनुभव को बढ़ाएं। कुलीन वितरकों के हमारे वैश्विक नेटवर्क से जुड़ें।")}</p>
        </motion.div>

        {/* Split Layout: Form and Glass Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
          {/* Left: Premium Enquiry Form */}
          <motion.section 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-surface-container-lowest p-10 md:p-14 rounded-3xl shadow-xl shadow-primary/5 border border-surface-variant"
          >
            <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-8">{t("Tell us about your business", "हमें अपने व्यवसाय के बारे में बताएं")}</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="floating-label-group">
                  <input className="w-full input-luxury font-body-md text-on-surface" placeholder=" " required type="text" />
                  <label className="floating-label font-body-md">{t("Contact Name", "संपर्क नाम")}</label>
                </div>
                <div className="floating-label-group">
                  <input className="w-full input-luxury font-body-md text-on-surface" placeholder=" " required type="text" />
                  <label className="floating-label font-body-md">{t("Business Name", "व्यवसाय का नाम")}</label>
                </div>
              </div>
              
              <div className="floating-label-group">
                <input className="w-full input-luxury font-body-md text-on-surface" placeholder=" " required type="email" />
                <label className="floating-label font-body-md">{t("Business Email Address", "व्यवसाय ईमेल पता")}</label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="floating-label-group">
                  <select className="w-full input-luxury font-body-md text-on-surface py-2" required defaultValue="">
                    <option disabled value=""></option>
                    <option>{t("Retailer / Boutique Store", "खुदरा विक्रेता / बुटीक स्टोर")}</option>
                    <option>{t("Restaurant / Hospitality", "रेस्तरां / आतिथ्य")}</option>
                    <option>{t("International Distributor", "अंतर्राष्ट्रीय वितरक")}</option>
                    <option>{t("Manufacturing / Bulk Use", "विनिर्माण / थोक उपयोग")}</option>
                  </select>
                  <label className="floating-label font-body-md">{t("Business Type", "व्यवसाय का प्रकार")}</label>
                </div>
                <div className="floating-label-group">
                  <select className="w-full input-luxury font-body-md text-on-surface py-2" required defaultValue="">
                    <option disabled value=""></option>
                    <option>{t("Under 100 Liters", "100 लीटर से कम")}</option>
                    <option>{t("100 - 500 Liters", "100 - 500 लीटर")}</option>
                    <option>{t("500 - 2,000 Liters", "500 - 2,000 लीटर")}</option>
                    <option>{t("2,000+ Liters", "2,000+ लीटर")}</option>
                  </select>
                  <label className="floating-label font-body-md">{t("Monthly Requirement", "मासिक आवश्यकता")}</label>
                </div>
              </div>

              <div className="floating-label-group pt-4">
                <textarea className="w-full input-luxury font-body-md text-on-surface resize-none" placeholder=" " rows={4}></textarea>
                <label className="floating-label font-body-md">{t("Tell us about your distribution reach or specific interests...", "हमें अपनी वितरण पहुंच या विशिष्ट रुचियों के बारे में बताएं...")}</label>
              </div>

              <div className="pt-6">
                <button 
                  className={`w-full md:w-auto px-12 py-4 text-on-primary rounded-full font-label-bold text-label-bold hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-3 ${status === 'success' ? 'bg-secondary-container text-on-secondary-container shadow-secondary-container/20' : 'bg-primary shadow-primary/20'}`} 
                  type="submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'idle' && (
                    <>
                      {t("Submit Enquiry", "पूछताछ सबमिट करें")}
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </>
                  )}
                  {status === 'submitting' && (
                    <>
                      <span className="material-symbols-outlined animate-spin">progress_activity</span> {t("Sending...", "भेज रहा है...")}
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <span className="material-symbols-outlined">check_circle</span> {t("Enquiry Received", "पूछताछ प्राप्त हुई")}
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.section>

          {/* Right: Premium Glass Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="space-y-gutter"
          >
            {/* Contact Info Glass Card */}
            <div className="glass-card rounded-3xl p-10 text-on-surface-variant relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary-fixed/30 rounded-full blur-3xl"></div>
              <h3 className="font-headline-md text-headline-md text-primary mb-8">{t("Corporate Headquarters", "कॉर्पोरेट मुख्यालय")}</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface">{t("Registered Office", "पंजीकृत कार्यालय")}</p>
                    <p className="font-body-md">The Gilded Press, Harvest Lane, <br />Provence Estate, France 84000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface">{t("Distribution Desk", "वितरण डेस्क")}</p>
                    <p className="font-body-md">+33 4 90 12 34 56</p>
                    <p className="font-body-md text-secondary font-bold cursor-pointer hover:underline">{t("Request a Callback", "कॉल बैक का अनुरोध करें")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0">
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface">{t("WhatsApp Wholesale Support", "व्हाट्सएप थोक समर्थन")}</p>
                    <a className="font-body-md hover:text-[#25D366] transition-colors flex items-center gap-2" href="https://wa.me/918767153572" target="_blank" rel="noopener noreferrer">
                      {t("Chat with Sales Director", "बिक्री निदेशक के साथ चैट करें")}
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-primary/10">
                <p className="font-label-bold text-label-bold text-on-surface mb-2">{t("Our Operating Standards", "हमारे संचालन मानक")}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[12px] font-semibold text-primary">{t("HACCP CERTIFIED", "एचएसीसीपी प्रमाणित")}</span>
                  <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[12px] font-semibold text-primary">{t("ISO 9001:2015", "आईएसओ 9001:2015")}</span>
                  <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[12px] font-semibold text-primary">{t("GLOBAL SHIPPING", "वैश्विक शिपिंग")}</span>
                </div>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-surface-variant bg-surface h-[350px] relative group">
              <div className="absolute inset-0 z-10 bg-primary/5 pointer-events-none transition-opacity group-hover:opacity-0"></div>
              <div className="w-full h-full bg-surface-container flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="material-symbols-outlined text-4xl text-primary mb-4">map</span>
                  <p className="font-label-bold text-label-bold text-on-surface-variant">{t("Locating Manufacturing Unit...", "विनिर्माण इकाई का पता लगा रहा है...")}</p>
                  <p className="text-xs text-outline mt-2">{t("Interactive Map: Provence, France", "इंटरएक्टिव मानचित्र: प्रोवेंस, फ्रांस")}</p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50">
                <p className="font-label-bold text-label-bold text-primary">{t("Manufacturing Facility", "विनिर्माण सुविधा")}</p>
                <p className="text-xs text-on-surface-variant">{t("Visits by prior appointment only.", "केवल पूर्व नियुक्ति द्वारा दौरा।")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
