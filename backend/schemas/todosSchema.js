import mongoose from 'mongoose'

export const todoSchema = new mongoose.Schema(
    {
        todo: String,
    },
    {
        collection: 'todos',
        timestamps: true,
        versionKey: false,
    }
)

export const Todo = mongoose.model('Todo', todoSchema)
