import express from 'express'
import { taskController } from '../controllers/taskController.js'

const router = express.Router()

// llega '/api/tasks

router.get('', taskController.list)
router.get('/:id',taskController.detail)
router.post('',taskController.create)
router.put('/:id',taskController.update)
router.delete('/:id',taskController.destroy)


export default router