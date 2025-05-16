import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../src/app/components/ProductCard';

describe('ProductCard', () => {
  it('рендерить дані про товар і обробляє клік', () => {
    const handleAddToCart = jest.fn();

    render(
      <ProductCard
        id="1"
        name="Test Product"
        price={99.99}
        description="Тестовий опис"
        image="test.jpg"
        handleAddToCart={handleAddToCart}
      />
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Додати в кошик'));
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
