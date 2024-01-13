import express from 'express'
import { createNoteHandler, deleteNoteHandler, getAllNotesHandler, getNoteHandler } from '../controller/note.controller'
import validateResource from '../middleware/validateResource'
import { createNoteSchema, deleteNoteSchema, getNoteSchema } from '../schema/note.schema'

const router = express.Router()

router.post('/api/notes', validateResource(createNoteSchema), createNoteHandler)
router.get('/api/notes', getAllNotesHandler)
router.get('/api/notes/:id', validateResource(getNoteSchema), getNoteHandler)
router.delete('/api/notes/:id', validateResource(deleteNoteSchema), deleteNoteHandler)

export default router 