/**
 * Absolute imports
 */
import styled from 'styled-components';

export type SurfaceProps = {
  disableShadow?: boolean;
  withPadding?: boolean;
};

const Surface = styled.div<SurfaceProps>`
  box-shadow: ${({ disableShadow, theme }) =>
    disableShadow ? 'none' : theme.shadow.main};

  ${({ withPadding, theme }) =>
    withPadding &&
    `padding: ${theme.gutter * 3}px;
  `};
`;

export default Surface;
