/**
 * Absolute imports
 */
import React from 'react';

/**
 * Material UI
 */
import { Button } from '@material-ui/core';

/**
 * Components
 */
import { Container } from '../UI/Container';

/**
 * GraphQL
 */
import { useProductsQuery } from '../../generated';

/**
 * Utils
 */
import { mockImageUrl } from '../../utils/mockUtils';

/**
 * Styles
 */
import {
  Root,
  Product,
  ProductList,
  ProductInner,
  ProductImage,
  ProductMedia,
  ProductActions,
  ProductHeader,
  ProductTitle,
  ProductPrice,
} from './styles';

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
                <ProductMedia>
                  <ProductImage src={mockImageUrl()} />
                </ProductMedia>
                <ProductInner>
                  <ProductHeader>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>12.39$</ProductPrice>
                  </ProductHeader>
                  <ProductActions>
                    <Button variant="contained">Add to cart</Button>
                  </ProductActions>
                </ProductInner>
              </Product>
            ))}
        </ProductList>
      </Container>
    </Root>
  );
};

export default Products;
