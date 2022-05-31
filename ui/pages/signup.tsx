import { Button, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import { HeadTitle } from '../components/layout';

function Home() {
  return (
    <div>
      <HeadTitle title="Sign Up" />
      <Typography variant="h2" component="h1" align="center">Sign Up</Typography>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        onSubmit={(values) => console.log('submitted', values)}
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

            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        )}

      </Formik>
    </div>
  );
}

export default Home;
