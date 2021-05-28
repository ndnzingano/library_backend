import express from 'express'
const routes = express.Router();
import {getAllBooksController, insertBookController, getByBookIdController, deleteBookController,updateBookController  } from './../controller/bookController'

routes.get('/', getAllBooksController)
routes.post('/', insertBookController)
routes.get('/:id', getByBookIdController)
routes.put('/:id', updateBookController)
routes.delete('/:id', deleteBookController)

export default routes