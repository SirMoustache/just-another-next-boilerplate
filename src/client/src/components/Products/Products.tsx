/**
 * Absolute imports
 */
import React from 'react';
import Link, { LinkProps } from 'next/link';
/**
 * Material UI
 */
import { Button } from '@material-ui/core';

/**
 * Components
 */
import { Container } from '../UI/Container';
import { RouterLink } from '../../components/UI/Link';

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
              <Product>
                <ProductMedia>
                  <ProductImage src={mockImageUrl()} />
                </ProductMedia>
                <ProductInner>
                  <ProductHeader>
                    <ProductTitle>
                      <Link
                        key={product.id}
                        passHref
                        href={`/shop/${product.id}`}
                      >
                        {product.title}
                      </Link>
                    </ProductTitle>
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
