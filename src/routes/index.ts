import express from 'express'
import noteRoute from './note.route'
const router = express.Router()

router.use(noteRoute)

export default router