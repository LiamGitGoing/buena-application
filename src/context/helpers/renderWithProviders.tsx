import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import formReducer from '../formSlice';

const renderWithProviders = (
  ui: ReactElement,
  { store = configureStore({ reducer: { form: formReducer } }) }: { store?: ReturnType<typeof configureStore> } = {}
) => {
  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
};

export default renderWithProviders;