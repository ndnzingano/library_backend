import express from 'express'
const routes = express.Router();
import { 
  getAllUsersController, 
  getByNameController, 
  getUserByIdController, 
  insertUserController, 
  updateUserController, 
  deleteUserController
} from './../controller/userController'

routes.get('/', getAllUsersController)
routes.post('/', insertUserController )
routes.get('/search', getByNameController)
routes.get('/:id', getUserByIdController)
routes.put('/:id', updateUserController)
routes.delete('/:id', deleteUserController)


export default routes