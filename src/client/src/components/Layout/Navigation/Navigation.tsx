/**
 * Absolute imports
 */
import React from 'react';

/**
 * Components
 */
import { ActiveLink } from '../../UI/Link';

/**
 * Styles
 */
import { Root, NavigationLink } from './styles';

const Navigation = () => {
  return (
    <Root>
      <ActiveLink href="/" passHref>
        <NavigationLink>Home</NavigationLink>
      </ActiveLink>
      <ActiveLink href="/about" passHref>
        <NavigationLink>About</NavigationLink>
      </ActiveLink>
      <ActiveLink href="/contact" passHref>
        <NavigationLink>Contact</NavigationLink>
      </ActiveLink>
    </Root>
  );
};

export default Navigation;
