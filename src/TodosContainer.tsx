import { useContext } from 'react';
import { AppContext } from './Context';
import './index.css';
import { TodoList } from './TodoList';

export const TodosContainer = () => {
	const { todos, selectedDay } = useContext(AppContext);

	return (
		<div className='todos-container'>
			<TodoList todos={todos} day={selectedDay} />
		</div>
	);
};
