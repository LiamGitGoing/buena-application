import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
    fullName: string;
    email: string;
    phoneNumber: string;
    salary: string;
}

const initialState: FormState = {
    fullName: '',
    email: '',
    phoneNumber: '',
    salary: '',
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
    },
});

export const { setFullName, setEmail, setPhoneNumber, setSalary } = formSlice.actions;

export default formSlice.reducer;
