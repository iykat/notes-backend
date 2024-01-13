import { Request, Response } from "express";
import { CreateNoteInput, DeleteNoteInput, GetNoteInput } from "../schema/note.schema";
import { createNote, deleteNote, getAllNotes, getNote } from "../service/note.service";
import log from "../utils/logger";


export async function createNoteHandler(req: Request<{}, {}, CreateNoteInput>, res: Response) {
  const reqBody = req.body

  try {
    const note = await createNote(reqBody)
    return res.status(200).json({
      status: 'success',
      note
    })
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(400).json({
        status: 'failed',
        message: 'A note with this title already exist'
      })
    }
  }
}

export async function getAllNotesHandler(req: Request, res: Response) {
  try {
    const notes = await getAllNotes()
    return res.status(200).json({
      status: 'success',
      notes
    })
  } catch (error) {
    log.error(error)
    res.status(500).json({
      status: 'failed',
    })
  }
}

export async function getNoteHandler(req: Request<GetNoteInput>, res: Response) {
  const { id } = req.params
  try {
    const note = await getNote(id)
    return res.status(200).json({
      status: 'success',
      note
    })

  } catch (error) {
    res.status(500).json({
      status: 'failed'
    })
  }
}

export async function deleteNoteHandler(req: Request<DeleteNoteInput>, res: Response) {
  const {id} = req.params

  try {
    await deleteNote(id)
    return res.status(200).json({
      status: 'success',
      message: 'Note successfully deleted'
    })
  } catch (error) {
    log.error(error)
    res.status(500).json({
      status: 'failed'
    })
  }
}