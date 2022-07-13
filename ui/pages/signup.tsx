import { Heading } from '@chakra-ui/react';
import { SignUpForm } from '../components';
import { HeadTitle, Link } from '../components/layout';

function SignUp() {
  return (
    <div style={{ padding: '1rem' }}>
      <HeadTitle title="Sign Up" />
      <main>
        <Heading>Log In</Heading>
        <SignUpForm />
        <div>
          Already have an account?
          {' '}
          <Link href="/login">Log In!</Link>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
