import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import formReducer from '../../context/formSlice';
import PersonalInfo from '../PersonalInfo';
import renderWithProviders from '../../context/helpers/renderWithProviders';
import { useNavigate } from 'react-router-dom';

// Mock react-router-dom's useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('PersonalInfo Component', () => {
  it('renders the input fields and button correctly', () => {
    renderWithProviders(<PersonalInfo />);

    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('dispatches setFullName, setEmail, and setPhoneNumber actions on input change', () => {
    const store = configureStore({ reducer: { form: formReducer } });
    renderWithProviders(<PersonalInfo />, { store });

    fireEvent.change(screen.getByPlaceholderText('Full Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Phone Number'), { target: { value: '1234567890' } });

    const state = store.getState().form;
    expect(state.fullName).toBe('John Doe');
    expect(state.email).toBe('john@example.com');
    expect(state.phoneNumber).toBe('1234567890');
  });

  it('navigates to the next page when the Next button is clicked', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    renderWithProviders(<PersonalInfo />);

    fireEvent.click(screen.getByText('Next'));

    expect(mockNavigate).toHaveBeenCalledWith('/salary-indications');
  });
});
