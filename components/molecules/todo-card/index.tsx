import { Card } from '@/components/atoms/card';
import { Flex } from '@/components/atoms/flex';
import { z } from 'zod';

const TodoCardSchema = z.object({
  children: z.any(),
});

type SchemaProps = z.infer<typeof TodoCardSchema>;

export const TodoCard = ({ children }: SchemaProps) => {
  return (
    <Card height="94px" variant="primary" className="rounded-lg p-4">
      <Flex direction="row" className="gap-4 justify-between h-full">
        {children}
      </Flex>
    </Card>
  );
};