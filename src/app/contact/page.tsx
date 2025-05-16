import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Контакти</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Ваше ім’я</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Повідомлення</label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Відправити
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
