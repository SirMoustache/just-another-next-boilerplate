/**
 * Absolute imports
 */
import React from 'react';
import Link from 'next/link';

/**
 * Components
 */
import { Container } from '../../UI/Container';
import FeaturedProduct from '../FeaturedProduct';

/**
 * Utils
 */
import { mockImageUrl } from '../../../utils/mockUtils';

/**
 * Styles
 */
import { Root, Title, FeaturedProductsList } from './FeaturedProducts.styles';

const products = Array.from({ length: 9 }, (v, i) => ({
  id: `product-${i}`,
  name: 'Lorem Name',
  price: 100.25,
  currency: '$',
  thumbnail: mockImageUrl(),
}));

const FeaturedProducts = () => {
  return (
    <Root>
      <Container>
        <Title>Featured Products</Title>

        <FeaturedProductsList>
          {products.map((product) => (
            <FeaturedProduct
              key={product.id}
              name={product.name}
              price={product.price}
              currency={product.currency}
              id={product.id}
              thumbnail={product.thumbnail}
            />
          ))}
        </FeaturedProductsList>
      </Container>
    </Root>
  );
};

export default FeaturedProducts;
