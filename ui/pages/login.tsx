import { Formik } from 'formik';
import {
  Button, TextField, Typography, Link as MUILink,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Save as SaveIcon } from '@mui/icons-material';
import Link from 'next/link';
import { HeadTitle } from '../components/layout';

function LogIn() {
  return (
    <div style={{ padding: '1rem' }}>
      <HeadTitle title="Login In" />
      <Typography variant="h2" component="h1" align="center">Log In</Typography>
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
            <TextField
              id="username"
              type="text"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              required
              fullWidth
              margin="normal"
            />

            <TextField
              id="password"
              type="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              required
              fullWidth
              margin="normal"
            />

            { formik.isSubmitting
              ? (
                <LoadingButton
                  loading
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                  variant="outlined"
                  fullWidth
                >
                  Log In
                </LoadingButton>
              )
              : (
                <Button color="primary" variant="contained" fullWidth type="submit">
                  Log In
                </Button>
              )}

            <div>
              Don&apos;t have an account?
              {' '}
              <Link href="/signup" passHref>
                <MUILink underline="none">Sign Up!</MUILink>
              </Link>
            </div>

          </form>
        )}

      </Formik>
    </div>
  );
}

export default LogIn;
