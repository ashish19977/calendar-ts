import { TTodoProps } from './types';
import { Icon } from './Icon';
import { FC } from 'react';
import { useTodo } from './useTodo';

export const Todo: FC<TTodoProps> = (props) => {
  const { updateTodo, deleteTodo } = useTodo();
  const {
    todo: { isCompleted },
    todo,
    setSelectedTodo,
  } = props;

  return (
    <div className="todo-container">
      <div className="todo-text-icon-container">
        {isCompleted && <Icon name="check-bedge" className="icon completed-icon" />}
        <p onClick={() => setSelectedTodo(todo)}>{todo.title}</p>
      </div>
      <div className="todo-options-container">
        <Icon
          name={isCompleted ? 'x-mark' : 'check'}
          onClick={() => updateTodo({ ...todo, isCompleted: !isCompleted })}
        />
        <Icon name="pencil" onClick={() => setSelectedTodo(todo)} />
        <Icon name="trash" onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};
