import { object, string, TypeOf } from 'zod'

export const createNoteSchema = object({
  body: object({
    title: string({
      required_error: 'Title is required. Kindly provided a title'
    }),
    noteBody: string().optional()
  })
})

export const getNoteSchema = object({
  params: object({
    id: string()
  })
})


export const deleteNoteSchema = object({
  params: object({
    id: string()
  })
})


export type DeleteNoteInput = TypeOf<typeof deleteNoteSchema>['params']
export type CreateNoteInput = TypeOf<typeof createNoteSchema>['body']
export type GetNoteInput = TypeOf<typeof getNoteSchema>['params']