import { DocumentType } from "@typegoose/typegoose";
import NoteModel, { Note } from "../model/note.model";


export async function createNote(input: Partial<Note>) {
  return NoteModel.create(input)
}

export async function getAllNotes() {
  return NoteModel.find()
}

export async function getNote(id: string) {
  return NoteModel.findById(id)
}

export async function deleteNote(id: string){
  return NoteModel.findByIdAndDelete(id)
}