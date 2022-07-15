import { Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { Button } from '@chakra-ui/react';
import { MdLogin } from 'react-icons/md';
import { FormikInput } from '../layout';

interface SignUpFormProps {
  onSubmit?: (values: FormikValues) => void
}

const schema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must contain at least 3 characters')
    .max(250, 'Name must be 250 characters or less')
    .required('Name is required'),
  username: Yup.string()
    .max(100, 'Username must be 100 characters or less')
    .required('Username is required'),
  email: Yup.string().email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must contain at least 8 characters')
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Password is too weak')
    .required('Password is required'),
});

function SignUpForm({ onSubmit }: SignUpFormProps) {
  return (
    <Formik
      initialValues={{
        name: '', username: '', email: '', password: '',
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit?.(values);
        console.log('submitted', values);
        setTimeout(() => { setSubmitting(false); }, 400);
      }}
    >
      { (formik) => (
        <form onSubmit={formik.handleSubmit}>
          <FormikInput
            id="name"
            name="name"
            label="Name"
            type="text"
            isRequired
          />
          <FormikInput
            id="username"
            name="username"
            label="Username"
            type="text"
            isRequired
          />
          <FormikInput
            id="email"
            name="email"
            label="Email"
            type="email"
            isRequired
          />
          <FormikInput
            id="password"
            name="password"
            label="Password"
            type="password"
            isRequired
          />

          <Button
            type="submit"
            leftIcon={<MdLogin />}
            isLoading={formik.isSubmitting}
          >
            Sign Up
          </Button>

        </form>
      )}

    </Formik>
  );
}

export default SignUpForm;
