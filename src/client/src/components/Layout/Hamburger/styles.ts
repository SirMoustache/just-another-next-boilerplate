/**
 * Absolute imports
 */
import styled from 'styled-components';

export const Root = styled.div`
  cursor: pointer;
  width: 27px;
`;

export type IngredientProps = {
  active?: boolean;
};

export const Ingredient = styled.span<IngredientProps>`
  display: block;
  width: 27px;
  height: 3px;
  margin-bottom: 5px;
  position: relative;

  background: #fff;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 2px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  &:first-child {
    ${({ active }) =>
      active &&
      `
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
      `};
  }

  &:nth-child(2) {
    ${({ active }) =>
      active &&
      `
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      `};
  }

  &:nth-child(3) {
    transform-origin: 0% 100%;
    margin-bottom: 0;

    ${({ active }) =>
      active &&
      `
        transform: rotate(-45deg) translate(0, -1px);
      `};
  }
`;
