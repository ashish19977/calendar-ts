import { AddEditTodo } from './';
import { Todo } from './';
import { getSelectedDayStr } from '../utils';
import { useTodo, useCalender } from '../hooks';

const TodoList = () => {
	const { todos, selectedTodo, setSelectedTodo } = useTodo();
	const { selectedDay: day } = useCalender();

	return (
		<>
			<div className='todos-top-container'>
				<p>Todos for - {getSelectedDayStr(day)}</p>
				<AddEditTodo todo={selectedTodo} setSelectedTodo={setSelectedTodo} />
			</div>
			<div className='todos-list-container'>
				{todos.length ? (
					todos.map((todo, ind) => <Todo setSelectedTodo={setSelectedTodo} todo={todo} key={ind} />)
				) : (
					<p>No todos added.</p>
				)}
			</div>
		</>
	);
};

export default TodoList;
