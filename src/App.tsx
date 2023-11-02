import { useContext } from 'react';
import { AppContext } from './Context';
import './index.css';
import { CalendarContainer } from './CalendarContainer';
import { TodosContainer } from './TodosContainer';

export default function App() {
	const { theme } = useContext(AppContext);

	return (
		<div className={`main-container ${theme}`}>
			<CalendarContainer />
			<TodosContainer />
		</div>
	);
}
