/**
 * Absolute imports
 */
import React from 'react';

/**
 * Components
 */
import { RouterLink } from '../../UI/Link';

/**
 * Styles
 */
import { Root, NavigationLink } from './styles';

const Navigation = () => {
  return (
    <Root>
      <RouterLink href="/" passHref>
        <NavigationLink>Home</NavigationLink>
      </RouterLink>
      <RouterLink href="/shop" passHref>
        <NavigationLink>Shop</NavigationLink>
      </RouterLink>
      <RouterLink href="/about" passHref>
        <NavigationLink>About</NavigationLink>
      </RouterLink>
      <RouterLink href="/contact" passHref>
        <NavigationLink>Contact</NavigationLink>
      </RouterLink>
    </Root>
  );
};

export default Navigation;
