import express from 'express'
import { taskController } from '../controllers/taskController'
import router from express.Router()

router.get('/api/tasks', taskController.list)
router.get('/api/tasks/:id',)