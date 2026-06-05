import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../components/Contact';

describe('Contact', () => {
  test('renders contact section and links', () => {
    render(<Contact />);

    expect(screen.getByRole('heading', { name: /let's build something together/i })).toBeInTheDocument();
    expect(screen.getByText(/hello@jamesblack\.dev/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('send message button prevents default browser submission', () => {
    render(<Contact />);

    const sendButton = screen.getByRole('button', { name: /send message/i });
    const preventSpy = jest.spyOn(Event.prototype, 'preventDefault');

    fireEvent.click(sendButton);

    expect(preventSpy).toHaveBeenCalled();
    preventSpy.mockRestore();
  });
});
