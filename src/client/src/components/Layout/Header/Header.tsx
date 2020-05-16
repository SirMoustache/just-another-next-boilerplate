/**
 * Absolute imports
 */
import React, { useState } from 'react';

/**
 * Components
 */
import Navigation from '../Navigation';
import Hamburger from '../Hamburger';

/**
 * Hooks
 */
import { useIsScrolled } from '../../../hooks/useIsScrolled';

/**
 * Styles
 */
import { Root, Inner, Logo, LogoImg, MobileMenu, Menu } from './Header.styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isScrolled = useIsScrolled();

  const handleToggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };

  return (
    <Root isScrolled={isScrolled}>
      <Inner>
        <Logo>
          <LogoImg src="" alt="Logo" />
        </Logo>

        <Navigation />

        <Menu>
          <MobileMenu>
            <Hamburger active={isMenuOpen} onClick={handleToggleMenu} />
          </MobileMenu>
        </Menu>
      </Inner>
    </Root>
  );
};

export default Header;
