/**
 * Absolute imports
 */
import styled from 'styled-components';

/**
 * Utils
 */
import { getMinMedia } from '../../../utils/styleUtils';

export const Root = styled.a`
  cursor: pointer;
  position: relative;
  margin: ${({ theme }) => `${theme.gutter * 4}px`};
  flex-basis: 100%;
  border-radius: 15px;
  overflow: hidden;

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

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Header = styled.div`
  margin-top: auto;
  padding: ${({ theme }) => `${theme.gutter * 2}px ${theme.gutter * 2}px`};
`;

export const Title = styled.h3`
  color: white;
  margin: ${({ theme }) => `0 0 ${theme.gutter * 2}px`};
  padding: 0;
`;

export const Price = styled.span`
  /* color: ${({ theme }) => theme.pallete.textSecondary.main}; */
  color: white;
`;

export const Actions = styled.div`
  padding: ${({ theme }) => `${theme.gutter * 2}px`};
`;

export const Media = styled.div`
  padding-top: 100%;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #fff;
`;
