import express from 'express'
import { createNoteHandler, getAllNotesHandler, getNoteHandler } from '../controller/note.controller'
import validateResource from '../middleware/validateResource'
import { createNoteSchema, getNoteSchema } from '../schema/note.schema'

const router = express.Router()

router.post('/api/notes', validateResource(createNoteSchema), createNoteHandler)
router.get('/api/notes', getAllNotesHandler)
router.get('/api/notes/:id', validateResource(getNoteSchema), getNoteHandler)

export default router 