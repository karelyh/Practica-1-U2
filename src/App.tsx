import { useStudyPlan } from './hooks/useStudyPlan';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskSummary from './components/TaskSummary';
import TaskFilters from './components/TaskFilters';
import TaskList from './components/TaskList';

function App() {
  const { state, addTask, toggleTask, deleteTask, setFilter } = useStudyPlan();

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === 'pending') return !task.done;
    if (state.filter === 'completed') return task.done;
    return true;
  });

  const summary = {
    total: state.tasks.length,
    pending: state.tasks.filter((task) => !task.done).length,
    completed: state.tasks.filter((task) => task.done).length,
  };

  return (
    <div className="app">
      <Header />

      <div className="layout">
        <TaskForm onAdd={addTask} error={state.error} />

        <section className="board">
          <TaskSummary summary={summary} />
          <TaskFilters currentFilter={state.filter} onSetFilter={setFilter} />
          <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
        </section>
      </div>
    </div>
  );
}

export default App;