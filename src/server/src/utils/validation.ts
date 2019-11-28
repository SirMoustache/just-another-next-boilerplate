import validator from 'validator';

export const validate = (
  validation: (val: any) => boolean,
  message: string,
  value: any,
): void => {
  if (!validation(value)) {
    throw new Error(message);
  }
};

export const isEmail = validator.isEmail;
