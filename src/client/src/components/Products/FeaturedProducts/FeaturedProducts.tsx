/**
 * Absolute imports
 */
import React from 'react';
import Link from 'next/link';

/**
 * Components
 */
import { Container } from '../../UI/Container';

/**
 * Styles
 */
import {
  Root,
  Product,
  FeaturedProductsList,
  ProductInner,
  ProductImage,
  ProductActions,
  ProductHeader,
  ProductTitle,
  ProductPrice,
} from './FeaturedProducts.styles';

const products = Array.from({ length: 9 }, (v, i) => ({ id: `product-${i}` }));

const FeaturedProducts = () => {
  return (
    <Root>
      <Container>
        <h2>Featured Products</h2>

        <FeaturedProductsList>
          {products.map((product) => (
            <Product key={product.id}>
              <ProductInner>
                <ProductHeader>
                  <ProductTitle>
                    <Link href={`/shop/${product.id}`}>
                      <a>Product</a>
                    </Link>
                  </ProductTitle>
                  <ProductPrice>12.39$</ProductPrice>
                </ProductHeader>
                <ProductActions>
                  <button>Add to cart</button>
                </ProductActions>
              </ProductInner>
              <ProductImage />
            </Product>
          ))}
        </FeaturedProductsList>
      </Container>
    </Root>
  );
};

export default FeaturedProducts;
