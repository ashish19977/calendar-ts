import { ChangeEvent, FC, FormEvent, useContext, useEffect, useState } from 'react';
import { AppContext } from './Context';
import { TAddEditTodoProps, TTodo } from './types';
import { Icon } from './Icon';

export const AddEditTodo: FC<TAddEditTodoProps> = (props) => {
  const { todo, setSelectedTodo } = props;

  useEffect(() => {
    setNewTodo(todo);
  }, [todo]);

  const [newTodo, setNewTodo] = useState<TTodo | null>(null);
  const { addTodo, updateTodo } = useContext(AppContext);

  const handleAddEditTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const changedTodo = {
      ...newTodo,
      [target.name]: target.value,
    };
    if (changedTodo.title) {
      setNewTodo(changedTodo as TTodo);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newTodo) todo ? updateTodo(newTodo) : addTodo(newTodo);
    setSelectedTodo(null);
    setNewTodo(null);
  };

  return (
    <form onSubmit={handleSubmit} className="add-edit-todo-container">
      <input value={newTodo?.title || ''} name="title" onChange={handleAddEditTodo} placeholder="Add todo" />
      {todo ? (
        <>
          <Icon isButton={true} onClick={() => setSelectedTodo(null)} name="x-mark" className="icon btn-bg-none" />
          <Icon isButton={true} className="icon btn-bg-none" extra={{ type: 'submit' }} name="check" />
        </>
      ) : (
        <Icon isButton={true} className="icon btn-bg-none" extra={{ type: 'submit' }} name="plus" />
      )}
    </form>
  );
};
