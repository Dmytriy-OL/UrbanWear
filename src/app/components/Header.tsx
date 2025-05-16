'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      {/* Логотип */}
      <div className="text-2xl font-bold text-gray-800">
        <Link href="/">UrbanWear</Link>
      </div>

      {/* Навігація */}
      <nav className="space-x-6 text-gray-600">
        <Link href="/" className="hover:text-black">Головна</Link>
        <Link href="/catalog" className="hover:text-black">Каталог</Link>
        <Link href="/cart" className="hover:text-black">Кошик</Link>
        <Link href="/contact" className="hover:text-black">Контакти</Link>
        <Link href="/orders">
      <button className="ml-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
        Мої замовлення
      </button>
</Link>

      </nav>
    </header>
  );
}
