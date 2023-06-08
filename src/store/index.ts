import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export type Dispatch = typeof store.dispatch;
export const useDispatch = () => useReduxDispatch<Dispatch>();

export default store;
