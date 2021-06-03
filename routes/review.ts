import express from 'express'
const routes = express.Router();
import {
  getAllReviewsController, 
  getReviewByIdController, 
  deleteReviewController, 
  updateReviewController, 
  insertReviewController, 
  getReviewByQueryController
} from './../controller/reviewController'

routes.get('/', getAllReviewsController);
routes.get('/search', getReviewByQueryController);
routes.get('/:id', getReviewByIdController);
routes.post('/', insertReviewController);
routes.put('/:id', updateReviewController);
routes.delete('/:id', deleteReviewController);

export default routes