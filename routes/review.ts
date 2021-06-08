import express from 'express'
const routes = express.Router();
import {
  getAllReviewsController, 
  getReviewByIdController, 
  deleteReviewController, 
  updateReviewController, 
  insertReviewController, 
  getReviewByBookIdController,
  getReviewByUserIdController
} from './../controller/reviewController'


/**
 * @swagger
 * /api/reviews:
 *   post:
 *    tags:
 *    - "reviews"
 *    summary: "Post new review"
 *    description: ""
 *    operationId: "postReview"
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
 *      description: "New Review"
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          "id":
 *            type: string
 *          "book":
 *            type: string
 *          "user":
 *            type: string
 *          "startDate":
 *            type: string
 *          "finishDate":
 *            type: string
 *          "rating":
 *             type: integer
 *          "review":
 *            type: string
 *      
 *    responses:
 *      "201":
 *        description: "Review created"
 */
routes.post('/', insertReviewController);

/**
 * @swagger
 * /api/reviews:
 *   get:
 *    tags:
 *    - "reviews"
 *    summary: "Get all reviews"
 *    description: ""
 *    operationId: "getReviews"
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
 *        description: "Reviews requested"
 */
routes.get('/', getAllReviewsController);

/**
 * @swagger
 * /api/reviews/book/:
 *   get:
 *    tags:
 *    - "reviews"
 *    summary: "Get review by book id"
 *    description: ""
 *    operationId: "getReviewByBookId"
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
 *      name: "book"
 *      description: "book"
 *      required: true
 *      schema:
 *        type: string
 *    responses:
 *      "201":
 *        description: "Review found"
 */
routes.get('/book', getReviewByBookIdController);

/**
 * @swagger
 * /api/reviews/user/:
 *   get:
 *    tags:
 *    - "reviews"
 *    summary: "Get review by user id"
 *    description: ""
 *    operationId: "getReviewByUserId"
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
 *      name: "user"
 *      description: ""
 *      required: true
 *      schema:
 *        type: string
 *    responses:
 *      "201":
 *        description: "Review found"
 */
routes.get('/user', getReviewByUserIdController);

/**
 * @swagger
 * /api/reviews/{id}:
 *   get:
 *    tags:
 *    - "reviews"
 *    summary: "Get review by Id"
 *    description: ""
 *    operationId: "getReviewById"
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
 *        description: "Review found"
 */
routes.get('/:id', getReviewByIdController);

/**
 * @swagger
 * /api/reviews/{id}:
 *   put:
 *    tags:
 *    - "reviews"
 *    summary: "Update review"
 *    description: ""
 *    operationId: "putReview"
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
 *      description: "Review body"
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          "id":
 *            type: string
 *          "book":
 *            type: string
 *          "user":
 *            type: string
 *          "startDate":
 *            type: string
 *          "finishDate":
 *            type: string
 *          "rating":
 *             type: integer
 *          "review":
 *            type: string
 *      
 *    responses:
 *      "200":
 *        description: "Request Ok"
 * */
routes.put('/:id', updateReviewController);

/**
 * @swagger
 * /api/reviews/{id}:
 *   delete:
 *    tags:
 *    - "reviews"
 *    summary: "Delete review"
 *    description: ""
 *    operationId: "deleteReview"
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
routes.delete('/:id', deleteReviewController);

export default routes