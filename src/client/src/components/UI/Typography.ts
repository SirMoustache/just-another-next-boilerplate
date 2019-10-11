/**
 * Absolute imports
 */
import styled, { css } from 'styled-components';

export type TextColor = 'textSecondary';

export type TextBaseProps = {
  color?: TextColor;
  size?: 'sm' | 'md' | 'ml';
  gutterBottom?: boolean;
  paragraph?: boolean;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
};

export const TextBase = css<TextBaseProps>`
  ${({ color, theme }) => color && `color: ${theme.pallete[color].main};`}

  ${({ size, theme }) => size && `font-size: ${theme.typography.sizes[size]};`}

  ${({ gutterBottom }) => gutterBottom && `margin-bottom: 1rem;`}

  ${({ paragraph }) => paragraph && `margin-bottom: 1em;`}

  ${({ align }) => align && `text-align: ${align};`}
`;

export const HBase = css<TextBaseProps>`
  margin: 0;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: normal;
`;

export const H1 = styled.h1<TextBaseProps>`
  ${HBase}
  ${TextBase}

  font-size: 28px;
  font-weight: 600;

  @media (min-width: 960px) {
    font-size: 58px;
  }
`;

export const H2 = styled.h2<TextBaseProps>`
  ${HBase}
  ${TextBase}

  font-size: 24px;
  line-height: 1.23;
  font-weight: 600;

  @media (min-width: 960px) {
    font-size: 45px;
  }
`;

export const H3 = styled.h2<TextBaseProps>`
  ${HBase}
  ${TextBase}

  font-size: 24px;
  line-height: 1.23;
  font-weight: 600;

  @media (min-width: 960px) {
    font-size: 40px;
  }
`;

export const Text = styled.div<TextBaseProps>`
  ${TextBase}
`;
