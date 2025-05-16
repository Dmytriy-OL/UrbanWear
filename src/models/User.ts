import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Ім’я обов’язкове'],
    },
    lastName: {
      type: String,
      required: [true, 'Прізвище обов’язкове'],
    },
    email: {
      type: String,
      required: [true, 'Email обов’язковий'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Пароль обов’язковий'],
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
