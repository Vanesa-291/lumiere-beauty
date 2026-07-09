import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
export default function NotFound() {
  const { t } = useLanguage();
  return (
    <main style={{ paddingTop:'68px', minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', flexDirection:'column', gap:'1.5rem' }}>
      <p style={{ fontSize:'5rem', fontFamily:'var(--font-display)', color:'var(--rose-200)' }}>404</p>
      <h2 style={{ fontFamily:'var(--font-display)', fontSize:'2rem' }}>{t('notFound.title')}</h2>
      <p style={{ color:'var(--gray-500)' }}>{t('notFound.text')}</p>
      <Link to="/" className="btn-primary">{t('notFound.backHome')}</Link>
    </main>
  );
}
