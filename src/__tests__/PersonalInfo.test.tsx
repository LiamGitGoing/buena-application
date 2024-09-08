import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../context/formSlice';
import { FormState } from '../types/types';
import PersonalInfo from '../pages/PersonalInfo';
import '@testing-library/jest-dom';
import { useLocation, useNavigate } from 'react-router-dom';

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
  return render(
    <Provider store={store}>
      <PersonalInfo />
    </Provider>
  );
};

describe('PersonalInfo Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/personal-info' });
    renderWithState({
      fullName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      postalCode: '',
      salary: '',
    });

    expect(screen.getByText(/Personal Information/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Street Address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Postal Code/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/City/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
  });

  it('navigates to /salary-indications when the "Next" button is clicked and form is valid', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/personal-info' });
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    renderWithState({
      fullName: 'John Doe',
      email: 'john@example.com',
      phoneNumber: '1234567890',
      streetAddress: '123 Main St',
      city: 'Sample City',
      postalCode: '12345',
      salary: '50000',
    });

    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    expect(navigate).toHaveBeenCalledWith('/salary-indications');
  });

  it('disables the "Next" button when any form field value exceeds 40 characters', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/personal-info' });
    renderWithState({
      fullName: 'John Doe',
      email: 'john@example.com',
      phoneNumber: '12345678901234567890123456789012345678901',
      streetAddress: '123 Main St',
      city: 'Sample City',
      postalCode: '12345',
      salary: '50000',
    });

    expect(screen.getByRole('button', { name: /Next/i })).toBeDisabled();
  });

  it('enables the "Next" button when all form field values are valid', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/personal-info' });
    renderWithState({
      fullName: 'John Doe',
      email: 'john@example.com',
      phoneNumber: '1234567890',
      streetAddress: '123 Main St',
      city: 'Sample City',
      postalCode: '12345',
      salary: '50000',
    });

    expect(screen.getByRole('button', { name: /Next/i })).not.toBeDisabled();
  });

  it('updates form field values in the Redux store on input change', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/personal-info' });
    const store = createTestStore({
      fullName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      postalCode: '',
      salary: '',
    });

    render(
      <Provider store={store}>
        <PersonalInfo />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText(/Full Name/i), {
      target: { value: 'Jane Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: 'jane@example.com' },
    });

    const state = store.getState();
    expect(state.form.fullName).toBe('Jane Doe');
    expect(state.form.email).toBe('jane@example.com');
  });
});
