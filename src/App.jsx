import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/collections" element={<Shop defaultCategory="All" />} />
        <Route path="/skincare" element={<Shop defaultCategory="Skincare" />} />
        <Route path="/makeup" element={<Shop defaultCategory="Makeup" />} />
        <Route path="/about" element={<About />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/guides/:id" element={<GuideDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/lumiere-beauty">
      <LanguageProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
