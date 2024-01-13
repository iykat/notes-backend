import express from 'express'
import { createNoteHandler, deleteNoteHandler, getAllNotesHandler, getNoteHandler, updateNoteHandler } from '../controller/note.controller'
import validateResource from '../middleware/validateResource'
import { createNoteSchema, deleteNoteSchema, getNoteSchema, updateNoteSchema } from '../schema/note.schema'

const router = express.Router()

router.post('/api/notes', validateResource(createNoteSchema), createNoteHandler)
router.get('/api/notes', getAllNotesHandler)
router.get('/api/notes/:id', validateResource(getNoteSchema), getNoteHandler)
router.delete('/api/notes/:id', validateResource(deleteNoteSchema), deleteNoteHandler)
router.patch('/api/notes/:id', validateResource(updateNoteSchema), updateNoteHandler)

export default router 