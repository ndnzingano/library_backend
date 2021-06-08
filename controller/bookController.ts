import connection from '../config/dbConnection'
import { IBook, IDBError } from '../utils/types'
import { deleteBook, getAllBooks, getByBookId, insertBook } from './../repository/bookRepository'
import {v4 as uuidv4 } from 'uuid'


export const getAllBooksController= (req:any, res:any) => {
  
    getAllBooks((error: IDBError, book: IBook) => {
        if(error){
            res.status(500).json(
                {
                    "Type": "There has been a database error!",
                    "Message": error.sqlMessage,
                    "Query": error.sql
                })     
         }
        else {
            res.status(200).json({"books": book})
        }
    })
}

export const insertBookController = (req:any, res:any) => {    
    const book = req.body;
    book.id = uuidv4();
    
    insertBook(book, (error: IDBError, savedBook: IBook) => {
        if(error){
            res.status(500).json(
                {
                    "Type": "There has been a database error!",
                    "Message": error.sqlMessage,
                    "Query": error.sql
                })
        }
        else {
            res.status(201).json({
              "status":201,
              "result":savedBook
            })
        }
    })
}
export const getByBookIdController = (req:any, res:any) => {  
   
  if(req.query) {
    const id = req.params.id;
    getByBookId(id, (error: any, book: IBook) => {
        if(error){
          res.status(error.status).json(error)
        }
        else {
            res.status(200).json({
              "status": 200,
              "result":book
            })
        }
    })
  }
  else {
    res.status(400).json({
      "status": 400, 
      "message":"There has been a problem with the query, check id"
    })  
  }
  
  
}

export const updateBookController = (req:any, res:any) => {
    const id = req.params.id;
    const book: IBook = req.body;

    const sql = `UPDATE books SET title=?, authorFirstName=?, authorLastName=?, isbn=?, pagesNr=? WHERE id=?`;
    connection.query(sql, [book.title, book.authorFirstName, book.authorLastName, book.isbn, book.pagesNr, id], (error, rows) => {
        if(error){
          res.status(500).json(
            {
              "Type": "There has been a database error!",
              "Code": error.code,
              "Message": error.sqlMessage,
              "Query": error.sql          
          })
        }
        else {
          res.status(201).json({
            "status":201,
            "result":book
          })
        }
    })
}

export const deleteBookController = (req:any, res:any) => {

  const id = req.params.id;    
  
    getByBookId(id, (error: any, book: IBook) => {
      if(error){
        res.status(error.status).json(
          {
            "Type": "There has been a network error!",
            "Status": error.status,
            "Message": error.message
          })
      }
      else {
        deleteBook(id, (error: any, id: string) => {
          if(error){
            res.status(error.status).json(
              {
                "Type": "There has been a network error!",
                "Status": error.status,
                "Message": error.message.sqlMessage ? error.message.sqlMessage : error.message 
              })
          }
          else {
            res.status(204).json({
              'status': 204,
              'result': book
            })
          }        
        })
      }
    })
}