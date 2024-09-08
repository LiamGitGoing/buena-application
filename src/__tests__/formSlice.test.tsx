import formReducer, {
  setFullName,
  setEmail,
  setPhoneNumber,
  setSalary,
  setStreetAddress,
  setPostalCode,
  setCity,
} from '../context/formSlice';

describe('formSlice reducer', () => {
  const initialState = {
    fullName: '',
    email: '',
    phoneNumber: '',
    salary: '',
    streetAddress: '',
    postalCode: '',
    city: '',
  };

  it('should return the initial state', () => {
    expect(formReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setFullName', () => {
    const action = { type: setFullName.type, payload: 'John Doe' };
    const state = formReducer(initialState, action);
    expect(state.fullName).toEqual('John Doe');
  });

  it('should handle setEmail', () => {
    const action = { type: setEmail.type, payload: 'john@example.com' };
    const state = formReducer(initialState, action);
    expect(state.email).toEqual('john@example.com');
  });

  it('should handle setPhoneNumber', () => {
    const action = { type: setPhoneNumber.type, payload: '1234567890' };
    const state = formReducer(initialState, action);
    expect(state.phoneNumber).toEqual('1234567890');
  });

  it('should handle setSalary', () => {
    const action = { type: setSalary.type, payload: '3000-4000' };
    const state = formReducer(initialState, action);
    expect(state.salary).toEqual('3000-4000');
  });

  it('should handle setStreetAddress', () => {
    const action = { type: setStreetAddress.type, payload: '123 Main St' };
    const state = formReducer(initialState, action);
    expect(state.streetAddress).toEqual('123 Main St');
  });

  it('should handle setPostalCode', () => {
    const action = { type: setPostalCode.type, payload: '12345' };
    const state = formReducer(initialState, action);
    expect(state.postalCode).toEqual('12345');
  });

  it('should handle setCity', () => {
    const action = { type: setCity.type, payload: 'Springfield' };
    const state = formReducer(initialState, action);
    expect(state.city).toEqual('Springfield');
  });
});
