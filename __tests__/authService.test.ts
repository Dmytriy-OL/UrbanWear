import registerUser from '../src/services/authService';
import User from '../src/models/User';

jest.mock('../src/models/User');

describe('authService', () => {
  it('кидає помилку, якщо користувач вже існує', async () => {
    (User.findOne as jest.Mock).mockResolvedValue({ email: 'test@example.com' });

    await expect(
      registerUser('Ім\'я', 'Прізвище', 'test@example.com', '123456')
    ).rejects.toThrow('Користувач з таким email вже існує');
  });

  it('успішна реєстрація', async () => {
    (User.findOne as jest.Mock).mockResolvedValue(null);
    (User.prototype.save as jest.Mock) = jest.fn().mockResolvedValue(undefined);

    const user = await registerUser('Ім\'я', 'Прізвище', 'new@example.com', '123456');
    expect(user).toBeDefined();
  });
});
