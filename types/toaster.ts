import { z } from 'zod';

const ToasterWithData = z.object({
    open: z.function().args(z.any()).returns(z.void()),
    close: z.function().args(z.any()).returns(z.void()),
    props: z.object({
        isOpen: z.boolean(),
        onRequestClose: z.function().args(z.any()).returns(z.void()),
    }),
    data: z.any()
});

export type ToasterWithDataSchema = z.infer<typeof ToasterWithData>;