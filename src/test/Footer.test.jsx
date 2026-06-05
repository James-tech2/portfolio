import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('renders author name and contact details', () => {
    render(<Footer />);
    
    const nameNodes = screen.getAllByText(/James Black/i);
    expect(nameNodes.length).toBeGreaterThanOrEqual(1);
    expect(nameNodes.some((n) => n.textContent === 'James Black')).toBe(true);
    expect(screen.getByText(/hello@jamesblack\.dev/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2026 James Black/i)).toBeInTheDocument();
  });
});
