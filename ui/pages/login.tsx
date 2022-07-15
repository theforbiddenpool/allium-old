import { Heading } from '@chakra-ui/react';
import { LoginForm } from '../components';
import { HeadTitle, Link } from '../components/layout';

function LogIn() {
  return (
    <div style={{ padding: '1rem' }}>
      <HeadTitle title="Login In" />
      <main>
        <Heading>Log In</Heading>
        <LoginForm />
        <div>
          Don&apos;t have an account?
          {' '}
          <Link href="/signup">Sign Up!</Link>
        </div>
      </main>
    </div>
  );
}

export default LogIn;
