import { Link } from 'react-router-dom';
import { guides } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';
import './Guides.css';

export default function Guides() {
  const { t, tg } = useLanguage();
  const localizedGuides = guides.map(tg);

  return (
    <main className="guides-page">
      <div className="guides-page__header">
        <div className="container">
          <p className="section-label">{t('guides.label')}</p>
          <h1 className="section-title">{t('guides.title')}</h1>
          <p className="section-subtitle">{t('guides.subtitle')}</p>
        </div>
      </div>
      <div className="container guides-page__body">
        <div className="guides-page__grid">
          {localizedGuides.map((g) => (
            <Link key={g.id} to={`/guides/${g.id}`} className="guide-card-full">
              <div className="guide-card-full__img">
                <img src={g.image} alt={g.title} loading="lazy" />
                <span className="guide-card__cat">{g.category}</span>
              </div>
              <div className="guide-card-full__info">
                <small>{g.date}</small>
                <h3>{g.title}</h3>
                <p>{g.excerpt}</p>
                <span className="view-all">{t('common.readMore')} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
