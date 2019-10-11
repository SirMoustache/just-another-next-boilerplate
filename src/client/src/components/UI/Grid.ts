/**
 * Absolute imports
 */
import styled, { css } from 'styled-components/macro';

/**
 * Utils
 */
import { isUndefined, isString } from '../../utils/valueUtils';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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

export const getWidth = (size: number) => `
  max-width: ${(size / 12) * 100}%;
  flex-basis: ${(size / 12) * 100}%;
`;

export const getOffset = (size: number) => `
  margin-left: ${(size / 12) * 100}%;
`;

export const getOrder = (order: number) => `
  order: ${order};
`;

export const columnWidthMixin = css<ColumnProps>`
  ${({ xs }) => typeof xs === 'number' && getWidth(xs)};
`;

export const Column = styled.div<ColumnProps>`
  ${({ grow }) => grow && `flex-grow: 1;`}

  ${({ xs }) =>
    !isUndefined(xs)
      ? isString(xs)
        ? columnAutoWithMixin
        : getWidth(xs)
      : null}

  ${({ pushXs }) => !isUndefined(pushXs) && getOffset(pushXs)}

  ${({ orderXs }) => !isUndefined(orderXs) && getOrder(orderXs)}

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    ${({ sm }) =>
      !isUndefined(sm)
        ? isString(sm)
          ? columnAutoWithMixin
          : getWidth(sm)
        : null}

    ${({ pushSm }) => !isUndefined(pushSm) && getOffset(pushSm)}

    ${({ orderSm }) => !isUndefined(orderSm) && getOrder(orderSm)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${({ md }) =>
      !isUndefined(md)
        ? isString(md)
          ? columnAutoWithMixin
          : getWidth(md)
        : null}

    ${({ pushMd }) => !isUndefined(pushMd) && getOffset(pushMd)}

    ${({ orderMd }) => !isUndefined(orderMd) && getOrder(orderMd)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    ${({ lg }) =>
      !isUndefined(lg)
        ? isString(lg)
          ? columnAutoWithMixin
          : getWidth(lg)
        : null}

    ${({ pushLg }) => !isUndefined(pushLg) && getOffset(pushLg)}

    ${({ orderLg }) => !isUndefined(orderLg) && getOrder(orderLg)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    ${({ xl }) =>
      !isUndefined(xl)
        ? isString(xl)
          ? columnAutoWithMixin
          : getWidth(xl)
        : null}


    ${({ pushXl }) => !isUndefined(pushXl) && getOffset(pushXl)}

    ${({ orderXl }) => !isUndefined(orderXl) && getOrder(orderXl)}
  }
`;

export const Row = styled.div<RowProps>`
  display: flex;
  width: ${({ gutter = 1, theme }) =>
    `calc(100% + ${theme.gutter * gutter * 2}px)`};
  margin: ${({ gutter = 1, theme }) => `-${theme.gutter * gutter}px`};

  ${({ justify }) => justify && `justify-content: ${justify};`}

  ${({ align }) => align && `align-items: ${align};`}

  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}

  & > ${Column} {
    padding: ${({ gutter = 1, theme }) => `${theme.gutter * gutter}px`};
  }
`;
