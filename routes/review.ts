import express from 'express'
const routes = express.Router();
import {
  getAllReviewsController, 
  getReviewByBookIdController, 
  getReviewByIdController, 
  getReviewByUserIdController, 
  deleteReviewController, 
  updateReviewController, 
  insertReviewController 
} from './../controller/reviewController'

routes.get('/', getAllReviewsController)
routes.get('/', getReviewByBookIdController)
routes.get('/:id', getReviewByIdController)
routes.get('/', getReviewByUserIdController)
routes.post('/', insertReviewController)
routes.put('/:id', updateReviewController)
routes.delete('/:id', deleteReviewController)

export default routes