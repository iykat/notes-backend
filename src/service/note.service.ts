import { DocumentType } from "@typegoose/typegoose";
import NoteModel, { Note } from "../model/note.model";


export async function createNote(input: Partial<Note>) {
  return NoteModel.create(input)
}

