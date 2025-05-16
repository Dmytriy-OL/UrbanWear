'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const formattedTotalPrice = totalPrice.toLocaleString('uk-UA');

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Ваш кошик</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Ваш кошик порожній</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  {/* Перевіряємо, чи є зображення для товару */}
                  <img
                    src={item.imageUrl || '/default-image.jpg'}  // Якщо нема зображення, використовуємо дефолтне
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>  {/* Використовуємо item.title */}
                    <p className="text-gray-600">₴{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Видалити
                </button>
              </div>
            ))}

            {/* Загальна сума */}
            <p className="text-xl font-bold mt-6">Разом: ₴{formattedTotalPrice}</p>

            {/* Кнопки */}
            <div className="flex justify-between mt-6">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Очистити кошик
              </button>
              <Link href="/checkout">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  Оформити замовлення
                </button>
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
