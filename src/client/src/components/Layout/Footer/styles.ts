/**
 * Absolute imports
 */
import styled from 'styled-components';

export const Root = styled.footer`
  background-color: ${({ theme }) => theme.pallete.bgSecondary.main};
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4vw 8vw 1vw;
`;

export const LinkList = styled.div`
  background-color: ${({ theme }) => theme.pallete.bgSecondary.main};
`;

export const LinkListTitle = styled.h4`
  color: #fff;
  font-size: 18px;
  margin-bottom: ${({ theme }) => `${theme.gutter * 2}px`};
`;

export const LinkItem = styled.div`
  color: #fff;
  margin-bottom: ${({ theme }) => `${theme.gutter}px`};
`;
