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

export interface IDBError {
    code: string;
    errno: number;
    sqlMessage: string;
    sqlState: string;
    index: string;
    sql: string;
}