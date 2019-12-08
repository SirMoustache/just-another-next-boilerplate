/**
 * Absolute imports
 */
import styled from 'styled-components';

// TODO: Typography styles
export const FormHeader = styled.h1`
  text-align: center;
  font-size: 46px;
  margin: 0 0 16px;
  font-weight: 400;
`;

// TODO: Typography styles
export const FormDescription = styled.h3`
  text-align: center;
  font-size: 18px;
  margin: 0 0 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.pallete.textSecondary.main};
`;

export const FormActions = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

export const FormError = styled.div`
  margin: 16px 0;
  color: ${({ theme }) => theme.pallete.error.main};
`;

export const SplitLine = styled.div`
  height: 4px;
  width: 32px;
  background-color: #fff;
  margin: 16px auto;
  border-radius: 20%;
`;
