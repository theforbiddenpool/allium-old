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
    await user.type(screen.getByLabelText(/password/i), '$Password123');

    await user.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith({
      name: 'John',
      username: 'john',
      email: 'john@example.com',
      password: '$Password123',
    }));
  });

  test('validation schema is correct', async () => {
    const handleSubmit = jest.fn();
    render(<SignUpForm onSubmit={handleSubmit} />);
    const user = userEvent.setup();

    // submit the form
    await user.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => {
      expect(handleSubmit).not.toHaveBeenCalled();

      // required fields
      expect(screen.queryByText(/^name is required/i)).toBeInTheDocument();
      expect(screen.queryByText(/username is required/i)).toBeInTheDocument();
      expect(screen.queryByText(/email is required/i)).toBeInTheDocument();
      expect(screen.queryByText(/password is required/i)).toBeInTheDocument();
    });

    // valid email
    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, 'jj');
    expect(screen.queryByText(/email must be valid/i)).toBeInTheDocument();
    await user.type(emailInput, 'ohn@email.com');
    expect(screen.queryByText(/email must be valid/i)).not.toBeInTheDocument();

    // valid password
    const passwordInput = screen.getByLabelText(/password/i);
    await user.type(passwordInput, 'pass');
    expect(screen.queryByText(/password must contain at least 8 characters/i)).toBeInTheDocument();
    await user.type(passwordInput, 'word');
    expect(screen.queryByText(/password is too weak/i)).toBeInTheDocument();
    await user.type(passwordInput, 'D123$');
    expect(screen.queryByText(/password is too weak/i)).not.toBeInTheDocument();
  });
});
