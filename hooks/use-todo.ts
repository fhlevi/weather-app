import { FieldValueScheman, TodoItemSchema } from '@/types/todo';
import { prettyDate } from '@/utils/helper';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

const saveToLocalStorage = (payload: Array<TodoItemSchema>) => {
  localStorage.setItem('todo-list', JSON.stringify(payload));
};

export const useTodo = () => {
  const [todoList, setTodoList] = useState<any[]>([]);

  const createTodo = (
    formVal: FieldValueScheman,
    callback: (date: string) => void,
  ) => {
    const arrPayload: Array<TodoItemSchema> = [...todoList];

    const payload = {
      todo: formVal.todo,
      id: v4(),
      date: prettyDate(new Date()),
    };

    arrPayload.push(payload);

    saveToLocalStorage(arrPayload);
    setTodoList(arrPayload);
    callback(payload.date);
  };

  const updateTodo = (
    formVal: FieldValueScheman,
    callback: (date: string) => void,
  ) => {
    const storedTodoList = localStorage.getItem('todo-list');
    const arrPayload = storedTodoList ? JSON.parse(storedTodoList) : [];

    const index = arrPayload.findIndex(
      (item: TodoItemSchema) => item.id === formVal.id,
    );

    if (index !== -1) {
      arrPayload[index].todo = formVal.todo;

      saveToLocalStorage(arrPayload);
      setTodoList(arrPayload);
      callback(arrPayload[index].date);
    }
  };

  const deleteTodo = (id: string, callback: (date: string) => void) => {
    setTodoList((prev: Array<TodoItemSchema>) => {
      const arrPayload = [...prev];
      const index = arrPayload.findIndex((item) => item.id === id);

      if (index !== -1) {
        const date = arrPayload[index].date
        
        arrPayload.splice(index, 1);

        saveToLocalStorage(arrPayload);
        callback(date)
      }

      return arrPayload;
    });
  };

  useEffect(() => {
    const todos = localStorage.getItem('todo-list');

    setTodoList(todos ? JSON.parse(todos) : []);
  }, []);

  return {
    createTodo,
    updateTodo,
    todoList,
    deleteTodo,
  };
};