import { createContext, useContext, useState, useEffect } from 'react';
import { ui } from './translations';
import { productsES, collectionsES, testimonialsES, guidesES } from './content-es';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lumiere_lang') || 'en');

  useEffect(() => {
    localStorage.setItem('lumiere_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang(l => (l === 'en' ? 'es' : 'en'));

  // t('nav.home') -> looks up ui[lang].nav.home, falls back to English, then to the key itself
  const t = (path) => {
    const walk = (obj) => path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
    return walk(ui[lang]) ?? walk(ui.en) ?? path;
  };

  // Merge an English base object with its Spanish override (by id) when lang === 'es'
  const localize = (item, dict) => (lang === 'es' && dict[item.id] ? { ...item, ...dict[item.id] } : item);
  const tp = (product) => localize(product, productsES);
  const tcol = (collection) => localize(collection, collectionsES);
  const ttm = (testimonial) => localize(testimonial, testimonialsES);
  const tg = (guide) => localize(guide, guidesES);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, tp, tcol, ttm, tg }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
