import * as React from 'react';
import { AppContext } from './Context';
import { TTodo } from './types';

export type TAddEditTodoProps = {
  todo: TTodo|null;
  setSelectedTodo: React.Dispatch<React.SetStateAction<TTodo|null>>;
};

export const AddEditTodo = (props: TAddEditTodoProps) => {
  const { todo, setSelectedTodo } = props;

  React.useEffect(() => {
    setNewTodo(todo);
  }, [todo]);

  const [newTodo, setNewTodo] = React.useState<TTodo|null>(null);
  const { addTodo, updateTodo } = React.useContext(AppContext);

  const handleAddEditTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    const changedTodo = {
        ...newTodo,
        [target.name]: target.value
    }
    if(changedTodo.title){
      setNewTodo(changedTodo as TTodo);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(newTodo) todo ? updateTodo(newTodo) : addTodo(newTodo);
    setSelectedTodo(null);
    setNewTodo(null);
  };

  return (
    <form onSubmit={handleSubmit} className="add-edit-todo-container">
      <input
        value={newTodo?.title || ''}
        name="title"
        onChange={handleAddEditTodo}
        placeholder="Add todo"
      />
      {
        todo && <button onClick={() => setSelectedTodo(null)}>Cancel</button>
      }
      <button type="submit">{todo ? 'Save' : 'Add'}</button>
    </form>
  );
};