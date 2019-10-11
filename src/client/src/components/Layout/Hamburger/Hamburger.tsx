/**
 * Absolute imports
 */
import React from 'react';

/**
 * Styles
 */
import { Root, Ingredient } from './styles';

export type HamburgerProps = {
  active?: boolean;
  onClick?: (active: boolean) => void;
};

const Hamburger = ({ active, onClick }: HamburgerProps) => {
  const handleClick = () => onClick && onClick(!Boolean(active));

  return (
    <Root onClick={handleClick}>
      <Ingredient active={active} />
      <Ingredient active={active} />
      <Ingredient active={active} />
    </Root>
  );
};

export default Hamburger;
