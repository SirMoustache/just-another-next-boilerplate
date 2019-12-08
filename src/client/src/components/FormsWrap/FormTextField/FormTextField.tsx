/**
 * Absolute Imports
 */
import React from 'react';
import { useField, FieldAttributes } from 'formik';

/**
 * Material UI
 */
import { TextField, TextFieldProps } from '@material-ui/core';

// export type TextFieldProps = TextFieldProps;
export type FormTextFieldProps = FieldAttributes<TextFieldProps>; // & FieldProps;

const FormTextField = ({
  label,
  id,
  placeholder,
  InputProps,
  fullWidth = true,
  ...rest
}: FormTextFieldProps) => {
  // @ts-ignore
  const [field, meta] = useField(rest);

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      fullWidth={fullWidth}
      error={Boolean(meta.error) && Boolean(meta.touched)}
      id={id}
      InputProps={InputProps}
      helperText={Boolean(meta.error && meta.touched) && meta.error}
      {...rest}
      {...field}
    />
  );
};

export default FormTextField;
