'use client';

import { useEffect, useState } from 'react';

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      const res = await fetch('/api/orders');
      const data = await res.json();
      setOrders(data);
    }
    fetchOrders();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">Ваші замовлення</h1>
      {orders.length === 0 ? (
        <p className="text-gray-400">Замовлень поки немає.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, idx) => (
            <div key={idx} className="p-6 bg-[#111] rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4">Замовлення #{idx + 1}</h2>
              <p><strong>Ім'я:</strong> {order.customerName}</p>
              <p><strong>Адреса:</strong> {order.customerAddress}</p>
              <p><strong>Телефон:</strong> {order.customerPhone}</p>
              <p><strong>Сума:</strong> ₴{order.total}</p>

              {/* Список товарів */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Товари:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {order.items.map((item: any, index: number) => (
                    <li key={index}>
                      {item.title} — ₴{item.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
