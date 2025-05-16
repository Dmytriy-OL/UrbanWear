import { NextResponse } from 'next/server';
import connectDB from '@/db/connect';
import User from '@/models/User';

export async function PUT(req: Request) {
  try {
    await connectDB();

    const { firstName, lastName, email, password } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email обовʼязковий для оновлення.' }, { status: 400 });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email }, 
      { firstName, lastName, password }, 
      { new: true } 
    );

    if (!updatedUser) {
      return NextResponse.json({ error: 'Користувача не знайдено.' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Дані успішно оновлені!' }, { status: 200 });
  } catch (error) {
    console.error('Помилка при оновленні користувача:', error);
    return NextResponse.json({ error: 'Внутрішня помилка сервера' }, { status: 500 });
  }
}
