/**
 * Absolute imports
 */
import React from 'react';
import Link from 'next/link';

/**
 * Material UI
 */
import { Button } from '@material-ui/core';

/**
 * Components
 */
import { Container } from '../../UI/Container';

/**
 * Styles
 */
import {
  Root,
  Inner,
  Image,
  Media,
  Actions,
  Header,
  Title,
  Price,
} from './FeaturedProduct.styles';

export type FeaturedProductProps = {
  name: React.ReactNode;
  id: string;
  price: number;
  currency?: string;
  thumbnail: string;
};

const FeaturedProduct = ({
  name,
  id,
  price,
  currency,
  thumbnail,
}: FeaturedProductProps) => {
  return (
    <Link href={`/shop/${id}`}>
      <Root>
        <Inner>
          <Header>
            <Title>{name}</Title>
            <Price>
              {price} {currency}
            </Price>
          </Header>
          <Actions>
            <Button color="secondary" variant="contained">
              Add to cart
            </Button>
          </Actions>
        </Inner>
        <Media>
          <Image src={thumbnail} />
        </Media>
      </Root>
    </Link>
  );
};

export default FeaturedProduct;
