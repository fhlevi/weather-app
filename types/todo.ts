import { z } from 'zod';

export const ItemSchema = z.object({
    id: z.string(),
    todo: z.string(),
    date: z.string(),
});

const FieldValue = z.record(z.string());

export type FieldValueScheman = z.infer<typeof FieldValue>
export type TodoItemSchema = z.infer<typeof ItemSchema>;