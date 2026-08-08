import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="w-full pt-20 pb-10 bg-[#252019] text-secondary-container relative overflow-hidden">
      <div className="absolute inset-0 warli-bg pointer-events-none opacity-20"></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="inline-block mb-6">
            <img
              alt="Chaskilyf Logo"
              className="h-24 md:h-28 w-auto object-contain bg-white/90 p-2 rounded-lg"
              src="/logo.png"
            />
          </Link>
          <p className="text-surface-variant opacity-70 font-body-md mb-6">
            {t("Crafting liquid gold through the purest cold-press methods since 1994.", "1994 से शुद्धतम कोल्ड-प्रेस विधियों के माध्यम से तरल सोना तैयार कर रहे हैं।")}
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-all"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-all"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-label-bold mb-6">{t("Quick Links", "त्वरित लिंक")}</h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-surface-variant opacity-70 hover:opacity-100 transition-opacity font-body-md"
                to="/about-us"
              >
                {t("About Us", "हमारे बारे में")}
              </Link>
            </li>
            <li>
              <Link
                className="text-surface-variant opacity-70 hover:opacity-100 transition-opacity font-body-md"
                to="/gallery"
              >
                {t("Gallery", "गैलरी")}
              </Link>
            </li>
            <li>
              <Link
                className="text-surface-variant opacity-70 hover:opacity-100 transition-opacity font-body-md"
                to="/products"
              >
                {t("Products", "उत्पाद")}
              </Link>
            </li>
            <li>
              <Link
                className="text-surface-variant opacity-70 hover:opacity-100 transition-opacity font-body-md"
                to="/manufacturing"
              >
                {t("Manufacturing", "निर्माण")}
              </Link>
            </li>
            <li>
              <Link
                className="text-surface-variant opacity-70 hover:opacity-100 transition-opacity font-body-md"
                to="/contact"
              >
                {t("Bulk Orders", "थोक आदेश")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-label-bold mb-6">{t("Support", "समर्थन")}</h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-surface-variant opacity-70 hover:opacity-100 transition-opacity font-body-md"
                to="/contact"
              >
                {t("Contact Us", "संपर्क करें")}
              </Link>
            </li>
            <li>
              <a
                className="text-surface-variant opacity-70 hover:opacity-100 transition-opacity font-body-md flex items-center gap-2"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">call</span>{" "}
                {t("WhatsApp Support", "व्हाट्सएप सपोर्ट")}
              </a>
            </li>
            <li>
              <Link
                className="text-surface-variant opacity-70 hover:opacity-100 transition-opacity font-body-md"
                to="/certificates"
              >
                {t("Certificates", "प्रमाणपत्र")}
              </Link>
            </li>
            <li>
              <Link
                className="text-surface-variant opacity-70 hover:opacity-100 transition-opacity font-body-md"
                to="/testimonials"
              >
                {t("Testimonials", "प्रशंसापत्र")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-label-bold mb-6">{t("Newsletter", "न्यूज़लेटर")}</h4>
          <p className="text-surface-variant opacity-70 text-sm mb-4">
            {t("Stay updated on health tips and new arrivals.", "स्वास्थ्य युक्तियों और नए आगमन पर अपडेट रहें।")}
          </p>
          <div className="flex">
            <input
              className="bg-surface-container-highest/10 border-none rounded-l-full px-4 py-2 w-full text-white placeholder-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={t("Email", "ईमेल")}
              type="email"
            />
            <button className="bg-secondary-fixed text-on-secondary-fixed rounded-r-full px-4 py-2 font-label-bold hover:brightness-110 transition-all cursor-pointer">
              {t("Join", "शामिल हों")}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-10 border-t border-outline-variant px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-body-md text-body-md text-surface-variant opacity-70">
          © 2024 Chaskilyf. {t("Crafted for Purity.", "शुद्धता के लिए तैयार किया गया।")}
        </span>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-surface-variant opacity-50">
            payments
          </span>
          <span className="material-symbols-outlined text-surface-variant opacity-50">
            shopping_bag
          </span>
          <span className="material-symbols-outlined text-surface-variant opacity-50">
            credit_card
          </span>
        </div>
      </div>
    </footer>
  );
}
