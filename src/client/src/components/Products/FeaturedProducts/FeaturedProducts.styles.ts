/**
 * Absolute imports
 */
import styled from 'styled-components';

/**
 * Utils
 */
import { getMinMedia } from '../../../utils/styleUtils';

export const Root = styled.section`
  padding: 40px 0;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  margin: 0;
  margin-bottom: 80px;
`;

export const FeaturedProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: ${({ theme }) => `${theme.gutter * -2}px`};
  padding-bottom: ${({ theme }) => `${theme.gutter * 12}px`};
`;
