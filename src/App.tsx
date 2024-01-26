import { useStore } from './store';
import './index.css';
import { CalendarContainer } from './CalendarContainer';
import { TodosContainer } from './TodosContainer';

export default function App() {
  const { theme } = useStore();

  return (
    <div className={`main-container ${theme}`}>
      <CalendarContainer />
      <TodosContainer />
    </div>
  );
}
