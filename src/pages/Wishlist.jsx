import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../i18n/LanguageContext';
import './Wishlist.css';

export default function Wishlist() {
  const { wishlist } = useCart();
  const { t } = useLanguage();
  const wishedProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <main className="wishlist-page">
      <div className="wishlist-page__header">
        <div className="container">
          <p className="section-label">{t('wishlist.myAccount')}</p>
          <h1 className="section-title">{t('wishlist.title')}</h1>
          <p className="section-subtitle">{wishedProducts.length} {wishedProducts.length !== 1 ? t('wishlist.savedPlural') : t('wishlist.saved')}</p>
        </div>
      </div>
      <div className="container wishlist-page__body">
        {wishedProducts.length === 0 ? (
          <div className="wishlist-empty">
            <span>🤍</span>
            <h3>{t('wishlist.empty')}</h3>
            <p>{t('wishlist.emptyText')}</p>
            <Link to="/shop" className="btn-primary">{t('wishlist.explore')}</Link>
          </div>
        ) : (
          <div className="products-grid">
            {wishedProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </main>
  );
}
