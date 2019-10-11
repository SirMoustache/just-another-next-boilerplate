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
 * Styles
 */
import { Root, Inner, Logo, LogoImg, MobileMenu, Menu } from './styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(state => !state);
  };

  return (
    <Root active={isMenuOpen}>
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
