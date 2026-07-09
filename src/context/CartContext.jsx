import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('lumiere_cart')) || []; }
    catch { return []; }
  });
  const [isOpen, setIsOpen] = useState(false);
  const [wishlist, setWishlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem('lumiere_wishlist')) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('lumiere_cart', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('lumiere_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { ...product, qty }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id) => setItems(prev => prev.filter(i => i.id !== id));

  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const clearCart = () => setItems([]);

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clearCart, total, count, isOpen, setIsOpen, wishlist, toggleWishlist }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
