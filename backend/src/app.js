import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

const app = express()

const PORT = 3000

app.use(express.urlencoded({extended : false}))

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

