import { handleError } from '../backend/utils/handleError'

// * addSingleTodo, getSingleTodo, getAllTodos, updateSingleTodo, deleteSingleBook

export const addSingleTodo = async (req, res) => {
    try {
        res.status(201).json(req.body)
    } catch (e) {
        handleError(e, res)
    }
}
