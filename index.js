import express from 'express'
const port = 3075
const app = express()

app.listen(port, console.log(`server is running on following port: ${port} `))