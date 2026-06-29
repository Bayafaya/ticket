export interface Pageable {
    pageNumber: number;
    pageSize: number;
    sort: [];
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface RootPageable<T> {
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: [];
    numberOfElements: number;
    first: boolean;
    empty: boolean;
    pageable: Pageable;
    content: T;
}

export interface PageParams {
    page: number;
    size: number;
    sort?: string[];
}
