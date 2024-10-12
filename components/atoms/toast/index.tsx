import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import * as Primitive from '@radix-ui/react-toast';
import { z } from 'zod';

const ToastSchema = z.object({
  open: z.boolean(),
  children: z.any(),
  onOpenChange: z.function().args(z.boolean()),
}).partial({
  onOpenChange: true
});

type SchemaProps = z.infer<typeof ToastSchema>;

export const { Title, Description } = Primitive;

export const Close = forwardRef<
  ElementRef<typeof Primitive.Action>,
  ComponentPropsWithoutRef<typeof Primitive.Action>
>(({ ...props }, ref) => (
  <Primitive.Action
    ref={ref}
    {...props}>
    <button className="inline-flex h-[25px] items-center justify-center rounded bg-primary-20 px-2.5 text-xs font-medium leading-[25px] text-primary-10">
      Tutup
    </button>
  </Primitive.Action>
));

Close.displayName = 'Close';

export const Toast = ({ open, onOpenChange, children }: SchemaProps) => {
  return (
    <Primitive.Provider swipeDirection="right">
      <Primitive.Root
        className="grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-card p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={open}
        duration={2000}
        onOpenChange={onOpenChange}>
        {children}
      </Primitive.Root>
      <Primitive.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Primitive.Provider>
  );
};