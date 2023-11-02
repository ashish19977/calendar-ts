import { AppContext } from './Context';
import { TTodoProps } from './types';
import { Icon } from './Icon';
import { FC, useContext } from 'react';

export const Todo: FC<TTodoProps> = (props) => {
  const { todo, selectTodo } = props;
  const { updateTodo, deleteTodo } = useContext(AppContext);
  const { isCompleted } = todo;

  return (
    <div className="todo-container">
      <div className="todo-text-icon-container">
        {isCompleted && <Icon name="check-bedge" className="icon completed-icon" />}
        <p onClick={() => selectTodo(todo)}>{todo.title}</p>
      </div>
      <div className="todo-options-container">
        <Icon
          name={isCompleted ? 'x-mark' : 'check'}
          onClick={() => updateTodo({ ...todo, isCompleted: !isCompleted })}
        />
        <Icon name="pencil" onClick={() => selectTodo(todo)} />
        <Icon name="trash" onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};
