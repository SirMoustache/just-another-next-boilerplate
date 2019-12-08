/**
 * Absolute imports
 */
import styled from 'styled-components';

/**
 * Components
 */
import Surface from '../../components/UI/Surface';

export const FormWrapper = styled(Surface)`
  margin: ${({ theme }) => `${theme.gutter * 2}px auto`};
  width: 90%;
  max-width: 500px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallete.bg.dark};
`;
