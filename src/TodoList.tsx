import * as React from 'react';
import { Tday, TTodo } from './types';
import { AddEditTodo } from './AddEditTodo';
import { Todo } from './Todo';

export const TodoList = ({ todos, day }: { todos: TTodo[]; day: Tday }) => {
  const [selectedTodo, setSelectedTodo] = React.useState<TTodo | null>(null);

  return (
    <React.Fragment>
      <div className="todos-top-container">
        <p>
          Todos for - {day.date}/{day.month + 1}/{day.year}
        </p>
        <AddEditTodo setSelectedTodo={setSelectedTodo} todo={selectedTodo} />
      </div>
      <div className="todos-list-container">
        {todos.length ? (
          todos.map((todo, ind) => <Todo selectTodo={setSelectedTodo} todo={todo} key={ind} />)
        ) : (
          <p>No todos added.</p>
        )}
      </div>
    </React.Fragment>
  );
};
