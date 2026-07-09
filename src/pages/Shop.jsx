import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HiAdjustmentsHorizontal, HiXMark, HiChevronDown } from 'react-icons/hi2';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../i18n/LanguageContext';
import './Shop.css';

const allCategories = ['All', 'Skincare', 'Makeup', 'Body Care', 'Fragrance'];

export default function Shop({ defaultCategory }) {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const initCat = defaultCategory || searchParams.get('category') || 'All';
  const search = searchParams.get('search') || '';

  const [cat, setCat] = useState(initCat);
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [maxPrice, setMaxPrice] = useState(150);

  useEffect(() => { if (defaultCategory) setCat(defaultCategory); }, [defaultCategory]);

  const sortOptions = [
    { value: 'featured', label: t('shop.featured') },
    { value: 'price-asc', label: t('shop.priceLowHigh') },
    { value: 'price-desc', label: t('shop.priceHighLow') },
    { value: 'rating', label: t('shop.topRated') },
  ];

  const filtered = useMemo(() => {
    let list = [...products];
    if (cat !== 'All') list = list.filter(p => p.category === cat);
    if (search) list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    list = list.filter(p => p.price <= maxPrice);
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, sort, maxPrice, search]);

  return (
    <main className="shop-page">
      <div className="shop-page__header">
        <div className="container">
          <p className="section-label">{t('nav.shop')}</p>
          <h1 className="section-title">{cat === 'All' ? t('shop.title') : cat}</h1>
          {search && <p className="shop-page__search-label">{t('shop.resultsFor')} <strong>"{search}"</strong></p>}
        </div>
      </div>
      <div className="container shop-page__body">
        <aside className={`shop-sidebar ${filterOpen ? 'open' : ''}`}>
          <div className="shop-sidebar__header">
            <h3>{t('shop.filters')}</h3>
            <button className="shop-sidebar__close" onClick={() => setFilterOpen(false)}><HiXMark size={18} /></button>
          </div>
          <div className="shop-sidebar__section">
            <h4>{t('shop.category')}</h4>
            {allCategories.map(c => <button key={c} className={`shop-sidebar__cat ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>)}
          </div>
          <div className="shop-sidebar__section">
            <h4>{t('shop.maxPrice')}: <span>${maxPrice}</span></h4>
            <input type="range" min={10} max={150} step={5} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} className="shop-sidebar__range" />
            <div className="shop-sidebar__range-labels"><span>$10</span><span>$150</span></div>
          </div>
        </aside>
        <div className="shop-main">
          <div className="shop-main__toolbar">
            <button className="shop-toolbar__filter" onClick={() => setFilterOpen(true)}><HiAdjustmentsHorizontal size={16} /> {t('shop.filters')}</button>
            <p className="shop-main__count">{filtered.length} {t('shop.products')}</p>
            <div className="shop-toolbar__sort">
              <span>{t('shop.sortBy')}</span>
              <div className="sort-select">
                <select value={sort} onChange={e => setSort(e.target.value)}>
                  {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <HiChevronDown size={14} />
              </div>
            </div>
          </div>
          <div className="shop-cats">
            {allCategories.map(c => <button key={c} className={`shop-cat-tab ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>)}
          </div>
          {filtered.length > 0 ? (
            <div className="products-grid">{filtered.map(p => <ProductCard key={p.id} product={p} />)}</div>
          ) : (
            <div className="shop-empty">
              <p>{t('shop.emptyResults')}</p>
              <button className="btn-outline" onClick={() => { setCat('All'); setMaxPrice(150); }}>{t('shop.clearFilters')}</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
