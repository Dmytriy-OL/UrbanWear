import { NextResponse } from 'next/server';
import connectDB from '@/db/connect';
import Product from '@/models/Product';

export async function POST(req: Request) {
  try {
    await connectDB();

    const { title, description, price, imageUrl, category } = await req.json();

    const newProduct = await Product.create({
      title,
      description,
      price,
      imageUrl,
      category,
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Помилка при додаванні товару:', error);
    return NextResponse.json({ error: 'Помилка при додаванні товару' }, { status: 500 });
  }
}
