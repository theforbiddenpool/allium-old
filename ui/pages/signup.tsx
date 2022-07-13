import { Heading } from '@chakra-ui/react';
import { HeadTitle, Link } from '../components/layout';
import { SignUpForm } from '../components';

function SignUp() {
  return (
    <div style={{ padding: '1rem' }}>
      <HeadTitle title="Sign Up" />
      <Heading>Log In</Heading>
      <SignUpForm />
      <div>
        Already have an account?
        {' '}
        <Link href="/login">Log In!</Link>
      </div>
    </div>
  );
}

export default SignUp;
