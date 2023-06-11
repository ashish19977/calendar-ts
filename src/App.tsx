import * as React from 'react';
import { AppContext } from './Context';
import { Day } from './Day';
import { DayAndYearSelector } from './DayAndYearSelectors';
import './index.css';
import { TodoList } from './TodoList';
import { dayNames } from './utils';

export default function App() {
  const { days, todos, selectedDay, theme } = React.useContext(AppContext);

  return (
    <div className={`main-container ${theme}`}>
      <div className="calendar-container">
        <DayAndYearSelector />
        <div className="day-names-container">
          {dayNames.map((day) => (
            <p key={day} className="day-name-container">{day[0]}</p>
          ))}
        </div>

        <div className="days-container">
          {days.map((day, ind) => (
            <Day day={day} key={ind} />
          ))}
        </div>
      </div>
      <div className="todos-container">
        <TodoList todos={todos} day={selectedDay} />
      </div>
    </div>
  );
}