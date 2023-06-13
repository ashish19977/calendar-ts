import * as React from 'react';
import { AppContext } from './Context';
import { TTodo } from './types';
import { Icon } from './Icon';

export type TTodoProps = {
  todo: TTodo;
  selectTodo: React.Dispatch<React.SetStateAction<TTodo | null>>;
};

export const Todo = (props: TTodoProps) => {
  const { todo, selectTodo } = props;

  const { updateTodo, deleteTodo } = React.useContext(AppContext);

  return (
    <div className="todo-container">
      <div className="todo-text-icon-container">
        {todo.isCompleted && <Icon name="check-bedge" className="icon completed-icon" />}
        <p onClick={() => selectTodo(todo)}>{todo.title}</p>
      </div>
      <div className="todo-options-container">
        {todo.isCompleted ? (
          <Icon name="x-mark" onClick={() => updateTodo({ ...todo, isCompleted: false })} />
        ) : (
          <Icon name="check" onClick={() => updateTodo({ ...todo, isCompleted: true })} />
        )}
        <Icon name="pencil" onClick={() => selectTodo(todo)} />
        <Icon name="trash" onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};
