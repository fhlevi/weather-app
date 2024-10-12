import { z } from 'zod';
import { Flex } from '@/components/atoms/flex';
import { Label } from '@/components/atoms/label';

const TodoContentSchema = z.object({
  text: z.string(),
  date: z.string(),
});

type SchemaProps = z.infer<typeof TodoContentSchema>;

export const TodoContent = ({ text, date }: SchemaProps) => {
  return (
    <Flex direction="col" className="w-full">
      <Label size="18px" color="primary" className="mb-1">
        {text}
      </Label>
      <Label size="11px">{date}</Label>
    </Flex>
  );
};