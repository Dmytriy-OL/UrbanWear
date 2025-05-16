import React from 'react';

interface ProductCardProps {
  id: string;
  name: string;  
  price: number;
  description: string;
  image: string;  
  handleAddToCart: () => void;
}


const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, description, image, handleAddToCart }) => {
  console.log('Image URL:', image); 
  
  return (
    <div className="border p-4 rounded-lg shadow-md">
      {image ? (
        <img src={image} alt={name} className="w-full h-64 object-cover mb-4" />
      ) : (
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-4">
          Нема фото
        </div>
      )}
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-500">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">${price}</span>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Додати в кошик
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
