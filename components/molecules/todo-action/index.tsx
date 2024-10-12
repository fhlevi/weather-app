import { z } from 'zod';
import { Flex } from '@/components/atoms/flex';
import { Icon } from '@/components/atoms/icon';

const TodoActionSchema = z.object({
    onDelete: z.function(),
    onUpdate: z.function()
});

type SchemaProps = z.infer<typeof TodoActionSchema>;

export const TodoAction = ({ onDelete, onUpdate }: SchemaProps) => {
  return (
    <Flex direction="row" className="w-14 gap-4 items-center">
      <button type="button" onClick={onUpdate}>
        <Icon icon="fa-solid fa-pen" variant="primary" />
      </button>

      <button type="button" onClick={onDelete}>
        <Icon icon="fa-solid fa-trash" variant="primary" />
      </button>
    </Flex>
  );
};