/**
 * Absolute imports
 */
import React from 'react';

/**
 * Components
 */
import { Container } from '../UI/Container';

/**
 * Styles
 */
import {
  Root,
  FeaturedProduct,
  FeaturedProductsList,
  FeaturedProductInner,
  FeaturedProductImage,
  FeaturedProductActions,
  FeaturedProductHeader,
  FeaturedProductTitle,
  FeaturedProductPrice,
} from './styles';

const products = Array.from({ length: 9 }, () => ({ id: Math.random() }));

const FeaturedProducts = () => {
  return (
    <Root>
      <Container>
        <h2>Featured Products</h2>

        <FeaturedProductsList>
          {products.map(product => (
            <FeaturedProduct key={product.id}>
              <FeaturedProductInner>
                <FeaturedProductHeader>
                  <FeaturedProductTitle>Product</FeaturedProductTitle>
                  <FeaturedProductPrice>12.39$</FeaturedProductPrice>
                </FeaturedProductHeader>
                <FeaturedProductActions>
                  <button>Add to cart</button>
                </FeaturedProductActions>
              </FeaturedProductInner>
              <FeaturedProductImage />
            </FeaturedProduct>
          ))}
        </FeaturedProductsList>
      </Container>
    </Root>
  );
};

export default FeaturedProducts;
