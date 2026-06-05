import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../components/Home';

describe('Home', () => {
  test('renders hero content and buttons', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /building modern web apps/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /contact me/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /view projects/i })).toBeInTheDocument();
  });

  test('clicking buttons scrolls to the correct sections', () => {
    const contactSection = document.createElement('div');
    contactSection.id = 'contact';
    const projectsSection = document.createElement('div');
    projectsSection.id = 'projects';

    const contactScroll = jest.fn();
    const projectsScroll = jest.fn();

    contactSection.scrollIntoView = contactScroll;
    projectsSection.scrollIntoView = projectsScroll;

    document.body.append(contactSection, projectsSection);

    render(<Home />);

    fireEvent.click(screen.getByRole('button', { name: /contact me/i }));
    fireEvent.click(screen.getByRole('button', { name: /view projects/i }));

    expect(contactScroll).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(projectsScroll).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});
