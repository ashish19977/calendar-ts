import { useStore } from './state';
import './index.css';
import { CalendarContainer, TodosContainer } from './containers';

export default function App() {
	const { theme } = useStore();

	return (
		<div className={`main-container ${theme}`}>
			<CalendarContainer />
			<TodosContainer />
		</div>
	);
}
