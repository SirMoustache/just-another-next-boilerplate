/**
 * Absolute imports
 */
import styled from 'styled-components';

type AProps = {
  to?: string;
};

const A = styled.a<AProps>`
  color: ${({ theme }) => theme.pallete.active.main};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.pallete.active.dark};
  }
`;

export default A;
