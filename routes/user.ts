import express from 'express'
const routes = express.Router();
import { 
  getAllUsersController, 
  getUserByIdController, 
  insertUserController, 
  updateUserController, 
  deleteUserController,
  getUserByQueryController
} from './../controller/userController'

routes.get('/', getAllUsersController)
routes.post('/', insertUserController )
routes.get('/search', getUserByQueryController)
routes.get('/:id', getUserByIdController)
routes.put('/:id', updateUserController)
routes.delete('/:id', deleteUserController)


export default routes