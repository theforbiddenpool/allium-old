import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from './SignUpForm';

describe('Sign Up Form', () => {
  test('renders and submits', async () => {
    const handleSubmit = jest.fn();
    render(<SignUpForm onSubmit={handleSubmit} />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/^name/i), 'John');
    await user.type(screen.getByLabelText(/username/i), 'john');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');

    await user.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith({
      name: 'John',
      username: 'john',
      email: 'john@example.com',
      password: 'password123',
    }));
  });
});
