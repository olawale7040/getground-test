
export type Book = {
    id: number;
    book_author: string[];
    book_publication_city: string;
    book_publication_country: string;
    book_publication_year: string;
    book_pages: number;
    book_title: string;
};

export type BookApiResponse = {
    books: Book[];
    count: number;
}

type QueryFilter = {
    type: string;
    values: string[]
}
export type QueryParams = {
    page?: number;
    itemsPerPage?: number;
    filters?: QueryFilter[];
};