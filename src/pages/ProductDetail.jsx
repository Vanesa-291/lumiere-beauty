import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiStar, HiHeart, HiShoppingBag, HiArrowLeft, HiCheckCircle, HiTruck, HiArrowPath, HiLockClosed } from 'react-icons/hi2';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../i18n/LanguageContext';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { t, tp } = useLanguage();
  const rawProduct = products.find(p => p.id === Number(id));
  const product = rawProduct ? tp(rawProduct) : null;
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [tab, setTab] = useState('description');
  const isWished = wishlist.includes(product?.id);

  const related = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  if (!product) return (
    <main style={{ padding: '10rem 2rem', textAlign: 'center' }}>
      <h2>{t('productDetail.notFound')}</h2>
      <Link to="/shop" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>{t('productDetail.backToStore')}</Link>
    </main>
  );

  const handleAdd = () => { addToCart(product, qty); setAdded(true); setTimeout(() => setAdded(false), 2000); };
  const tabLabels = { description: t('productDetail.description'), benefits: t('productDetail.benefits'), reviews: t('productDetail.reviews') };

  return (
    <main className="product-detail">
      <div className="container">
        <Link to="/shop" className="product-detail__back"><HiArrowLeft size={15} /> {t('productDetail.backToShop')}</Link>
        <div className="product-detail__main">
          <div className="product-detail__gallery">
            <div className="product-detail__img">
              <img src={product.image} alt={product.name} />
              {product.badge && <span className={`badge ${product.badge === 'Sale' ? 'badge-sale' : 'badge-new'}`}>{product.badge}</span>}
            </div>
          </div>
          <div className="product-detail__info">
            <p className="section-label">{product.category}</p>
            <h1 className="product-detail__name">{product.name}</h1>
            <div className="product-detail__rating">
              <div className="product-detail__stars">{[...Array(5)].map((_, i) => <HiStar key={i} size={16} color={i < Math.floor(product.rating) ? 'var(--gold)' : 'var(--gray-300)'} />)}</div>
              <span>{product.rating}</span>
              <span className="product-detail__reviews">({product.reviews} {t('common.reviews')})</span>
            </div>
            <div className="product-detail__price">
              <span className="product-detail__current">${product.price}</span>
              {product.originalPrice && <span className="product-detail__original">${product.originalPrice}</span>}
            </div>
            <p className="product-detail__desc">{product.description}</p>
            <div className="product-detail__benefits">
              {product.benefits.map(b => <div key={b} className="product-detail__benefit"><HiCheckCircle size={16} color="var(--rose-500)" /><span>{b}</span></div>)}
            </div>
            <div className="product-detail__actions">
              <div className="product-detail__qty">
                <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(q => q + 1)}>+</button>
              </div>
              <button className={`btn-primary product-detail__add ${added ? 'added' : ''}`} onClick={handleAdd}>
                <HiShoppingBag size={16} />{added ? t('productDetail.added') : t('productDetail.addToCart')}
              </button>
              <button className={`product-detail__wish ${isWished ? 'wished' : ''}`} onClick={() => toggleWishlist(product.id)}>
                <HiHeart size={20} fill={isWished ? 'currentColor' : 'none'} />
              </button>
            </div>
            <div className="product-detail__shipping">
              <span><HiTruck size={15} /> {t('productDetail.freeShip')}</span>
              <span><HiArrowPath size={15} /> {t('productDetail.easyReturns')}</span>
              <span><HiLockClosed size={15} /> {t('productDetail.securePay')}</span>
            </div>
          </div>
        </div>
        <div className="product-detail__tabs">
          {['description','benefits','reviews'].map(tabKey => <button key={tabKey} className={`product-detail__tab ${tab === tabKey ? 'active' : ''}`} onClick={() => setTab(tabKey)}>{tabLabels[tabKey]}</button>)}
        </div>
        <div className="product-detail__tab-content">
          {tab === 'description' && <p>{product.description}</p>}
          {tab === 'benefits' && <ul className="product-detail__benefits-list">{product.benefits.map(b => <li key={b}><HiCheckCircle size={15} color="var(--rose-500)" /> {b}</li>)}</ul>}
          {tab === 'reviews' && <div className="product-detail__reviews-section"><div className="product-detail__reviews-summary"><span className="big-rating">{product.rating}</span><div><div className="star-row">{[...Array(5)].map((_, i) => <HiStar key={i} size={20} color="var(--gold)" />)}</div><p>{product.reviews} {t('productDetail.verifiedReviews')}</p></div></div></div>}
        </div>
        {related.length > 0 && (
          <section className="product-detail__related">
            <div className="section-header"><div><p className="section-label">{t('productDetail.relatedLabel')}</p><h2 className="section-title">{t('productDetail.relatedTitle')}</h2></div></div>
            <div className="products-grid">{related.map(p => <ProductCard key={p.id} product={p} />)}</div>
          </section>
        )}
      </div>
    </main>
  );
}
