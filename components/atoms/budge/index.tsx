import { cn } from '@/utils/cn';
import { z } from 'zod';

const BudgeSchema = z
  .object({
    variant: z.enum(['high', 'medium']),
    children: z.any(),
    width: z.string(),
    height: z.string(),
  })
  .partial({
    variant: true,
    width: true,
    height: true,
  });

type SchemaProps = z.infer<typeof BudgeSchema>;

export const Budge = ({
  children,
  width = 'auto',
  height = '23px',
  variant = 'medium',
}: SchemaProps) => {
  const variants = {
    high: 'text-red-40 bg-red-30',
    medium: 'text-red-20 bg-red-10',
  }[variant];

  return (
    <div
      className={cn('p-1 text-[11.69px] rounded-md flex items-center font-semibold justify-center', variants)}
      style={{
        height,
        width,
      }}>
      {children}
    </div>
  );
};