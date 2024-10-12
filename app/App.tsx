import { Button } from '@/components/atoms/button';
import { Card } from '@/components/atoms/card';
import { Container } from '@/components/atoms/container';
import { Flex } from '@/components/atoms/flex';
import { Label } from '@/components/atoms/label';
import { ScrollArea } from '@/components/atoms/scroll-area';
import { Toaster } from '@/components/molecules/toaster';
import { TodoDialog } from '@/components/molecules/todo-dialog';
import { TodoList } from '@/components/organisms/todo-list';
import { useDialogWithData } from '@/hooks/use-dialog-with-data';
import { useToasterWithData } from '@/hooks/use-toaster';
import { useTodo } from '@/hooks/use-todo';
import { FieldValues } from 'react-hook-form';

function App() {
  const { createTodo, todoList, deleteTodo, updateTodo } = useTodo();

  const addDialog = useDialogWithData();
  const updateDialog = useDialogWithData();
  const toaster = useToasterWithData();

  const onTodoSubmit = (formVal: FieldValues) => {
    createTodo(formVal, (dates: string) => {
      toaster.open({
        title: 'Todo: was submitted',
        description: dates,
      });

      addDialog.close();
    });
  };

  const onTodoUpdate = (formVal: FieldValues) => {
    updateTodo({
        ...updateDialog.data,
        todo: formVal.todo,
      }, (dates: string) => {
        toaster.open({
          title: 'Todo: was updated',
          description: dates,
        });

        updateDialog.close();
      },
    );
  };

  const onTodoDelete = (id: string) => {
    deleteTodo(id, (dates) => {
      toaster.open({
        title: 'Todo: was deleted',
        description: dates,
      });
    });
  };

  return (
    <Container>
      <Card className="rounded-2xl py-11 h-full px-6 text-white relative">
        <Flex direction="col" className="h-full gap-7">
          <Flex className="justify-between items-center">
            <Label size="28px">To Do List</Label>
            <Button
              height="40px"
              width="40px"
              className="rounded-lg items-center flex justify-center"
              onClick={addDialog.open}>
              <em className="fa-solid fa-plus text-2xl"></em>
            </Button>
          </Flex>

          <ScrollArea className="h-full overflow-y-auto">
            <TodoList
              items={todoList}
              onUpdate={updateDialog.open}
              onDelete={onTodoDelete}
            />
          </ScrollArea>
        </Flex>
      </Card>

      <TodoDialog dialog={addDialog} onTodoSubmit={onTodoSubmit} />

      <TodoDialog dialog={updateDialog} onTodoSubmit={onTodoUpdate} />

      <Toaster {...toaster} />
    </Container>
  );
}

export default App;
