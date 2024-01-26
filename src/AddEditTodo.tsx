/* eslint-disable max-len */
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { TAddEditTodoProps } from './types';
import { Icon } from './Icon';
import { useTodo } from './useTodo';

export const AddEditTodo: FC<TAddEditTodoProps> = ({ todo, setSelectedTodo }) => {
  const { addTodo, updateTodo } = useTodo();
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    setTitle(todo?.title || '');
  }, [todo?.title]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setTitle(target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    console.log('called1');
    e.preventDefault();
    if (title.length === 0) return;
    todo ? updateTodo({ ...todo, title }) : addTodo(title);
    setSelectedTodo(null);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-edit-todo-container">
      <input value={title} name="title" onChange={handleChange} placeholder="Add todo" />
      {todo ? (
        <>
          <Icon
            name="x-mark"
            className="icon btn-bg-none"
            isButton={true}
            onClick={() => setSelectedTodo(null)}
            extra={{ type: 'button' }}
          />
          <Icon name="check" className="icon btn-bg-none" isButton={true} extra={{ type: 'submit' }} />
        </>
      ) : (
        <Icon name="plus" className="icon btn-bg-none" isButton={true} extra={{ type: 'submit' }} />
      )}
    </form>
  );
};
