import { useEffect, useState } from 'react';
import { useStore } from '../state';
import { TTodo } from '../types';

import { getTodos, updateTodo as _updateTodo, deleteTodo as _deleteTodo, addTodo as _addTodo } from '../utils';

const useTodo = () => {
	const { todos, selectedDay, setState } = useStore();
	const [selectedTodo, setSelectedTodo] = useState<TTodo | null>(null);

	useEffect(() => {
		setState((oldState) => ({
			...oldState,
			todos: getTodos(selectedDay.dateStr),
		}));
	}, [selectedDay]);

	const updateTodo = (todo: Partial<TTodo>) => {
		_updateTodo(selectedDay.dateStr, todo);
		setState((oldState) => {
			delete oldState.selectedTodo;
			return {
				...oldState,
				todos: getTodos(selectedDay.dateStr),
			};
		});
	};

	const deleteTodo = (id: number) => {
		_deleteTodo(selectedDay.dateStr, id);
		setState((oldState) => ({
			...oldState,
			todos: getTodos(selectedDay.dateStr),
		}));
	};

	const addTodo = (title: string) => {
		_addTodo(selectedDay.dateStr, title);
		setState((oldState) => ({
			...oldState,
			todos: getTodos(selectedDay.dateStr),
		}));
	};

	return { todos, selectedTodo, addTodo, deleteTodo, updateTodo, setSelectedTodo };
};

export default useTodo;
