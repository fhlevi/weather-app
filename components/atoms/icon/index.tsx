import { cn } from '@/utils/cn';
import { z } from 'zod';

const IconSchema = z
  .object({
    variant: z.enum(['default', 'primary', 'black']),
    icon: z.string(),
  })
  .partial({
    variant: true,
  });

type SchemaProps = z.infer<typeof IconSchema>;

export const Icon = ({ variant = 'default', icon, ...props }: SchemaProps) => {
  const variants = {
    default: 'text-white',
    primary: 'text-primary-10',
    black: 'text-black'
  }[variant];

  return <em className={cn(variants, icon)} {...props} />;
};