import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import * as Primitive from '@radix-ui/react-dialog';
import { z } from 'zod';
import { Icon } from '../icon';
import { cn } from '@/utils/cn';

const DialogSchema = z
  .object({
    children: z.any(),
    className: z.string(),
    open: z.boolean(),
    onOpenChange: z.function().args(z.boolean()),
  })
  .partial({
    className: true,
    open: true,
    onOpenChange: true,
  });

type SchemaProps = z.infer<typeof DialogSchema>;

export const { Title } = Primitive;

export const Close = forwardRef<
  ElementRef<typeof Primitive.Close>,
  ComponentPropsWithoutRef<typeof Primitive.Close>
>(({ ...props }, ref) => (
  <Primitive.Close
    ref={ref}
    className="inline-flex h-6 w-6 items-center justify-center"
    {...props}>
    <Icon icon="fa-solid fa-xmark" variant="black" />
  </Primitive.Close>
));

Close.displayName = 'Close';

export const Content = forwardRef<
  ElementRef<typeof Primitive.Content>,
  ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, ...props }, ref) => (
  <Primitive.Content
    ref={ref}
    className={cn(
      className,
      'data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 z-[1001] -translate-x-1/2 -translate-y-1/2',
    )}
    {...props}
  />
));

Content.displayName = 'Content';

export const Dialog = ({
  className,
  children,
  open,
  onOpenChange,
}: SchemaProps) => {
  return (
    <Primitive.Root open={open} onOpenChange={onOpenChange}>
      <Primitive.Portal>
        <Primitive.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />

        <Content>
          <div className={cn(className, 'bg-white text-midnight')}>
            {children}
          </div>
        </Content>
      </Primitive.Portal>
    </Primitive.Root>
  );
};