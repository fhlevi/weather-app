import { cn } from '@/utils/cn';
import { z } from 'zod';

const CardSchema = z
  .object({
    children: z.any(),
    className: z.string(),
    width: z.string(),
    height: z.string(),
    variant: z.enum(['default', 'primary']),
  })
  .partial({
    className: true,
    height: true,
    width: true,
    variant: true,
  });

type SchemaProps = z.infer<typeof CardSchema>;

export const Card = ({
  children,
  className,
  width = '100%',
  height = '100%',
  variant = 'default'
}: SchemaProps) => {
  const variants = {
    'default': 'bg-card',
    'primary': 'bg-primary-20'
  }[variant];

  return (
    <div
      className={cn(variants, className)}
      style={{
        height,
        width,
      }}>
      {children}
    </div>
  );
};