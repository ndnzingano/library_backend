import express from 'express'
const routes = express.Router();
import {getAllBooksController, insertBookController, getByBookIdController, deleteBookController,updateBookController  } from './../controller/bookController'



/**
 * @swagger
 * /api/books:
 *   post:
 *    tags:
 *    - "books"
 *    summary: "Post new book"
 *    description: ""
 *    operationId: "postBook"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "header"
 *      name: "x-auth-token"
 *      description: ""
 *      required: true
 *      schema: 
 *        type: string
 *    - in: "body"
 *      name: "body"
 *      description: "New Book"
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          "id":
 *            type: string
 *          "title":
 *            type: string
 *          "authorFirstName":
 *            type: string
 *          "authorLastName":
 *            type: string
 *          "isbn":
 *            type: integer
 *          "pagesNr":
 *             type: integer
 *      
 *    responses:
 *      "201":
 *        description: "Book created"
 */
routes.post('/', insertBookController)

/**
 * @swagger
 * /api/books:
 *   get:
 *    tags:
 *    - "books"
 *    summary: "Get all books"
 *    description: ""
 *    operationId: "getBooks"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "header"
 *      name: "x-auth-token"
 *      description: ""
 *      required: true
 *      schema: 
 *        type: string
 *    responses:
 *      "200":
 *        description: "Books requested"
 */
routes.get('/', getAllBooksController)

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *    tags:
 *    - "books"
 *    summary: "Get book by Id"
 *    description: ""
 *    operationId: "getBookById"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "header"
 *      name: "x-auth-token"
 *      description: ""
 *      required: true
 *      schema: 
 *        type: string
 *    - in: "path"
 *      name: "id"
 *      description: ""
 *      required: true
 *      schema:
 *        type: string
 *        format: uuid
 *    responses:
 *      "201":
 *        description: "Book found"
 *      "404":
 *        description: "Book not found"
 */
routes.get('/:id', getByBookIdController)

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *    tags:
 *    - "books"
 *    summary: "Update book"
 *    description: ""
 *    operationId: "putBook"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "header"
 *      name: "x-auth-token"
 *      description: ""
 *      required: true
 *      schema: 
 *        type: string
 *    - in: "path"
 *      name: "id"
 *      description: ""
 *      required: true
 *      schema:
 *        type: string
 *        format: uuid
 *    - in: "body"
 *      name: "body"
 *      description: "Book body"
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          "id":
 *            type: string
 *          "title":
 *            type: string
 *          "authorFirstName":
 *            type: string
 *          "authorLastName":
 *            type: string
 *          "isbn":
 *            type: integer
 *          "pagesNr":
 *             type: integer
 *      
 *    responses:
 *      "201":
 *        description: "Request Ok"
 * */
routes.put('/:id', updateBookController)

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *    tags:
 *    - "books"
 *    summary: "Delete book"
 *    description: ""
 *    operationId: "deleteBook"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "header"
 *      name: "x-auth-token"
 *      description: ""
 *      required: true
 *      schema: 
 *        type: string
 *    - in: "path"
 *      name: "id"
 *      description: ""
 *      required: true
 *      schema:
 *        type: string
 *        format: uuid
 *  
 *    responses:
 *      "204":
 *        description: "Request Ok"
 * */
routes.delete('/:id', deleteBookController)

export default routes