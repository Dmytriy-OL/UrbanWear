import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Назва товару обов’язкова'],
    },
    description: {
      type: String,
      required: [true, 'Опис товару обов’язковий'],
    },
    price: {
      type: Number,
      required: [true, 'Ціна обов’язкова'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Посилання на зображення обов’язкове'],
    },
    category: {
      type: String,
      required: [true, 'Категорія обов’язкова'],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
