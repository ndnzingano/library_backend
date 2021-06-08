import express from 'express'
const authRoutes = express.Router();
import { validateUser } from './../controller/userController' 



/**
 * @swagger
 * /api/auth:
 *   post:
 *    tags:
 *    - "auth"
 *    summary: "Request token"
 *    description: ""
 *    operationId: "postToken"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "New token"
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          "email":
 *            type: string
 *          "password":
 *            type: string
 *    responses:
 *      "403":
 *        description: "Invalid token"
 *      "201":
 *        description: "Token created"
 */
authRoutes.post('/', validateUser)

export default authRoutes