export interface IBook {
    id: string;
    title: string;
    authorFirstName: string;
    authorLastName: string;
    isbn: number;
    pagesNr: number;
}

export interface IBooks {
    books: IBook[]
}

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    birthday: Date;
}

export interface IReview {
    id: string;
    book: string;
    user: string;
    startDate: Date;
    finishDate: Date;
    rating: number;
    review: string;
}

export interface IReviews {
    reviews: IReview[]
}

export interface IUsers {
    users: IUser[]
}

export interface IDBError {
    code: string;
    errno: number;
    sqlMessage: string;
    sqlState: string;
    index: string;
    sql: string;
}