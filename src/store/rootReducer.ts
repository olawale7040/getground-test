import { combineReducers } from '@reduxjs/toolkit';
import { reducer as booksReducer } from '../slices/books';

const rootReducer = combineReducers({
    books: booksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
