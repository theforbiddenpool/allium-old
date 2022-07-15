import { object, string } from 'yup';

export const name = string()
  .max(250, 'Name must be 250 characters or less')
  .required('Name is required');

export const username = string()
  .max(100, 'Username must be 100 characters or less')
  .required('Username is required');

export const email = string().email('Email must be valid')
  .required('Email is required');

export const password = string()
  .min(8, 'Password must contain at least 8 characters')
  .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Password is too weak')
  .required('Password is required');

export const passwordWithoutStrength = string()
  .required('Password is required');

export const signUpSchema = object({
  name,
  username,
  email,
  password,
});

export const loginSchema = object({
  username,
  password: passwordWithoutStrength,
});

export default {
  signUpSchema, loginSchema,
};
