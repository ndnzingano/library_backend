import express from 'express'
const routes = express.Router();
import { getAllUsersController, getByNameController} from './../controller/userController'

routes.get('/', getAllUsersController)
// routes.post('/', usuarioController.inserir)
routes.get('/busca', getByNameController)
// routes.get('/:id', usuarioController.buscarPorId)
// routes.put('/:id', usuarioController.atualizar)
// routes.delete('/:id', usuarioController.deletar)


export default routes