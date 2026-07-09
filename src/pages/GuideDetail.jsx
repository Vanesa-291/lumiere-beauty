import { useParams, Link } from 'react-router-dom';
import { HiArrowLeft, HiOutlineClock, HiOutlineUser } from 'react-icons/hi2';
import { guides } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';
import './GuideDetail.css';

export default function GuideDetail() {
  const { id } = useParams();
  const { t, tg } = useLanguage();
  const rawGuide = guides.find(g => g.id === Number(id));
  const guide = rawGuide ? tg(rawGuide) : null;
  const related = guides.filter(g => g.id !== Number(id)).slice(0, 3).map(tg);

  if (!guide) return (
    <main style={{ padding: '10rem 2rem', textAlign: 'center' }}>
      <h2>{t('guides.notFound')}</h2>
      <Link to="/guides" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>{t('guides.backToGuides')}</Link>
    </main>
  );

  return (
    <main className="guide-detail">
      <div className="guide-detail__hero">
        <img src={guide.image} alt={guide.title} className="guide-detail__hero-img" />
        <div className="guide-detail__scrim" />
        <div className="container guide-detail__hero-content">
          <Link to="/guides" className="guide-detail__back"><HiArrowLeft size={15} /> {t('guides.backToGuides')}</Link>
          <span className="guide-card__cat guide-detail__cat">{guide.category}</span>
          <h1>{guide.title}</h1>
          <div className="guide-detail__meta">
            <span><HiOutlineUser size={15} /> {guide.author}</span>
            <span><HiOutlineClock size={15} /> {guide.readTime}</span>
            <span>{guide.date}</span>
          </div>
        </div>
      </div>

      <div className="container guide-detail__body">
        <article className="guide-detail__article">
          <p className="guide-detail__excerpt">{guide.excerpt}</p>
          {guide.content.map((block, i) => (
            <section key={i} className="guide-detail__section">
              <h2>{block.heading}</h2>
              <p>{block.text}</p>
            </section>
          ))}
          <div className="guide-detail__cta">
            <p>{t('guides.ctaText')}</p>
            <Link to="/shop" className="btn-primary">{t('guides.discoverProducts')}</Link>
          </div>
        </article>

        {related.length > 0 && (
          <aside className="guide-detail__related">
            <h3>{t('guides.moreGuides')}</h3>
            {related.map(g => (
              <Link key={g.id} to={`/guides/${g.id}`} className="guide-detail__related-item">
                <img src={g.image} alt={g.title} loading="lazy" />
                <div>
                  <span className="guide-card__cat">{g.category}</span>
                  <h4>{g.title}</h4>
                </div>
              </Link>
            ))}
          </aside>
        )}
      </div>
    </main>
  );
}
