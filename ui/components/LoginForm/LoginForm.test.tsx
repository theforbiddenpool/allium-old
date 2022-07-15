import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('Login Form', () => {
  test('renders and submits', async () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/username/i), 'john');
    await user.type(screen.getByLabelText(/password/i), '$Password123');

    await user.click(screen.getByRole('button', { name: /log in/i }));

    await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith({
      username: 'john',
      password: '$Password123',
    }));
  });

  test('validation schema is correct', async () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /log in/i }));

    await waitFor(() => {
      expect(handleSubmit).not.toHaveBeenCalled();

      // required fields
      expect(screen.getByText(/username is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });

    // no password strength verification
    await user.type(screen.getByLabelText(/password/i), 'password');
    expect(screen.queryByText(/password is too weak/i)).not.toBeInTheDocument();
  });
});
