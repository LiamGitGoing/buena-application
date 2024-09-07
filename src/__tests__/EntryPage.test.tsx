import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate, useLocation } from 'react-router-dom';
import EntryPage from '../pages/EntryPage';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

describe('EntryPage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/' });

    render(<EntryPage />);

    expect(screen.getByText(/Register with Buena/i)).toBeInTheDocument();
    expect(
      screen.getByText(/and book your next apartment/i)
    ).toBeInTheDocument();
    expect(screen.getByTestId('hero-video')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
  });

  it('navigates to /personal-info when the "Next" button is clicked', () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/' });

    render(<EntryPage />);

    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    expect(navigate).toHaveBeenCalledWith('/personal-info');
  });
});
