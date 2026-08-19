import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: t("Heritage & Pride", "विरासत और गौरव"),
      role: t("Brand Philosophy", "ब्रांड दर्शन"),
      content: t("We are proud of traditional foods.", "हमें पारंपरिक खाद्य पदार्थों पर गर्व है।"),
      rating: 5
    },
    {
      name: t("Rural Excellence", "ग्रामीण उत्कृष्टता"),
      role: t("Brand Philosophy", "ब्रांड दर्शन"),
      content: t("We believe rural resources can provide world-class products.", "हमारा मानना है कि ग्रामीण संसाधन विश्व स्तरीय उत्पाद प्रदान कर सकते हैं।"),
      rating: 5
    },
    {
      name: t("Natural Processing", "प्राकृतिक प्रसंस्करण"),
      role: t("Brand Philosophy", "ब्रांड दर्शन"),
      content: t("We support natural, chemical-free processing.", "हम प्राकृतिक, रसायन मुक्त प्रसंस्करण का समर्थन करते हैं।"),
      rating: 5
    },
    {
      name: t("Market Evolution", "बाजार का विकास"),
      role: t("Brand Philosophy", "ब्रांड दर्शन"),
      content: t("We want to improve the way traditional foods are sold.", "हम पारंपरिक खाद्य पदार्थों को बेचने के तरीके में सुधार करना चाहते हैं।"),
      rating: 5
    },
    {
      name: t("Mutual Growth", "पारस्परिक विकास"),
      role: t("Brand Philosophy", "ब्रांड दर्शन"),
      content: t("We care about the health of our customers and the success of our producers.", "हम अपने ग्राहकों के स्वास्थ्य और अपने उत्पादकों की सफलता की परवाह करते हैं।"),
      rating: 5
    }
  ];

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen">
      <main className="pt-32 pb-24 relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-fixed/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-label-bold text-label-bold mb-4 uppercase tracking-widest">{t("Brand Philosophy", "ब्रांड दर्शन")}</span>
          <h1 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-primary mb-6">{t("What We Believe", "हम क्या मानते हैं")}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{t("The principles that guide our journey and shape our commitment to quality, tradition, and sustainability.", "वे सिद्धांत जो हमारी यात्रा का मार्गदर्शन करते हैं और गुणवत्ता, परंपरा और स्थिरता के प्रति हमारी प्रतिबद्धता को आकार देते हैं।")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-8 rounded-3xl shadow-lg border border-surface-variant hover:-translate-y-2 transition-transform duration-300">
              <div className="flex text-secondary-fixed mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-body-lg text-on-surface mb-8 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4 border-t border-outline-variant pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline-md text-headline-md">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold text-on-surface">{testimonial.name}</h4>
                  <p className="text-sm text-on-surface-variant">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center bg-primary/5 rounded-3xl p-12 border border-primary/10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t("Experience the Purity", "शुद्धता का अनुभव करें")}</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">{t("Join thousands of satisfied customers who have made the switch to artisanal, cold-pressed oils.", "हजारों संतुष्ट ग्राहकों से जुड़ें जिन्होंने कारीगर, कोल्ड-प्रेस्ड तेलों को अपनाया है।")}</p>
            <Link to="/products" className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-bold text-label-bold hover:bg-primary/90 transition-all inline-block shadow-lg shadow-primary/20">
                {t("Explore Our Collection", "हमारे संग्रह का अन्वेषण करें")}
            </Link>
        </div>
      </main>
    </div>
  );
}
