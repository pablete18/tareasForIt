import express from 'express'
import cors from 'cors'
import router from './routes/taskRoutes.js'

const app = express()

const PORT = 3000

app.use(cors())
app.use(express.json());

app.use(express.urlencoded({extended : false}))

app.use('/api/tasks', router)

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

