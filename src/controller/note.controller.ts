import { Request, Response } from "express";
import { CreateNoteInput } from "../schema/note.schema";
import { createNote } from "../service/note.service";
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