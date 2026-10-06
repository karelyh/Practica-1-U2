import type { Filter } from '../types/studyPlan';

interface TaskFiltersProps {
  currentFilter: Filter;
  onSetFilter: (filter: Filter) => void;
}

export default function TaskFilters({ currentFilter, onSetFilter }: TaskFiltersProps) {
  return (
    <div className="filters">
      <button
        type="button"
        className={currentFilter === 'all' ? 'filter is-active' : 'filter'}
        onClick={() => onSetFilter('all')}
      >
        Todas
      </button>
      <button
        type="button"
        className={currentFilter === 'pending' ? 'filter is-active' : 'filter'}
        onClick={() => onSetFilter('pending')}
      >
        Pendientes
      </button>
      <button
        type="button"
        className={currentFilter === 'completed' ? 'filter is-active' : 'filter'}
        onClick={() => onSetFilter('completed')}
      >
        Completadas
      </button>
    </div>
  );
}