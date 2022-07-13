import { Formik } from 'formik';
import { Button } from '@chakra-ui/react';
import { MdLogin } from 'react-icons/md';
import { FormikInput } from '../layout';

function LoginForm() {
  return (
    <Formik
      initialValues={{
        username: '', password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('submitted', values);
        setTimeout(() => { setSubmitting(false); }, 400);
      }}
    >
      { (formik) => (
        <form onSubmit={formik.handleSubmit}>
          <FormikInput
            id="username"
            name="username"
            label="Username"
            type="text"
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
            variant="solid"
            leftIcon={<MdLogin />}
            isLoading={formik.isSubmitting}
          >
            Log In
          </Button>

        </form>
      )}

    </Formik>
  );
}

export default LoginForm;
