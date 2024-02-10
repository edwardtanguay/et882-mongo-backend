import express from 'express'
import { addSingleTodo } from '../controllers/todosController.js'

export const todosRouter = express.Router()

todosRouter.route('/').post(addSingleTodo)
