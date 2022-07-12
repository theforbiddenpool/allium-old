import { Formik } from 'formik';
import { Save as SaveIcon } from '@mui/icons-material';
import {
  Button,
  FormControl, FormErrorMessage, FormLabel, Heading, Input,
} from '@chakra-ui/react';
import { HeadTitle, Link } from '../components/layout';

function LogIn() {
  return (
    <div style={{ padding: '1rem' }}>
      <HeadTitle title="Login In" />
      <Heading>Log In</Heading>
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
            <FormControl isInvalid={formik.touched.username && Boolean(formik.errors.username)}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                required
              />
              {formik.touched.username && Boolean(formik.errors.username)
                && <FormErrorMessage>{formik.errors.username}</FormErrorMessage>}
            </FormControl>

            <FormControl isInvalid={formik.touched.password && Boolean(formik.errors.password)}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                required
              />
              {formik.touched.password && Boolean(formik.errors.password)
                && <FormErrorMessage>{formik.errors.password}</FormErrorMessage>}
            </FormControl>

            <Button
              type="submit"
              variant="solid"
              leftIcon={<SaveIcon />}
              isLoading={formik.isSubmitting}
            >
              Log In
            </Button>

            <div>
              Don&apos;t have an account?
              {' '}
              <Link href="/signup">Sign Up!</Link>
            </div>

          </form>
        )}

      </Formik>
    </div>
  );
}

export default LogIn;
