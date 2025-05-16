import User from '../models/User';

const registerUser = async (firstName: string, lastName: string, email: string, password: string) => {
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('Користувач з таким email вже існує');
    }

    const user = new User({ firstName, lastName, email, password });
    await user.save();
    console.log('User registered successfully');
    return user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Помилка реєстрації: ${error.message}`);
    }
    throw new Error('Невідома помилка при реєстрації');
  }
};

export default registerUser;
