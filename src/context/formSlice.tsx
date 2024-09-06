import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  fullName: string;
  email: string;
  phoneNumber: string;
  salary: string;
  streetAddress?: string;
  postalCode?: string;
  city?: string;
}

const initialState: FormState = {
  fullName: '',
  email: '',
  phoneNumber: '',
  salary: '',
  streetAddress: '',
  postalCode: '',
  city: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFullName(state, action: PayloadAction<string>) {
      state.fullName = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
    setSalary(state, action: PayloadAction<string>) {
      state.salary = action.payload;
    },
    setStreetAddress(state, action: PayloadAction<string>) {
      state.streetAddress = action.payload;
    },
    setPostalCode(state, action: PayloadAction<string>) {
      state.postalCode = action.payload;
    },
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
  },
});

export const {
  setFullName,
  setEmail,
  setPhoneNumber,
  setSalary,
  setStreetAddress,
  setPostalCode,
  setCity,
} = formSlice.actions;

export default formSlice.reducer;
