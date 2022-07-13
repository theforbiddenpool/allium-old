import { Formik, FormikValues } from 'formik';
import { Button } from '@chakra-ui/react';
import { MdLogin } from 'react-icons/md';
import { FormikInput } from '../layout';

interface SignUpFormProps {
  onSubmit?: (values: FormikValues) => void
}

function SignUpForm({ onSubmit }: SignUpFormProps) {
  return (
    <Formik
      initialValues={{
        name: '', username: '', email: '', password: '',
      }}
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
