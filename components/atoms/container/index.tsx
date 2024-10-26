import { z } from 'zod';

const ContainerSchema = z.object({
  children: z.any(),
  style: z.object({})
});

type SchemaProps = z.infer<typeof ContainerSchema>;

export const Container = ({ children, style }: SchemaProps) => {
  return (
    <div className="w-full whole-container" style={style}>
      <div className="h-full w-full">{children}</div>
    </div>
  );
};