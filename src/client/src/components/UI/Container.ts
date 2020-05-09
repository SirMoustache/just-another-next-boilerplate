/**
 * Absolute imports
 */
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;

  max-width: ${({ theme }) => theme.container.width.md};

  /* @media (min-width: 1280px) {
    width: 1176px; 
    width: 1280px;
  } */
`;
