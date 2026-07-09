import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HiArrowRight, HiStar, HiChevronLeft, HiChevronRight,
  HiSparkles, HiShieldCheck, HiHeart, HiGlobeAlt,
  HiTruck, HiArrowPath, HiLockClosed, HiChatBubbleLeftRight
} from 'react-icons/hi2';
import { products, categories, collections, testimonials, guides } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../i18n/LanguageContext';
import './Home.css';

const BASE = import.meta.env.BASE_URL;
const press = ["VOGUE", "ELLE", "allure", "BYRDIE", "COSMOPOLITAN"];

export default function Home() {
  const { t, tp, tcol, ttm, tg } = useLanguage();
  const [slide, setSlide] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSub, setNewsSub] = useState(false);
  const bestsellers = products.filter(p => p.bestseller).map(tp);
  const localizedCollections = collections.map(tcol);
  const localizedTestimonials = testimonials.map(ttm);
  const localizedGuides = guides.slice(0, 4).map(tg);

  const heroSlides = [
    { label: t('home.hero1Label'), title: "Reveal Your\nNatural Beauty", subtitle: t('home.hero1Sub'), cta: t('home.hero1Cta'), link: "/shop", image: `${BASE}images/hero-main.jpg` },
    { label: t('home.hero2Label'), title: "Glow From\nWithin", subtitle: t('home.hero2Sub'), cta: t('home.hero2Cta'), link: "/shop", image: `${BASE}images/skincare.jpg` },
    { label: t('home.hero3Label'), title: "Summer Glow\nUp to 30% Off", subtitle: t('home.hero3Sub'), cta: t('home.hero3Cta'), link: "/shop", image: `${BASE}images/hero-summer.jpg` },
  ];

  const trustBadges = [
    { icon: <HiSparkles size={22} />, label: t('home.trustQuality'), sub: t('home.trustQualitySub') },
    { icon: <HiShieldCheck size={22} />, label: t('home.trustDerm'), sub: t('home.trustDermSub') },
    { icon: <HiHeart size={22} />, label: t('home.trustCruelty'), sub: t('home.trustCrueltySub') },
    { icon: <HiGlobeAlt size={22} />, label: t('home.trustShip'), sub: t('home.trustShipSub') },
  ];

  const whyItems = [
    { icon: <HiSparkles size={28} color="var(--rose-500)" />, title: t('home.why1Title'), desc: t('home.why1Desc') },
    { icon: <HiShieldCheck size={28} color="var(--rose-500)" />, title: t('home.why2Title'), desc: t('home.why2Desc') },
    { icon: <HiHeart size={28} color="var(--rose-500)" />, title: t('home.why3Title'), desc: t('home.why3Desc') },
    { icon: <HiGlobeAlt size={28} color="var(--rose-500)" />, title: t('home.why4Title'), desc: t('home.why4Desc') },
  ];

  const services = [
    { icon: <HiTruck size={28} />, title: t('home.serviceShipTitle'), sub: t('home.serviceShipSub') },
    { icon: <HiArrowPath size={28} />, title: t('home.serviceReturnTitle'), sub: t('home.serviceReturnSub') },
    { icon: <HiLockClosed size={28} />, title: t('home.servicePayTitle'), sub: t('home.servicePaySub') },
    { icon: <HiChatBubbleLeftRight size={28} />, title: t('home.serviceSupportTitle'), sub: t('home.serviceSupportSub') },
  ];

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5500);
    return () => clearInterval(timer);
  }, []);

  const current = heroSlides[slide];

  return (
    <main className="home">

      {/* 1. HERO */}
      <section className="hero">
        <img src={current.image} alt="Hero" key={slide} className="hero__bg-img" />
        <div className="hero__scrim" />
        <div className="hero__overlay">
          <p className="section-label hero__label">{current.label}</p>
          <h1 className="hero__title">{current.title}</h1>
          <p className="hero__subtitle">{current.subtitle}</p>
          <Link to={current.link} className="btn-primary">
            {current.cta} <HiArrowRight size={16} />
          </Link>
        </div>
        <div className="hero__nav">
          <button className="hero__nav-btn" onClick={() => setSlide(s => (s - 1 + heroSlides.length) % heroSlides.length)}><HiChevronLeft size={18} /></button>
          <div className="hero__dots">{heroSlides.map((_, i) => <button key={i} className={`hero__dot ${i === slide ? 'active' : ''}`} onClick={() => setSlide(i)} />)}</div>
          <button className="hero__nav-btn" onClick={() => setSlide(s => (s + 1) % heroSlides.length)}><HiChevronRight size={18} /></button>
        </div>
      </section>

      {/* 2. TRUST ICONS */}
      <section className="trust">
        <div className="container trust__inner">
          {trustBadges.map(b => (
            <div key={b.label} className="trust__item">
              <span className="trust__icon">{b.icon}</span>
              <div><strong>{b.label}</strong><small>{b.sub}</small></div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COLLECTIONS */}
      <section className="section collections-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-label">{t('home.collectionsLabel')}</p>
              <h2 className="section-title">{t('home.collectionsTitle')}</h2>
              <p className="section-subtitle">{t('home.collectionsSubtitle')}</p>
            </div>
            <Link to="/collections" className="view-all hide-mobile">{t('common.viewAll').toUpperCase()}</Link>
          </div>
          <div className="collections-grid">
            {localizedCollections.map(col => (
              <Link key={col.id} to={`/shop?category=${col.name}`} className="collection-card">
                <div className="collection-card__img"><img src={col.image} alt={col.name} loading="lazy" /></div>
                <div className="collection-card__info"><h3>{col.name}</h3><p>{col.subtitle}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BEST SELLERS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div><p className="section-label">{t('home.bestLabel')}</p><h2 className="section-title">{t('home.bestTitle')}</h2></div>
            <Link to="/shop" className="view-all hide-mobile">{t('common.viewAll').toUpperCase()}</Link>
          </div>
          <div className="products-grid">{bestsellers.map(p => <ProductCard key={p.id} product={p} />)}</div>
        </div>
      </section>

      {/* 5. SALE BANNER */}
      <section className="sale-banner-wide">
        <img src={`${BASE}images/baner-30.jpg`} alt="Summer Glow Sale" className="sale-banner-wide__img" />
        <div className="sale-banner-wide__overlay" />
        <div className="container sale-banner-wide__content">
          <p className="sale-banner-wide__eye">{t('home.saleEyebrow')}</p>
          <h2>{t('home.saleTitle')}</h2>
          <p>{t('home.saleSubtitle')}</p>
          <Link to="/shop" className="btn-primary">{t('common.shopNow')}</Link>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="section why-section">
        <div className="container why-section__inner">
          <div className="why-section__text">
            <p className="section-label">{t('home.whyLabel')}</p>
            <h2 className="section-title">{t('home.whyTitle')}</h2>
            <div className="why-grid">
              {whyItems.map(w => (
                <div key={w.title} className="why-item">
                  <span className="why-item__icon">{w.icon}</span>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-outline">{t('common.learnMore')}</Link>
          </div>
          <div className="why-section__img why-section__img--large"><img src={`${BASE}images/whychoose.jpg`} alt="Why Lumière" /></div>
        </div>
      </section>

      {/* 7. BEAUTY GUIDES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-label">{t('home.guidesLabel')}</p>
              <h2 className="section-title">{t('home.guidesTitle')}</h2>
              <p className="section-subtitle">{t('home.guidesSubtitle')}</p>
            </div>
            <Link to="/guides" className="view-all hide-mobile">{t('common.viewAll').toUpperCase()}</Link>
          </div>
          <div className="guides-grid">
            {localizedGuides.map(g => (
              <Link key={g.id} to={`/guides/${g.id}`} className="guide-card">
                <div className="guide-card__img">
                  <img src={g.image} alt={g.title} loading="lazy" />
                  <span className="guide-card__cat">{g.category}</span>
                </div>
                <div className="guide-card__info">
                  <small>{g.date}</small>
                  <h4>{g.title}</h4>
                  <p>{g.excerpt}</p>
                  <span className="view-all" style={{ marginTop: '0.5rem', display: 'inline-block' }}>{t('common.readMore')} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SHOP BY CATEGORY */}
      <section className="section category-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-label">{t('home.categoryLabel')}</p>
              <h2 className="section-title">{t('home.categoryTitle')}</h2>
            </div>
            <Link to="/shop" className="view-all hide-mobile">{t('common.viewAll').toUpperCase()}</Link>
          </div>
          <div className="categories-grid">
            {categories.map(cat => (
              <Link key={cat.id} to={`/shop?subcategory=${cat.name}`} className="category-chip">
                <div className="category-chip__img"><img src={cat.image} alt={cat.name} loading="lazy" /></div>
                <span>{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NEW IN SKINCARE */}
      <section className="new-in-banner">
        <div className="container new-in-banner__inner">
          <div className="new-in-banner__text">
            <p className="section-label" style={{ color: 'var(--rose-500)' }}>{t('home.newInLabel')}</p>
            <h2 className="section-title">{t('home.newInTitle')}</h2>
            <p className="section-subtitle">{t('home.newInSubtitle')}</p>
            <Link to="/shop?category=Skincare" className="btn-primary">{t('home.discoverNow')} <HiArrowRight size={15} /></Link>
          </div>
          <div className="new-in-banner__img"><img src={`${BASE}images/sobre-nosotros.jpg`} alt="New Skincare" /></div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="testimonials-layout">
            <div className="testimonials-img"><img src={`${BASE}images/testimonio.jpg`} alt="Happy customer" /></div>
            <div className="testimonials-content">
              <p className="section-label">{t('home.reviewsLabel')}</p>
              <h2 className="section-title">{t('home.reviewsTitle')}</h2>
              <div className="testimonial-card">
                <div className="testimonial-stars">{[...Array(5)].map((_, i) => <HiStar key={i} size={16} color="var(--gold)" />)}</div>
                <blockquote>"{localizedTestimonials[testimonialIdx].text}"</blockquote>
                <cite>— {localizedTestimonials[testimonialIdx].name}, {localizedTestimonials[testimonialIdx].location}</cite>
                <small>{localizedTestimonials[testimonialIdx].product}</small>
              </div>
              <div className="testimonial-nav">
                <button onClick={() => setTestimonialIdx(i => (i - 1 + testimonials.length) % testimonials.length)}><HiChevronLeft size={18} /></button>
                <div className="testimonial-dots">{testimonials.map((_, i) => <button key={i} className={`hero__dot ${i === testimonialIdx ? 'active' : ''}`} onClick={() => setTestimonialIdx(i)} />)}</div>
                <button onClick={() => setTestimonialIdx(i => (i + 1) % testimonials.length)}><HiChevronRight size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TRUSTED BY */}
      <section className="press-section">
        <div className="container">
          <p className="press-section__label">{t('home.trustedBy')}</p>
          <div className="press-logos">{press.map(p => <span key={p} className="press-logo">{p}</span>)}</div>
        </div>
      </section>

      {/* 12. NEWSLETTER */}
      <section className="newsletter-section">
        <div className="container newsletter-section__inner">
          <div className="newsletter-section__text">
            <p className="section-label" style={{ color: 'var(--rose-500)' }}>{t('home.exclusiveLabel')}</p>
            <h2 className="section-title">{t('home.stayGlowing')}</h2>
            <p className="section-subtitle">{t('home.newsletterSubtitle')}</p>
            {newsSub ? (
              <div className="newsletter-success">{t('home.newsletterThanks')}</div>
            ) : (
              <form className="newsletter-form" onSubmit={e => { e.preventDefault(); if (newsEmail) setNewsSub(true); }}>
                <input type="email" placeholder={t('footer.emailPlaceholder')} value={newsEmail} onChange={e => setNewsEmail(e.target.value)} required />
                <button type="submit" className="btn-rose">{t('footer.subscribe')}</button>
              </form>
            )}
          </div>
          <div className="newsletter-section__img"><img src={`${BASE}images/fragrance.jpg`} alt="Gift" /></div>
        </div>
      </section>

      {/* 13. SERVICE ICONS */}
      <section className="services-row">
        <div className="container services-row__inner">
          {services.map(s => (
            <div key={s.title} className="service-item">
              <span className="service-item__icon">{s.icon}</span>
              <div><strong>{s.title}</strong><small>{s.sub}</small></div>
            </div>
          ))}
        </div>
      </section>

      {/* 14. INSTAGRAM */}
      <section className="instagram-section">
        <div className="container">
          <p className="instagram-section__label">{t('home.instagramLabel')}</p>
          <p className="instagram-section__handle">@lumiere.beauty</p>
          <div className="instagram-grid">
            {[`${BASE}images/skincare.jpg`,`${BASE}images/hero-main.jpg`,`${BASE}images/whychoose.jpg`,`${BASE}images/moisturizer.jpg`,`${BASE}images/serum.jpg`,`${BASE}images/fragrance.jpg`].map((src, i) => (
              <a key={i} href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram-item">
                <img src={src} alt={`Instagram ${i + 1}`} loading="lazy" />
                <div className="instagram-item__overlay"><HiStar size={22} /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
