'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useCart } from '../../context/CartContext'; 
import { useRouter } from 'next/navigation';

const products = [
  { 
    id: '1', 
    title: 'Футболка UrbanWear', 
    price: 499, 
    description: 'Стильна футболка для міського життя.', 
    imageUrl: 'https://th.bing.com/th/id/OIP.XL8_OKhr1F5txgwwEJDtUAHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.1&pid=1.7' 
  },
  { 
    id: '2', 
    title: 'Куртка UrbanWear', 
    price: 1599, 
    description: 'Тепла куртка для зими.', 
    imageUrl: 'https://th.bing.com/th/id/R.15ae6babc575cb15af6f28ad86dae7d4?rik=evqCPiILAc7djA&pid=ImgRaw&r=0' 
  },
  { 
    id: '3', 
    title: 'Штани UrbanWear', 
    price: 799, 
    description: 'Комфортні штани для щоденного використання.', 
    imageUrl: 'https://th.bing.com/th/id/OIP.jrV3OPdJlf6FLVwtpCYSNgAAAA?w=207&h=276&c=7&r=0&o=5&dpr=1.1&pid=1.7' 
  },
];

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cart, addToCart } = useCart();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  const handleAddToCart = (product: any) => {
    if (!isLoggedIn) {
      router.push('/register');
    } else {
      addToCart(product);
    }
  };

  return (
    <>
      <Header />
      <main className="p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">UrbanWear Магазин</h1>

        {/* Форма пошуку */}
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Пошук товарів..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-80"
          />
        </div>

        {/* Список товарів */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-lg text-gray-400">Товари не знайдено</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                id={product.id} 
                name={product.title}
                price={product.price}
                description={product.description}
                image={product.imageUrl}
                handleAddToCart={() => handleAddToCart(product)} 
              />
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
