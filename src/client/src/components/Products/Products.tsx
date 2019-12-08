/**
 * Absolute imports
 */
import React from 'react';

/**
 * Components
 */
import { Container } from '../UI/Container';

/**
 * GraphQL
 */
import { useProductsQuery } from '../../generated';

/**
 * Styles
 */
import {
  Root,
  Product,
  ProductList,
  ProductInner,
  ProductImage,
  ProductActions,
  ProductHeader,
  ProductTitle,
  ProductPrice,
} from './styles';

const products = Array.from({ length: 9 }, () => ({ id: Math.random() }));

const Products = () => {
  const { data, loading, error } = useProductsQuery();

  return (
    <Root>
      <Container>
        <h2> Products {loading && 'Loading'}</h2>
        <ProductList>
          {data &&
            data.shopItems.map(product => (
              <Product key={product.id}>
                <ProductInner>
                  <ProductHeader>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>12.39$</ProductPrice>
                  </ProductHeader>
                  <ProductActions>
                    <button>Add to cart</button>
                  </ProductActions>
                </ProductInner>
                <ProductImage />
              </Product>
            ))}
        </ProductList>
      </Container>
    </Root>
  );
};

export default Products;
