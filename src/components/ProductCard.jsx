import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiHeart, HiShoppingBag, HiStar } from 'react-icons/hi2';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../i18n/LanguageContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const { t } = useLanguage();
  const [added, setAdded] = useState(false);
  const isWished = wishlist.includes(product.id);

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : null;

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className={`badge ${product.badge === 'Sale' ? 'badge-sale' : 'badge-new'}`}>{product.badge === 'Sale' && discount ? `-${discount}%` : product.badge}</span>}
        <button className={`product-card__wish ${isWished ? 'wished' : ''}`} onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }} aria-label={t('nav.wishlist')}>
          <HiHeart size={17} fill={isWished ? 'currentColor' : 'none'} />
        </button>
        <button className={`product-card__quick-add ${added ? 'added' : ''}`} onClick={handleAdd}>
          <HiShoppingBag size={15} />{added ? t('common.added') : t('common.quickAdd')}
        </button>
      </Link>
      <div className="product-card__info">
        <Link to={`/product/${product.id}`}>
          <p className="product-card__category">{product.category}</p>
          <h3 className="product-card__name">{product.name}</h3>
          <div className="product-card__rating">
            <HiStar size={12} color="var(--gold)" />
            <span>{product.rating}</span>
            <span className="product-card__reviews">({product.reviews})</span>
          </div>
          <div className="product-card__price">
            <span className="product-card__current">${product.price}</span>
            {product.originalPrice && <span className="product-card__original">${product.originalPrice}</span>}
          </div>
        </Link>
      </div>
    </article>
  );
}
