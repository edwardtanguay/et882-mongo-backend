import { handleError } from '../utils/handleError.js'
import { Todo } from '../schemas/todosSchema.js'

// * addSingleTodo, getSingleTodo, getAllTodos, updateSingleTodo, deleteSingleBook

export const addSingleTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body)
        res.status(201).json(todo)
    } catch (e) {
        handleError(e, res)
    }
}
