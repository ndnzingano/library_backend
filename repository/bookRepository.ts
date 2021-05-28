import connection from '../config/dbConnection'
import { IBook } from '../utils/types';


export const getAllBooks = (callback: any) => {
    const sql = "SELECT * FROM books";

    connection.query(sql, (erro: any, rows: any) => {
        if(erro){            
            callback(erro, null);
        }
        else {
            callback(null, rows);
        }
    })
}

export const insertBook = (book: IBook, callback: any) => {   
    //SQL
    const sql = "INSERT INTO books(id,title,authorFirstName,authorLastName,isbn,pagesNr) VALUES (?,?,?,?,?,?)"

    connection.query(sql, [book.id, book.title, book.authorFirstName, book.authorLastName, book.isbn, book.pagesNr],
        (erro, rows) => {
            if(erro){
                callback(erro, null)
            }
            else {
                callback(null, book)
            }
    })    
}

export const getByBookId = (id: string, callback: any) => {

    const sql = "SELECT * FROM books WHERE id=?";

    connection.query(sql, [id], (err, rows) => {
        if(err){
            const error = {
                status: 500,
                msg: err
            }
            callback(error, null);
        }
        else {
            if(rows && rows.length > 0){
                callback(null,rows[0])
            }
            else{ 
                const error = {
                    status: 404,
                    msg: "book not found"
                }
                callback(error, null);
            }
        }
    })
}

export const deleteBook = (id: string, callback: any) => {
    const sql = `DELETE FROM books WHERE id=?`;

    connection.query(sql, [id], (err, rows) => {
        if(err){
            const error = {
                status: 500,
                msg: err
            }
            callback(error, null);
        }
        else {
            if(rows.affectedRows){

                callback(null, id);
            }
            else {
                const error = {
                    status: 500,
                    msg: err
                }
                callback(error, null);    
            }
        }
    })            
}