import { TTodo, TTodoListProps } from './types';
import { AddEditTodo } from './AddEditTodo';
import { Todo } from './Todo';
import { FC, useState } from 'react';
import { getSelectedDayStr } from './utils';

export const TodoList: FC<TTodoListProps> = ({ todos, day }: TTodoListProps) => {
  const [selectedTodo, setSelectedTodo] = useState<TTodo | null>(null);

  return (
    <>
      <div className="todos-top-container">
        <p>Todos for - {getSelectedDayStr(day)}</p>
        <AddEditTodo setSelectedTodo={setSelectedTodo} todo={selectedTodo} />
      </div>
      <div className="todos-list-container">
        {todos.length ? (
          todos.map((todo, ind) => <Todo selectTodo={setSelectedTodo} todo={todo} key={ind} />)
        ) : (
          <p>No todos added.</p>
        )}
      </div>
    </>
  );
};
