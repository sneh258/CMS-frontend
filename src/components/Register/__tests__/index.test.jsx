import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UserRegister from '..';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('Login Component', () => {
  it('should render correctly', () => {
    render(<UserRegister />);
    expect(screen.getByTestId('register-form')).toBeTruthy();
  });

  it('should update email and password on input change', () => {
    render(<UserRegister />);
    const emailInput = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    expect(emailInput.value).toBe('');
    expect(password.value).toBe('');
    fireEvent.change(emailInput, { target: { value: 'sneha@gmail.com' } });
    fireEvent.change(password, { target: { value: 'code@academy' } });
    expect(emailInput.value).toBe('sneha@gmail.com');
    expect(password.value).toBe('code@academy');
  });
});
