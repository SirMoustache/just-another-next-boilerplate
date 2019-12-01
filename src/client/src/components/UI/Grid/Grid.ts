/**
 * Absolute imports
 */
import styled, { css } from 'styled-components/macro';

/**
 * Utils
 */
import { isUndefined, isString } from '../../../utils/valueUtils';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type PushBreakpoint =
  | 'pushXs'
  | 'pushSm'
  | 'pushMd'
  | 'pushLg'
  | 'pushXl';

export type OrderBreakpoint =
  | 'orderXs'
  | 'orderSm'
  | 'orderMd'
  | 'orderLg'
  | 'orderXl';

type GridAlignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export type GridJustification =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type Breakpoints = Partial<Record<Breakpoint, GridSize | 'auto'>>;
export type PushBreakpoints = Partial<Record<PushBreakpoint, GridSize>>;
export type OrderBreakpoints = Partial<Record<OrderBreakpoint, number>>;

export type RowProps = {
  gutter?: number;
  justify?: GridJustification;
  align?: GridAlignment;
  wrap?: GridWrap;
};

export type ColumnProps = {
  gutter?: number;
  grow?: boolean;
} & Breakpoints &
  PushBreakpoints &
  OrderBreakpoints;

export const columnAutoWithMixin = css<ColumnProps>`
  max-width: auto;
  flex-basis: auto;
`;

export const getWidthStyles = (size: number) => `
  max-width: ${(size / 12) * 100}%;
  flex-basis: ${(size / 12) * 100}%;
`;

export const getOffsetStyles = (size: number) => `
  margin-left: ${(size / 12) * 100}%;
`;

export const getOrderStyles = (order: number) => `
  order: ${order};
`;

export const columnWidthMixin = css<ColumnProps>`
  ${({ xs }) => typeof xs === 'number' && getWidthStyles(xs)};
`;

export const Column = styled.div<ColumnProps>`
  ${({ grow }) => grow && `flex-grow: 1;`}

  ${({ xs }) =>
    !isUndefined(xs)
      ? isString(xs)
        ? columnAutoWithMixin
        : getWidthStyles(xs)
      : null}

  ${({ pushXs }) => !isUndefined(pushXs) && getOffsetStyles(pushXs)}

  ${({ orderXs }) => !isUndefined(orderXs) && getOrderStyles(orderXs)}

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${({ sm }) =>
      !isUndefined(sm)
        ? isString(sm)
          ? columnAutoWithMixin
          : getWidthStyles(sm)
        : null}

    ${({ pushSm }) => !isUndefined(pushSm) && getOffsetStyles(pushSm)}

    ${({ orderSm }) => !isUndefined(orderSm) && getOrderStyles(orderSm)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ md }) =>
      !isUndefined(md)
        ? isString(md)
          ? columnAutoWithMixin
          : getWidthStyles(md)
        : null}

    ${({ pushMd }) => !isUndefined(pushMd) && getOffsetStyles(pushMd)}

    ${({ orderMd }) => !isUndefined(orderMd) && getOrderStyles(orderMd)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ lg }) =>
      !isUndefined(lg)
        ? isString(lg)
          ? columnAutoWithMixin
          : getWidthStyles(lg)
        : null}

    ${({ pushLg }) => !isUndefined(pushLg) && getOffsetStyles(pushLg)}

    ${({ orderLg }) => !isUndefined(orderLg) && getOrderStyles(orderLg)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    ${({ xl }) =>
      !isUndefined(xl)
        ? isString(xl)
          ? columnAutoWithMixin
          : getWidthStyles(xl)
        : null}


    ${({ pushXl }) => !isUndefined(pushXl) && getOffsetStyles(pushXl)}

    ${({ orderXl }) => !isUndefined(orderXl) && getOrderStyles(orderXl)}
  }
`;

export const Row = styled.div<RowProps>`
  display: flex;
  width: ${({ gutter = 1, theme }) =>
    `calc(100% + ${theme.gutter * gutter * 2}px)`};
  margin: ${({ gutter = 1, theme }) => `-${theme.gutter * gutter}px`};

  ${({ justify }) => justify && `justify-content: ${justify};`}

  ${({ align }) => align && `align-items: ${align};`}

  ${({ wrap = 'wrap' }) => wrap && `flex-wrap: ${wrap};`}

  & > ${Column} {
    padding: ${({ gutter = 1, theme }) => `${theme.gutter * gutter}px`};
  }
`;
