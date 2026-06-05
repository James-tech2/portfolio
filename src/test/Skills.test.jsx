import { render, screen } from '@testing-library/react';
import Skills from '../components/Skills';

describe('Skills', () => {
  test('renders skills section with skill cards', () => {
    render(<Skills />);

    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Front-end/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Back-end & Databases/i })).toBeInTheDocument();
    expect(screen.getByText(/React/i)).toBeInTheDocument();
  });
});
