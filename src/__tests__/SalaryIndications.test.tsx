import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../context/formSlice';
import { FormState } from '../types/types';
import SalaryIndications from '../pages/SalaryIndications';
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
  const utils = render(
    <Provider store={store}>
      <SalaryIndications />
    </Provider>
  );
  return { ...utils, store };
};

describe('SalaryIndications Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: '/salary-indications',
    });
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    renderWithState({
      fullName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      postalCode: '',
      salary: '',
    });

    expect(screen.getByText(/Your Salary Range/i)).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: /0 - 1'000/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: /1'000 - 2'000/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: /2'000 - 3'000/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: /3'000 - 4'000/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: /More than 4'000/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
  });

  it('updates the salary in the Redux store when a radio button is selected', async () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: '/salary-indications',
    });
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());

    const { store } = renderWithState({
      fullName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      postalCode: '',
      salary: '',
    });

    fireEvent.click(screen.getByRole('radio', { name: /1'000 - 2'000/i }));

    await waitFor(() => {
      const state = store.getState();
      expect(state.form.salary).toBe("1'000 - 2'000");
    });
  });

  it('navigates to /summary when the "Next" button is clicked', () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: '/salary-indications',
    });
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    renderWithState({
      fullName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      postalCode: '',
      salary: "1'000 - 2'000",
    });

    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    expect(navigate).toHaveBeenCalledWith('/summary');
  });

  it('renders the ProgressIndicator component', () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: '/salary-indications',
    });
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());

    renderWithState({
      fullName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      postalCode: '',
      salary: "1'000 - 2'000",
    });

    expect(screen.getByTestId('progress-indicator')).toBeInTheDocument();
  });
});
