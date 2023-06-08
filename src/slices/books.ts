import { createSlice } from "@reduxjs/toolkit"
import { BookApiResponse, QueryParams } from "../utils/types"
import axios from '../utils/axios';
import { Dispatch } from "../store";
import { DEFAULT_FILTERS, DEFAULT_PAGE_NUMBER, DEFAULT_ITEMS_PER_PAGE } from "../utils/constants";


export interface BookInitialState {
    allBooks: BookApiResponse | null,
    loading: boolean
}

export const initialState: BookInitialState = {
    allBooks: null,
    loading: false
}


const slice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        getBooks(state, action) {
            state.allBooks = action.payload;
        },
        loading(state, action) {
            state.loading = action.payload
        },
    },
});

export const reducer = slice.reducer;
export const actions = slice.actions;


export const fetchBooks = (params?: QueryParams) => async (dispatch: Dispatch) => {
    try {
        const data = {
            page: params?.page || DEFAULT_PAGE_NUMBER,
            itemsPerPage: params?.itemsPerPage || DEFAULT_ITEMS_PER_PAGE,
            filters: params?.filters || DEFAULT_FILTERS
        }

        dispatch(slice.actions.loading(true));
        const response = await axios.post('api/books', data);
        if (response.status === 200) {
            dispatch(slice.actions.getBooks(response.data));
            return response;
        }
        return response;

    } catch (err: any) {
        return err;
    }
    finally {
        dispatch(slice.actions.loading(false));
    }
};