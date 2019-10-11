/**
 * Absolute imports
 */
import React from 'react';

/**
 * Styles
 */
import { Root, Inner, LinkList, LinkItem, LinkListTitle } from './styles';

const Footer = () => {
  return (
    <Root>
      <Inner>
        <LinkList>
          <LinkListTitle>Products</LinkListTitle>
          <LinkItem>Random Item</LinkItem>
          <LinkItem>More Items</LinkItem>
          <LinkItem>Even More Items</LinkItem>
        </LinkList>
      </Inner>
    </Root>
  );
};

export default Footer;
