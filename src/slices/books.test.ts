import { initialState, reducer as booksReducers, actions } from "./books";

describe("tests for bookSlice", () => {
    it("initialize slice with initialValue", () => {
        const booksSliceInit = booksReducers(initialState, { type: "unknown" });
        expect(booksSliceInit).toBe(initialState);
    });

    it('getBooks, should update book list', () => {
        const testData = {
            books: [
                { book_author: ["Wole"], book_pages: 104, book_publication_city: "London", book_publication_country: "UK", book_publication_year: 1529, book_title: "New Book", id: 2086 }],
            count: 1
        }
        const state = booksReducers(initialState, actions.getBooks(testData));
        expect(state.allBooks).toEqual(testData);
    })

    it('loading, should update the loading state', () => {
        const state = booksReducers(initialState, actions.loading(true));
        expect(state.loading).toBe(true);
    })
});