import { NextResponse } from 'next/server';
import User from '@/models/User';
import connectDB from '@/db/connect';

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'Користувача не знайдено' }, { status: 404 });
    }

    if (user.password !== password) { 
      return NextResponse.json({ message: 'Невірний пароль' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Вхід успішний' }, { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Помилка сервера' }, { status: 500 });
  }
}
