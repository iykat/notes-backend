import { object, string, TypeOf } from 'zod'

export const createNoteSchema = object({
  body: object({
    title: string({
      required_error: 'Title is required. Kindly provided a title'
    }),
    noteBody: string().optional()
  })
})


export type CreateNoteInput = TypeOf<typeof createNoteSchema>['body']