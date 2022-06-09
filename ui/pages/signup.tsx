import { Formik } from 'formik';
import {
  Button, TextField, Typography, Link as MUILink,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Save as SaveIcon } from '@mui/icons-material';
import Link from 'next/link';
import { HeadTitle } from '../components/layout';

function SignUp() {
  return (
    <div style={{ padding: '1rem' }}>
      <HeadTitle title="Sign Up" />
      <Typography variant="h2" component="h1" align="center">Sign Up</Typography>
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
            <TextField
              id="name"
              type="text"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              required
              fullWidth
              margin="normal"
            />

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
              id="email"
              type="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
                  Submit
                </LoadingButton>
              )
              : (
                <Button color="primary" variant="contained" fullWidth type="submit">
                  Submit
                </Button>
              )}

            <div>
              Already have an account?
              {' '}
              <Link href="/login" passHref>
                <MUILink underline="none">Log In!</MUILink>
              </Link>
            </div>

          </form>
        )}

      </Formik>
    </div>
  );
}

export default SignUp;
