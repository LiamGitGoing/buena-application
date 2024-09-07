import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../context/formSlice';
import Summary from '../pages/Summary';
import '@testing-library/jest-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormState } from '../types/types';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
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
      <Summary />
    </Provider>
  );
  return { ...utils, store };
};

describe('Summary Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: '/summary',
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

    expect(screen.getByText(/Summary/i)).toBeInTheDocument();
    expect(screen.getByText(/Full Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone Number:/i)).toBeInTheDocument();
    expect(screen.getByText(/Street Address:/i)).toBeInTheDocument();
    expect(screen.getByText(/Postal Code:/i)).toBeInTheDocument();
    expect(screen.getByText(/City:/i)).toBeInTheDocument();
    expect(screen.getByText(/Salary Indications:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Edit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('displays values from the Redux store', () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: '/summary',
    });

    renderWithState({
      fullName: 'John Doe',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      salary: "1'000 - 2'000",
      streetAddress: '123 Main St',
      city: 'Sample City',
      postalCode: '12345',
    });

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('123-456-7890')).toBeInTheDocument();
    expect(screen.getByText("1'000 - 2'000")).toBeInTheDocument();
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('Sample City')).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();
  });

  it('navigates to /personal-info when the "Edit" button is clicked', () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: '/summary',
    });
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    renderWithState({
      fullName: 'John Doe',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      salary: "1'000 - 2'000",
      streetAddress: '123 Main St',
      city: 'Sample City',
      postalCode: '12345',
    });

    fireEvent.click(screen.getByRole('button', { name: /Edit/i }));

    expect(navigate).toHaveBeenCalledWith('/personal-info');
  });

  it('redirects to the correct URL when the "Submit" button is clicked', () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: '/summary',
    });
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    const locationMock = { href: '' };
    Object.defineProperty(window, 'location', {
      value: locationMock,
      writable: true,
    });

    renderWithState({
      fullName: 'John Doe',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      salary: "1'000 - 2'000",
      streetAddress: '123 Main St',
      city: 'Sample City',
      postalCode: '12345',
    });

    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(locationMock.href).toBe('https://www.buena.com');
  });
});
