import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { CartProvider, useCart } from '../src/context/CartContext';

const TestComponent = () => {
  const { cart, addToCart } = useCart();
  return (
    <div>
      <button onClick={() => addToCart({ id: '1', title: 'Тест', price: 100, imageUrl: 'img.jpg' })}>
        Add
      </button>
      <div data-testid="cart-count">{cart.length}</div>
    </div>
  );
};

describe('CartContext', () => {
  it('додає товар у контекст', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    const button = screen.getByText('Add');

    act(() => {
      button.click();
    });

    expect(screen.getByTestId('cart-count').textContent).toBe('1');
  });
});
