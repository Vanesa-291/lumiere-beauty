import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import { RiInstagramLine, RiFacebookLine, RiTwitterXLine, RiYoutubeLine, RiTiktokLine } from 'react-icons/ri';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e) => { e.preventDefault(); if (email) { setSubscribed(true); setEmail(''); } };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo"><span>Lumière</span><small>Beauty</small></Link>
            <p>{t('footer.tagline')}</p>
            <div className="footer__socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><RiInstagramLine size={18} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><RiFacebookLine size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><RiTwitterXLine size={16} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><RiYoutubeLine size={18} /></a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok"><RiTiktokLine size={16} /></a>
            </div>
          </div>
          <div className="footer__col">
            <h4>{t('footer.shop')}</h4>
            <ul>
              <li><Link to="/shop">{t('footer.allProducts')}</Link></li>
              <li><Link to="/shop?category=Skincare">{t('footer.skincare')}</Link></li>
              <li><Link to="/shop?category=Makeup">{t('footer.makeup')}</Link></li>
              <li><Link to="/shop?category=Body Care">{t('footer.bodyCare')}</Link></li>
              <li><Link to="/shop?category=Fragrance">{t('footer.fragrance')}</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>{t('footer.customerCare')}</h4>
            <ul>
              <li><Link to="/about#contact">{t('footer.contact')}</Link></li>
              <li><Link to="/about#shipping">{t('footer.shipping')}</Link></li>
              <li><Link to="/about#returns">{t('footer.returns')}</Link></li>
              <li><Link to="/about#faqs">{t('footer.faqs')}</Link></li>
              <li><Link to="/about#track-order">{t('footer.trackOrder')}</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>{t('footer.aboutUs')}</h4>
            <ul>
              <li><Link to="/about#story">{t('footer.ourStory')}</Link></li>
              <li><Link to="/about#ingredients">{t('footer.ingredients')}</Link></li>
              <li><Link to="/about#sustainability">{t('footer.sustainability')}</Link></li>
              <li><Link to="/about#careers">{t('footer.careers')}</Link></li>
              <li><Link to="/about#press">{t('footer.press')}</Link></li>
            </ul>
          </div>
          <div className="footer__newsletter">
            <h4>{t('footer.newsletter')}</h4>
            <p>{t('footer.newsletterText')}</p>
            {subscribed ? (
              <div className="footer__subscribed">{t('footer.subscribed')}</div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer__form">
                <input type="email" placeholder={t('footer.emailPlaceholder')} value={email} onChange={e => setEmail(e.target.value)} required />
                <button type="submit" className="btn-rose">{t('footer.subscribe')} <HiArrowRight size={13} /></button>
              </form>
            )}
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2026 Lumière Beauty. {t('footer.rights')}</p>
          <div className="footer__payments">
            <svg width="38" height="24" viewBox="0 0 48 32" aria-label="Visa"><rect width="48" height="32" rx="4" fill="#fff"/><text x="24" y="21" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontStyle="italic" fontSize="13" fill="#1A1F71">VISA</text></svg>
            <svg width="38" height="24" viewBox="0 0 48 32" aria-label="Mastercard"><rect width="48" height="32" rx="4" fill="#fff"/><circle cx="20" cy="16" r="9" fill="#EB001B"/><circle cx="28" cy="16" r="9" fill="#F79E1B" fillOpacity="0.9"/></svg>
            <svg width="38" height="24" viewBox="0 0 48 32" aria-label="PayPal"><rect width="48" height="32" rx="4" fill="#fff"/><text x="24" y="20" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontStyle="italic" fontSize="10" fill="#003087">Pay</text><text x="24" y="20" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontStyle="italic" fontSize="10" fill="#009cde" dx="9">Pal</text></svg>
            <svg width="38" height="24" viewBox="0 0 48 32" aria-label="American Express"><rect width="48" height="32" rx="4" fill="#2E77BC"/><text x="24" y="20" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="8" fill="#fff">AMEX</text></svg>
            <svg width="38" height="24" viewBox="0 0 48 32" aria-label="Discover"><rect width="48" height="32" rx="4" fill="#fff"/><text x="22" y="20" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="7" fill="#1a1a1a">DISCOVER</text><circle cx="40" cy="22" r="5" fill="#F58220"/></svg>
            <svg width="38" height="24" viewBox="0 0 48 32" aria-label="Apple Pay"><rect width="48" height="32" rx="4" fill="#000"/><text x="24" y="20" textAnchor="middle" fontFamily="-apple-system, Arial, sans-serif" fontWeight="600" fontSize="9" fill="#fff"> Pay</text></svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
