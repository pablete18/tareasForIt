import express from 'express'
import router from './routes/taskRoutes.js'
import cors from 'cors'

const app = express()

const PORT = 3000 

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended : true}))

app.use('/api/tasks', router)

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

