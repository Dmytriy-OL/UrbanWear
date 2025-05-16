import { NextResponse } from 'next/server';
import connectDB from '@/db/connect';
import Product from '@/models/Product';

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find();

    return NextResponse.json(products);
  } catch (error) {
    console.error('Помилка при отриманні товарів:', error);
    return NextResponse.json({ error: 'Помилка при отриманні товарів' }, { status: 500 });
  }
}
    