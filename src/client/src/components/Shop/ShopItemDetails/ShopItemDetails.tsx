/**
 * Absolute imports
 */
import React from 'react';

/**
 * Materila UI
 */
import { Button } from '@material-ui/core';

/**
 * Styles
 */
import {
  Root,
  Media,
  MediaImg,
  Inner,
  Title,
  Price,
  Description,
  Actions,
} from './ShopItemDetails.styles';

export type ShopItemDetailsProps = {
  title: React.ReactNode;
  imageSrc: string;
  price?: string;
  description?: React.ReactNode;
};

const ShopItemDetails = ({
  title,
  description,
  price,
  imageSrc,
}: ShopItemDetailsProps) => {
  return (
    <Root>
      <Media>
        <MediaImg src={imageSrc} key={imageSrc} />
      </Media>
      <Inner>
        <Title>{title}</Title>

        <Price>{price}</Price>

        <Description>{description}</Description>

        <Actions>
          <Button variant="contained" color="primary">
            Add to cart
          </Button>
        </Actions>
      </Inner>
    </Root>
  );
};

export default ShopItemDetails;
