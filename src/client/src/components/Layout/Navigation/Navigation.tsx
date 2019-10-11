/**
 * Absolute imports
 */
import React from 'react';
import Link from 'next/link';

/**
 * Styles
 */
import { Root, NavigationLink } from './styles';

const Navigation = () => {
  return (
    <Root>
      <Link href="/">
        <NavigationLink>Home</NavigationLink>
      </Link>
      <Link href="/about">
        <NavigationLink>About</NavigationLink>
      </Link>
      <Link href="/contact">
        <NavigationLink>Contact</NavigationLink>
      </Link>
    </Root>
  );
};

export default Navigation;
