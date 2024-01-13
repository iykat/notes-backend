import { DocumentType } from "@typegoose/typegoose";
import NoteModel, { Note } from "../model/note.model";
import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";


export async function createNote(input: Partial<Note>) {
  return NoteModel.create(input)
}

export async function getAllNotes() {
  return NoteModel.find()
}

export async function getNote(id: string) {
  return NoteModel.findById(id)
}

export async function updateNote(id: string, update: UpdateQuery<Note>, options: QueryOptions) {
  return NoteModel.findByIdAndUpdate(id, update, options)
}

export async function deleteNote(id: string) {
  return NoteModel.findByIdAndDelete(id)
}