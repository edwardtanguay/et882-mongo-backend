import { handleError, handleResponse } from '../utils/handleFunctions.js'
import { Todo } from '../schemas/todosSchema.js'

export const addSingleTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body)
        res.status(201).json(todo)
    } catch (e) {
        handleError(e, res)
    }
}

export const getSingleTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        handleResponse(req, res, todo)
    } catch (e) {
        handleError(e, res)
    }
}

export const getAllTodos = async (req, res) => {
    try {
        const todo = await Todo.find()
        handleResponse(req, res, todo)
    } catch (e) {
        handleError(res, e)
    }
}

export const updateSingleTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        handleResponse(req, res, todo)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteSingleTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        handleResponse(req, res, todo)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteAllTodos = async (req, res) => {
    try {
        const todo = await Todo.deleteMany()
        res.status(200).json(todo)
    } catch (e) {
        handleError(res, e)
    }
}
