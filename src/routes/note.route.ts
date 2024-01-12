import express from 'express'
import { createNoteHandler, getAllNotesHandler } from '../controller/note.controller'
import validateResource from '../middleware/validateResource'
import { createNoteSchema } from '../schema/note.schema'

const router = express.Router()

router.post('/api/notes', validateResource(createNoteSchema), createNoteHandler)
router.get('/api/notes', getAllNotesHandler)

export default router 