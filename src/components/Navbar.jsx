import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { HiMagnifyingGlass, HiUser, HiShoppingBag, HiHeart, HiBars3, HiXMark, HiLanguage } from 'react-icons/hi2';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../i18n/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const { count, setIsOpen } = useCart();
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cierra el menú móvil al cambiar de ruta y al presionar Escape
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) { navigate(`/shop?search=${query}`); setSearchOpen(false); setQuery(''); }
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/shop', label: t('nav.shop') },
    { to: '/collections', label: t('nav.collections') },
    { to: '/skincare', label: t('nav.skincare') },
    { to: '/makeup', label: t('nav.makeup') },
    { to: '/guides', label: t('nav.guides') },
    { to: '/about', label: t('nav.about') },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <span className="navbar__logo-main">Lumière</span>
            <span className="navbar__logo-sub">Beauty</span>
          </Link>
          <ul className="navbar__links">
            {navLinks.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
          <div className="navbar__icons">
            <button className="navbar__icon-btn" onClick={() => setSearchOpen(s => !s)} aria-label={t('nav.search')}><HiMagnifyingGlass size={20} /></button>
            <button className="navbar__lang-btn" onClick={toggleLang} aria-label={t('langSwitch.label')} title={t('langSwitch.label')}>
              <HiLanguage size={17} /><span>{lang.toUpperCase()}</span>
            </button>
            <Link to="/account" className="navbar__icon-btn" aria-label={t('nav.account')}><HiUser size={20} /></Link>
            <Link to="/wishlist" className="navbar__icon-btn" aria-label={t('nav.wishlist')}><HiHeart size={20} /></Link>
            <button className="navbar__icon-btn navbar__cart-btn" onClick={() => setIsOpen(true)} aria-label={t('nav.cart')}>
              <HiShoppingBag size={20} />
              {count > 0 && <span className="navbar__cart-badge">{count}</span>}
            </button>
            <button className="navbar__icon-btn navbar__hamburger" onClick={() => setMenuOpen(m => !m)} aria-label={t('nav.menu')}>
              {menuOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="navbar__search">
            <form onSubmit={handleSearch} className="navbar__search-form">
              <HiMagnifyingGlass size={16} />
              <input autoFocus type="text" placeholder={t('nav.searchPlaceholder')} value={query} onChange={e => setQuery(e.target.value)} />
              <button type="button" onClick={() => setSearchOpen(false)}><HiXMark size={16} /></button>
            </form>
          </div>
        )}
      </nav>
      {menuOpen && (
        <>
          <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)} />
          <div className="mobile-menu">
            <button className="mobile-menu__close" onClick={() => setMenuOpen(false)} aria-label={t('nav.close')}>
              <HiXMark size={22} /> <span>{t('nav.close')}</span>
            </button>
            <ul>{navLinks.map(l => <li key={l.to}><NavLink to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</NavLink></li>)}</ul>
            <button className="mobile-menu__lang" onClick={toggleLang}>
              <HiLanguage size={17} /> {lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            </button>
          </div>
        </>
      )}
    </>
  );
}
