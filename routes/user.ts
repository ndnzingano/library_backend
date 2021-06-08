import express from 'express'
const routes = express.Router();
import { 
  getAllUsersController, 
  getUserByIdController, 
  insertUserController, 
  updateUserController, 
  deleteUserController,
  getUserByEmailController
} from './../controller/userController'


/**
 * @swagger
 * /api/users:
 *   post:
 *    tags:
 *    - "user"
 *    summary: "Post new user"
 *    description: ""
 *    operationId: "postUser"
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
 *      description: "New User"
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          "id":
 *            type: string
 *          "firstName":
 *            type: string
 *          "lastName":
 *            type: string
 *          "email":
 *            type: string
 *          "password":
 *            type: string
 *          "birthday":
 *             type: string
 *      
 *    responses:
 *      "201":
 *        description: "User created"
 */
 routes.post('/', insertUserController )

/**
 * @swagger
 * /api/users:
 *   get:
 *    tags:
 *    - "user"
 *    summary: "Get all users"
 *    description: ""
 *    operationId: "getUsers"
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
 *        description: "Users requested"
 */

routes.get('/', getAllUsersController)


/**
 * @swagger
 * /api/users/search/:
 *   get:
 *    tags:
 *    - "user"
 *    summary: "Get User by email"
 *    description: ""
 *    operationId: "getUserByEmail"
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
 *    - in: "query"
 *      name: "email"
 *      description: "email"
 *      required: true
 *      schema:
 *        type: string
 *    responses:
 *      "201":
 *        description: "User found"
 */

routes.get('/search', getUserByEmailController)
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *    tags:
 *    - "user"
 *    summary: "Get User by Id"
 *    description: ""
 *    operationId: "getUserById"
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
 *        description: "User found"
 */

routes.get('/:id', getUserByIdController)
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *    tags:
 *    - "user"
 *    summary: "Update user"
 *    description: ""
 *    operationId: "putUser"
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
 *      description: "User body"
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          "id":
 *            type: string
 *          "firstName":
 *            type: string
 *          "lastName":
 *            type: string
 *          "email":
 *            type: string
 *          "password":
 *            type: string
 *          "birthday":
 *             type: string
 *      
 *    responses:
 *      "200":
 *        description: "Request Ok"
 * */
routes.put('/:id', updateUserController)
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *    tags:
 *    - "user"
 *    summary: "Delete user"
 *    description: ""
 *    operationId: "deleteUser"
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
routes.delete('/:id', deleteUserController)


export default routes