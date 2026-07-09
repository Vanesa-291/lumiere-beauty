import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiLock } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../i18n/LanguageContext';
import './Checkout.css';

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const { t } = useLanguage();
  const [step, setStep] = useState(1); // 1=info, 2=shipping, 3=payment, 4=done
  const [form, setForm] = useState({ name:'', email:'', phone:'', address:'', city:'', zip:'', country:'Argentina', cardName:'', cardNum:'', cardExp:'', cardCvv:'' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    if (step < 3) setStep(s => s + 1);
    else { setStep(4); clearCart(); }
  };

  if (step === 4) return (
    <main className="checkout-page">
      <div className="container checkout-success">
        <div className="checkout-success__icon">✓</div>
        <h2>{t('checkout.orderConfirmed')}</h2>
        <p>{t('checkout.orderThanks')}</p>
        <Link to="/shop" className="btn-rose">{t('checkout.continueShopping')}</Link>
      </div>
    </main>
  );

  return (
    <main className="checkout-page">
      <div className="container checkout-layout">
        {/* Left: Form */}
        <div className="checkout-form-col">
          {/* Steps */}
          <div className="checkout-steps">
            {[t('checkout.infoStep'), t('checkout.shippingStep'), t('checkout.paymentStep')].map((s, i) => (
              <div key={s} className={`checkout-step ${step === i+1 ? 'active' : ''} ${step > i+1 ? 'done' : ''}`}>
                <span className="checkout-step__num">{step > i+1 ? <FiCheck size={12} /> : i+1}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            {step === 1 && (
              <div className="checkout-fields">
                <h3>{t('checkout.contactInfo')}</h3>
                <div className="field-row">
                  <div className="field"><label>{t('checkout.fullName')}</label><input name="name" value={form.name} onChange={handleChange} required placeholder="Laura García" /></div>
                  <div className="field"><label>{t('checkout.email')}</label><input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="laura@email.com" /></div>
                </div>
                <div className="field"><label>{t('checkout.phone')}</label><input name="phone" value={form.phone} onChange={handleChange} required placeholder="+54 9 11 1234-5678" /></div>
              </div>
            )}
            {step === 2 && (
              <div className="checkout-fields">
                <h3>{t('checkout.shippingAddress')}</h3>
                <div className="field"><label>{t('checkout.address')}</label><input name="address" value={form.address} onChange={handleChange} required placeholder="Av. Siempre Viva 123" /></div>
                <div className="field-row">
                  <div className="field"><label>{t('checkout.city')}</label><input name="city" value={form.city} onChange={handleChange} required placeholder="Buenos Aires" /></div>
                  <div className="field"><label>{t('checkout.zip')}</label><input name="zip" value={form.zip} onChange={handleChange} required placeholder="1000" /></div>
                </div>
                <div className="field">
                  <label>{t('checkout.country')}</label>
                  <select name="country" value={form.country} onChange={handleChange}>
                    <option>Argentina</option><option>Uruguay</option><option>Chile</option><option>México</option><option>España</option>
                  </select>
                </div>
                <div className="checkout-shipping-options">
                  <h4>{t('checkout.shippingMethod')}</h4>
                  <label className="shipping-option active-option"><input type="radio" name="ship" defaultChecked /><span><strong>{t('checkout.standardShip')}</strong><small>{t('checkout.standardShipTime')}</small></span><span>{t('checkout.free')}</span></label>
                  <label className="shipping-option"><input type="radio" name="ship" /><span><strong>{t('checkout.expressShip')}</strong><small>{t('checkout.expressShipTime')}</small></span><span>$9.99</span></label>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="checkout-fields">
                <h3><FiLock size={14} /> {t('checkout.paymentInfo')}</h3>
                <div className="field"><label>{t('checkout.nameOnCard')}</label><input name="cardName" value={form.cardName} onChange={handleChange} required placeholder="Laura García" /></div>
                <div className="field"><label>{t('checkout.cardNumber')}</label><input name="cardNum" value={form.cardNum} onChange={handleChange} required placeholder="1234 5678 9012 3456" maxLength={19} /></div>
                <div className="field-row">
                  <div className="field"><label>{t('checkout.expiry')}</label><input name="cardExp" value={form.cardExp} onChange={handleChange} required placeholder="MM/YY" maxLength={5} /></div>
                  <div className="field"><label>{t('checkout.cvv')}</label><input name="cardCvv" value={form.cardCvv} onChange={handleChange} required placeholder="123" maxLength={3} /></div>
                </div>
                <p className="checkout-secure"><FiLock size={12} /> {t('checkout.securePay')}</p>
              </div>
            )}

            <div className="checkout-form__actions">
              {step > 1 && <button type="button" className="btn-outline" onClick={() => setStep(s => s - 1)}>{t('checkout.back')}</button>}
              <button type="submit" className="btn-primary">
                {step === 3 ? t('checkout.confirmOrder') : t('checkout.continue')}
              </button>
            </div>
          </form>
        </div>

        {/* Right: Order summary */}
        <div className="checkout-summary">
          <h3>{t('checkout.orderSummary')}</h3>
          <ul className="checkout-summary__items">
            {items.map(item => (
              <li key={item.id} className="checkout-summary__item">
                <div className="checkout-summary__img">
                  <img src={item.image} alt={item.name} />
                  <span className="checkout-summary__qty">{item.qty}</span>
                </div>
                <div className="checkout-summary__info">
                  <p>{item.name}</p>
                </div>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="checkout-summary__totals">
            <div className="checkout-summary__row"><span>{t('checkout.subtotal')}</span><span>${total.toFixed(2)}</span></div>
            <div className="checkout-summary__row"><span>{t('checkout.shipping')}</span><span>{total >= 50 ? t('checkout.free') : '$9.99'}</span></div>
            <div className="checkout-summary__row total"><span>{t('checkout.total')}</span><span>${(total >= 50 ? total : total + 9.99).toFixed(2)}</span></div>
          </div>
        </div>
      </div>
    </main>
  );
}
