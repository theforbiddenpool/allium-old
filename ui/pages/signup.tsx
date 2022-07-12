import { Formik } from 'formik';
import { Save as SaveIcon } from '@mui/icons-material';
import {
  FormControl, FormErrorMessage, FormLabel, Heading, Input, Button,
} from '@chakra-ui/react';
import { HeadTitle, Link } from '../components/layout';

function SignUp() {
  return (
    <div style={{ padding: '1rem' }}>
      <HeadTitle title="Sign Up" />
      <Heading>Log In</Heading>
      <Formik
        initialValues={{
          name: '', username: '', email: '', password: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('submitted', values);
          setTimeout(() => { setSubmitting(false); }, 400);
        }}
      >
        { (formik) => (
          <form onSubmit={formik.handleSubmit}>
            <FormControl isInvalid={formik.touched.name && Boolean(formik.errors.name)}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                required
              />
              {formik.touched.name && Boolean(formik.errors.name)
                && <FormErrorMessage>{formik.errors.name}</FormErrorMessage>}
            </FormControl>

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

            <FormControl isInvalid={formik.touched.email && Boolean(formik.errors.email)}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                required
              />
              {formik.touched.email && Boolean(formik.errors.email)
                && <FormErrorMessage>{formik.errors.email}</FormErrorMessage>}
            </FormControl>

            <FormControl isInvalid={formik.touched.password && Boolean(formik.errors.password)}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="text"
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
              Sign Up
            </Button>

            <div>
              Already have an account?
              {' '}
              <Link href="/login">Log In!</Link>
            </div>

          </form>
        )}

      </Formik>
    </div>
  );
}

export default SignUp;
