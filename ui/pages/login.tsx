import { Heading } from '@chakra-ui/react';
import { HeadTitle, Link } from '../components/layout';
import { LoginForm } from '../components';

function LogIn() {
  return (
    <div style={{ padding: '1rem' }}>
      <HeadTitle title="Login In" />
      <Heading>Log In</Heading>
      <LoginForm />
      <div>
        Don&apos;t have an account?
        {' '}
        <Link href="/signup">Sign Up!</Link>
      </div>
    </div>
  );
}

export default LogIn;
