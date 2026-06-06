import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About', () => {
  test('renders about section content', () => {
    render(<About />);

    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
    expect(screen.getByText(/Hi, I’m James Black\. I build modern full-stack web experiences\./i)).toBeInTheDocument();
  });
});
