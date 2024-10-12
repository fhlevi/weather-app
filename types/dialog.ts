import { z } from 'zod';

const DialogOrigin = z.object({
    open: z.function(),
    close: z.function(),
    props: z.object({
        isOpen: z.boolean(),
        onRequestClose: z.function(),
    }),
});

export const DialogWithData = z.object({
    open: z.function().args(z.any()).returns(z.void()),
    close: z.function().args(z.any()).returns(z.void()),
    props: z.object({
        isOpen: z.boolean(),
        onRequestClose: z.function().args(z.any()).returns(z.void()),
    }),
    data: z.any()
});

export type OriginDialogSchema = z.infer<typeof DialogOrigin>;
export type WithDataDialogSchema = z.infer<typeof DialogWithData>;