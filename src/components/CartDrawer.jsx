import { useCart } from '../context/CartContext';
import { HiXMark, HiMinus, HiPlus, HiTrash, HiShoppingBag } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './CartDrawer.css';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQty, total } = useCart();
  const { t } = useLanguage();
  if (!isOpen) return null;
  return (
    <>
      <div className="cart-overlay" onClick={() => setIsOpen(false)} />
      <aside className="cart-drawer">
        <div className="cart-drawer__header">
          <div className="cart-drawer__title"><HiShoppingBag size={20} /><span>{t('cart.title')}</span>{items.length > 0 && <span className="cart-drawer__count">{items.length}</span>}</div>
          <button className="cart-drawer__close" onClick={() => setIsOpen(false)}><HiXMark size={22} /></button>
        </div>
        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <div className="cart-drawer__empty-icon"><HiShoppingBag size={48} color="var(--rose-200)" /></div>
            <p>{t('cart.empty')}</p>
            <span>{t('cart.emptyText')}</span>
            <Link to="/shop" className="btn-primary" onClick={() => setIsOpen(false)}>{t('cart.goToShop')}</Link>
          </div>
        ) : (
          <>
            <ul className="cart-drawer__items">
              {items.map(item => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item__img"><img src={item.image} alt={item.name} /></div>
                  <div className="cart-item__info">
                    <p className="cart-item__name">{item.name}</p>
                    <p className="cart-item__price">${item.price}</p>
                    <div className="cart-item__qty">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}><HiMinus size={12} /></button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}><HiPlus size={12} /></button>
                    </div>
                  </div>
                  <button className="cart-item__remove" onClick={() => removeFromCart(item.id)}><HiTrash size={16} /></button>
                </li>
              ))}
            </ul>
            <div className="cart-drawer__footer">
              <div className="cart-drawer__free-ship">
                {total >= 50 ? <span className="success">{t('cart.freeShipUnlocked')}</span> : <span>{t('cart.freeShipMore').replace('{amount}', `$${(50 - total).toFixed(2)}`)}</span>}
                <div className="cart-drawer__ship-bar"><div style={{ width: `${Math.min((total / 50) * 100, 100)}%` }} /></div>
              </div>
              <div className="cart-drawer__total"><span>{t('cart.total')}</span><span>${total.toFixed(2)}</span></div>
              <Link to="/checkout" className="btn-primary cart-drawer__checkout" onClick={() => setIsOpen(false)}>{t('cart.checkout')}</Link>
              <Link to="/cart" className="btn-outline cart-drawer__view-cart" onClick={() => setIsOpen(false)}>{t('cart.viewCart')}</Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
