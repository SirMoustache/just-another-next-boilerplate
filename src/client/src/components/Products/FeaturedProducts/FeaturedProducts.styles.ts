/**
 * Absolute imports
 */
import styled from 'styled-components';

/**
 * Utils
 */
import { getMinMedia } from '../../../utils/styleUtils';

export const Root = styled.section``;

export const FeaturedProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: ${({ theme }) => `${theme.gutter * -2}px`};
  padding-bottom: ${({ theme }) => `${theme.gutter * 12}px`};
`;

export const Product = styled.div`
  cursor: pointer;
  position: relative;
  margin: ${({ theme }) => `${theme.gutter * 4}px`};
  flex-basis: 100%;

  ${getMinMedia('md')} {
    flex-basis: 40%;
  }

  ${getMinMedia('lg')} {
    flex-basis: 25%;

    &:nth-child(3n + 1) {
      transform: translateY(90px);
    }

    &:nth-child(3n) {
      transform: translateY(90px);
    }
  }
`;

export const ProductInner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ProductHeader = styled.div`
  padding: ${({ theme }) => `50% ${theme.gutter * 2}px ${theme.gutter * 2}px`};
`;

export const ProductTitle = styled.h3`
  color: ${({ theme }) => theme.pallete.textSecondary.main};
  margin: ${({ theme }) => `0 0 ${theme.gutter * 2}px`};
  padding: 0;
`;

export const ProductPrice = styled.span`
  color: ${({ theme }) => theme.pallete.textSecondary.main};
`;

export const ProductActions = styled.div`
  margin-top: auto;
  padding: ${({ theme }) => `${theme.gutter * 2}px`};
`;

export const ProductImage = styled.div`
  padding-top: 150%;
  background-color: #fff;
  border-radius: 15px;
`;
