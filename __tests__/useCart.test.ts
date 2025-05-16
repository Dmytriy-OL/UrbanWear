import { renderHook, act } from '@testing-library/react';
import useCart from '../src/hooks/useCart';

describe('useCart hook', () => {
  it('додає товар до кошика', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart({ id: '1', name: 'Товар 1' });
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].id).toBe('1');
  });
});
