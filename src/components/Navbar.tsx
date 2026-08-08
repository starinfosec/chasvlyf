import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const linkClass = (path: string, isMobile: boolean = false) => {
    const transparent = isTransparent && !isMobile;
    return `font-label-bold text-sm xl:text-base transition-colors ${isActive(path)
        ? (transparent ? "text-white border-b-2 border-white pb-1" : "text-primary border-b-2 border-primary pb-1")
        : (transparent ? "text-white/90 hover:text-white" : "text-on-surface-variant hover:text-primary")
      }`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isHomePage = location.pathname === '/' || location.pathname === '/hindi';
  const isTransparent = isHomePage && !isScrolled;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent border-transparent py-2"
          : "backdrop-blur-xl border-b border-white/20 bg-white/90 shadow-md py-1"
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-1 max-w-container-max mx-auto relative">
        <Link to="/" className="flex items-center gap-2 xl:gap-3 shrink-0" onClick={closeMobileMenu}>
          <img
            alt="Chaskilyf Logo"
            className="h-16 md:h-16 xl:h-20 w-auto object-contain transition-all duration-300"
            src="/logo.png"
          />
        </Link>

        <div className="hidden xl:flex gap-4 2xl:gap-8 items-center">
          <Link className={linkClass("/")} to="/">{t("Home", "होम")}</Link>
          <Link className={linkClass("/about-us")} to="/about-us">{t("About Us", "हमारे बारे में")}</Link>
          <Link className={linkClass("/products")} to="/products">{t("Products", "उत्पाद")}</Link>
          <Link className={linkClass("/manufacturing")} to="/manufacturing">{t("Manufacturing", "निर्माण")}</Link>
          <Link className={linkClass("/certificates")} to="/certificates">{t("Certificates", "प्रमाणपत्र")}</Link>
          <Link className={linkClass("/testimonials")} to="/testimonials">{t("Testimonials", "प्रशंसापत्र")}</Link>
          <Link className={linkClass("/gallery")} to="/gallery">{t("Gallery", "गैलरी")}</Link>
          <Link className={linkClass("/contact")} to="/contact">{t("Contact", "संपर्क करें")}</Link>
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 font-label-bold text-sm xl:text-base transition-colors ${
              isTransparent ? "text-white hover:text-white/80" : "text-primary hover:text-secondary"
            }`}
          >
            <span className="material-symbols-outlined text-sm">language</span>
            {language === 'en' ? 'HI' : 'EN'}
          </button>
          <Link to="/contact" className="bg-primary text-on-primary rounded-full px-5 py-2 text-sm xl:text-base font-label-bold hover:opacity-80 transition-all duration-300 whitespace-nowrap">
            {t("Enquire Now", "पूछताछ करें")}
          </Link>
        </div>

        <button
          className={`xl:hidden p-2 focus:outline-none ${isTransparent ? "text-white" : "text-primary"}`}
          onClick={toggleMobileMenu}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-outline-variant overflow-y-auto transition-all duration-300 ${isMobileMenuOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col py-6 px-margin-mobile md:px-margin-desktop gap-6">
          <Link className={linkClass("/", true)} to="/" onClick={closeMobileMenu}>{t("Home", "होम")}</Link>
          <Link className={linkClass("/about-us", true)} to="/about-us" onClick={closeMobileMenu}>{t("About Us", "हमारे बारे में")}</Link>
          <Link className={linkClass("/products", true)} to="/products" onClick={closeMobileMenu}>{t("Products", "उत्पाद")}</Link>
          <Link className={linkClass("/manufacturing", true)} to="/manufacturing" onClick={closeMobileMenu}>{t("Manufacturing", "निर्माण")}</Link>
          <Link className={linkClass("/certificates", true)} to="/certificates" onClick={closeMobileMenu}>{t("Certificates", "प्रमाणपत्र")}</Link>
          <Link className={linkClass("/testimonials", true)} to="/testimonials" onClick={closeMobileMenu}>{t("Testimonials", "प्रशंसापत्र")}</Link>
          <Link className={linkClass("/gallery", true)} to="/gallery" onClick={closeMobileMenu}>{t("Gallery", "गैलरी")}</Link>
          <Link className={linkClass("/contact", true)} to="/contact" onClick={closeMobileMenu}>{t("Contact", "संपर्क करें")}</Link>
          <button
            onClick={() => { toggleLanguage(); closeMobileMenu(); }}
            className="flex items-center gap-2 font-label-bold text-sm xl:text-base text-primary hover:text-secondary transition-colors"
          >
            <span className="material-symbols-outlined">language</span>
            {language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
          </button>
          <Link to="/contact" className="bg-primary text-on-primary rounded-full px-6 py-3 text-center font-label-bold hover:opacity-80 transition-all duration-300 mt-2" onClick={closeMobileMenu}>
            {t("Enquire Now", "पूछताछ करें")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
