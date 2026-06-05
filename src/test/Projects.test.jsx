import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';

describe('Projects', () => {
  test('renders project list and sample cards', () => {
    render(<Projects />);

    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByText(/Realtime Chat App/i)).toBeInTheDocument();
    expect(screen.getByText(/E‑commerce Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/SaaS Analytics Dashboard/i)).toBeInTheDocument();
  });
});
