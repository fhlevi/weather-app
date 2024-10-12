import { Flex } from '@/components/atoms/flex';
import { TodoAction } from '@/components/molecules/todo-action';
import { TodoCard } from '@/components/molecules/todo-card';
import { TodoContent } from '@/components/molecules/todo-content';
import { ItemSchema, TodoItemSchema } from '@/types/todo';
import { z } from 'zod';

const TodoListSchema = z.object({
  onDelete: z.function()
    .args(z.string()),
  onUpdate: z.function()
    .args(ItemSchema),
  items: z.array(
    z.object({
      id: z.string(),
      todo: z.string(),
      date: z.string(),
    }),
  ),
});

type SchemaProps = z.infer<typeof TodoListSchema>;

export const TodoList = ({ items, onDelete, onUpdate }: SchemaProps) => {
  return (
    <Flex direction="col" className="gap-4 h-full">
      {items?.map((item: TodoItemSchema) => (
        <TodoCard key={item.id}>
          <TodoContent text={item.todo} date={item.date} />
          <TodoAction
            onUpdate={() => onUpdate(item)}
            onDelete={() => onDelete(item.id)} 
        />
        </TodoCard>
      ))}
    </Flex>
  );
};