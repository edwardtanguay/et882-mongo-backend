import express from 'express'
import {
    addSingleTodo,
    getSingleTodo,
    getAllTodos,
    updateSingleTodo,
    deleteSingleTodo,
    deleteAllTodos,
} from '../controllers/todosController.js'

export const todosRouter = express.Router()

todosRouter
    .route('/')
    .post(addSingleTodo)
    .get(getAllTodos)
    .delete(deleteAllTodos)
todosRouter
    .route('/:id')
    .get(getSingleTodo)
    .patch(updateSingleTodo)
    .delete(deleteSingleTodo)
