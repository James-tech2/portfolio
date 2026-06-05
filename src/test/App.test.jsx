import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders main app content and navigation', () => {
    render(<App />);

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Modern Web Apps/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Hi, I’m James Black/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Skills/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Let's Build Something Together/i })).toBeInTheDocument();
    expect(screen.getByText(/© 2026 James Black/i)).toBeInTheDocument();
  });
});
