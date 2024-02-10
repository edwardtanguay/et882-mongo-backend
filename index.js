import express from 'express'
import mongoose from 'mongoose'
import { todosRouter } from './backend/routers/todosRouter.js'
const port = 3075
const app = express()

app.use('/todos', todosRouter)

const dbUrl =
    'mongodb+srv://Selman:Whqyo6GtZefllLTG@cluster0.nalr6l0.mongodb.net/?retryWrites=true&w=majority'

const connectToDb = async () => {
    try {
        await mongoose.connect(dbUrl)
    } catch (e) {
        console.error(e)
    }
}

connectToDb().then(
    app.listen(
        port,
        console.log(`server is running on following port: ${port} `)
    )
)
