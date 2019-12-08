/**
 * Absolute imports
 */
import * as yup from 'yup';

const validateSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .required('This field is required'),
  password: yup.string().required('This field is required'),
});

export default validateSchema;
