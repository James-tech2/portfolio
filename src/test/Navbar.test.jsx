import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

const createSectionRef = () => ({
  current: {
    home: { scrollIntoView: jest.fn() },
    about: { scrollIntoView: jest.fn() },
    skills: { scrollIntoView: jest.fn() },
    projects: { scrollIntoView: jest.fn() },
    contact: { scrollIntoView: jest.fn() },
  },
});

describe('Navbar', () => {
  test('renders navigation links and toggle button', () => {
    render(<Navbar sectionRef={createSectionRef()} />);

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to home section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to about section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to skills section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to projects section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to contact section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();
  });

  test('clicking a nav link scrolls to the correct section', () => {
    const sectionRef = createSectionRef();
    render(<Navbar sectionRef={sectionRef} />);

    fireEvent.click(screen.getByRole('button', { name: /jump to about section/i }));
    fireEvent.click(screen.getByRole('button', { name: /jump to skills section/i }));
    fireEvent.click(screen.getByRole('button', { name: /jump to projects section/i }));
    fireEvent.click(screen.getByRole('button', { name: /jump to contact section/i }));
    fireEvent.click(screen.getByRole('button', { name: /jump to home section/i }));

    expect(sectionRef.current.about.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(sectionRef.current.skills.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(sectionRef.current.projects.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(sectionRef.current.contact.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(sectionRef.current.home.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  test('toggles the mobile menu when the menu button is clicked', () => {
    render(<Navbar sectionRef={createSectionRef()} />);

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('menu', { name: /mobile navigation/i })).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });
});
