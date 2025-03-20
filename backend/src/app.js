import express from 'express'
import router from './routes/taskRoutes.js'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'


const app = express()

const PORT = 3000

app.use(express.json());

app.use(express.urlencoded({extended : false}))

app.use('/api/tasks', router)

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

