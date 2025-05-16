import express, { Request, Response } from 'express';
import registerUser from '../services/authService';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const newUser = await registerUser(firstName, lastName, email, password);
    res.status(201).json({ message: 'Користувач успішно зареєстрований', user: newUser });
  } catch (error) {
    res.status(400).json({ message: error instanceof Error ? error.message : 'Щось пішло не так' });
  }
});

export default router;
