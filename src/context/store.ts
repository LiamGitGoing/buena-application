import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import formReducer from './formSlice';

/*
    I'd recommend not persisting the form state across browser sessions for such a short form 
    if this were to go to production, as it offers barely any value to the user but adds 
    security/privacy concerns for us. This is merely to showcase how I'd do it, 
    as requested in the task.
*/

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    form: formReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
