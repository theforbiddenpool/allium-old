import { Formik, FormikValues } from 'formik';
import { Button } from '@chakra-ui/react';
import { MdLogin } from 'react-icons/md';
import { loginSchema } from '../../utils/validation/schemas';
import { FormikInput } from '../layout';

interface LoginFormProps {
  onSubmit?: (values: FormikValues) => void
}

function LoginForm({ onSubmit }: LoginFormProps) {
  return (
    <Formik
      initialValues={{
        username: '', password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit?.(values);
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
