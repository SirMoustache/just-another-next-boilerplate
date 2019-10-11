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
      <Link href="/" passHref>
        <NavigationLink>Home</NavigationLink>
      </Link>
      <Link href="/about" passHref>
        <NavigationLink>About</NavigationLink>
      </Link>
      <Link href="/contact" passHref>
        <NavigationLink>Contact</NavigationLink>
      </Link>
    </Root>
  );
};

export default Navigation;
