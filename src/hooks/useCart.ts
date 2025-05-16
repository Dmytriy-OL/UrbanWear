import { useState } from 'react';

export default function useCart() {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  return {
    cart,
    addToCart,
  };
}
