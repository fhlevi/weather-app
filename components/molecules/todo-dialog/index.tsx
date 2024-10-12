import { Button } from '@/components/atoms/button';
import { Close, Dialog, Title } from '@/components/atoms/dialog';
import { Flex } from '@/components/atoms/flex';
import { Label } from '@/components/atoms/label';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { DialogWithData } from '@/types/dialog';
import { useEffect } from 'react';

const TodoDialogSchema = z.object({
  dialog: DialogWithData,
  onTodoSubmit: z.function().args(z.any()),
});

type SchemaProps = z.infer<typeof TodoDialogSchema>;

export const TodoDialog = ({ dialog, onTodoSubmit }: SchemaProps) => {
  const { props, data = {} } = dialog;

  const { register, handleSubmit, watch, reset } = useForm({
    values: {
      ...data,
    },
  });

  const todoValue = watch('todo');
  
  const isDisabled = !todoValue;
  const isEdit = !!data?.id;

  useEffect(() => reset(), [props.isOpen])

  return (
    <Dialog
      className="w-[421px] rounded-lg p-4"
      open={props.isOpen}
      onOpenChange={props.onRequestClose}>
      <header className="flex justify-between items-center mb-4">
        <Title className="font-bold">
          {isEdit ? 'Edit Todo' : 'Tambah Todo'}
        </Title>
        <Close onClick={props.onRequestClose} />
      </header>

      <form onSubmit={handleSubmit(onTodoSubmit)}>
        <Flex direction="col" className="gap-2">
          <Label color="midnight" className="font-semibold">
            Todo
          </Label>
          <input
            className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-midnight shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-midnight hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            {...register('todo')}
          />
        </Flex>

        <Flex className="mt-8 justify-end">
          <Button
            className="p-2 text-sm rounded-md text-white"
            disabled={isDisabled}>
            Simpan
          </Button>
        </Flex>
      </form>
    </Dialog>
  );
};