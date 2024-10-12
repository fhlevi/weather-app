import { cn } from '@/utils/cn';
import { z } from 'zod';

const LabelSchema = z
  .object({
    children: z.any(),
    color: z.enum(['primary', 'default', 'midnight']),
    size: z.string(),
    className: z.string(),
  })
  .partial({
    color: true,
    size: true,
    className: true,
  });

type SchemaProps = z.infer<typeof LabelSchema>;

export const Label = ({
  children,
  color = 'default',
  size = '16px',
  className,
  ...props
}: SchemaProps) => {
  const colors = {
    primary: 'text-primary-10',
    default: 'text-white',
    midnight: 'text-midnight'
  }[color];

  return (
    <div
      className={cn(colors, className)}
      style={{
        fontSize: size,
      }}
      {...props}>
      {children}
    </div>
  );
};