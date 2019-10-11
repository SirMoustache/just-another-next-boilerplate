export const isUndefined = (val: any): val is undefined =>
  typeof val === 'undefined';

export const isString = (val: any): val is string => typeof val === 'string';
