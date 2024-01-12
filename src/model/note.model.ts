import { getModelForClass, prop } from "@typegoose/typegoose";

export class Note {
  @prop({ required: true, unique: true })
  title: string

  @prop()
  noteBody: string
}

const NoteModel = getModelForClass(Note, {
  schemaOptions: {
    timestamps: true
  }
})

export default NoteModel