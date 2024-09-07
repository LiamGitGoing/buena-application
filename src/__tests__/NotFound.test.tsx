import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../context/formSlice';
import NotFound from '../pages/NotFound';
import '@testing-library/jest-dom';
import { useNavigate } from 'react-router-dom';
import { FormState } from '../types/types';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

const createTestStore = (initialState: FormState) => {
  return configureStore({
    reducer: {
      form: formReducer,
    },
    preloadedState: {
      form: initialState,
    },
  });
};

const renderWithState = (initialState: FormState) => {
  const store = createTestStore(initialState);
  const utils = render(
    <Provider store={store}>
      <NotFound />
    </Provider>
  );
  return { ...utils, store };
};

describe('NotFound Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    renderWithState({
      fullName: '',
      email: '',
      phoneNumber: '',
      salary: '',
      streetAddress: '',
      city: '',
      postalCode: '',
    });

    expect(screen.getByText(/404 - Page Not Found/i)).toBeInTheDocument();
    expect(
      screen.getByText(/The page you are looking for does not exist./i)
    ).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJwZmNxcmd0bXZ1eHg4NXgzMHFtZTJ2enFwNjM1YXpnaDJreWxubCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J3MJAf2FbKO8oaTaTv/giphy.gif'
    );
    expect(
      screen.getByRole('button', { name: /Go to Home/i })
    ).toBeInTheDocument();
  });

  it('redirects to the home page when the "Go to Home" button is clicked', () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    const locationMock = { href: '' };
    Object.defineProperty(window, 'location', {
      value: locationMock,
      writable: true,
    });

    renderWithState({
      fullName: '',
      email: '',
      phoneNumber: '',
      salary: '',
      streetAddress: '',
      city: '',
      postalCode: '',
    });

    fireEvent.click(screen.getByRole('button', { name: /Go to Home/i }));

    expect(locationMock.href).toBe('/');
  });
});
