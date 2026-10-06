import type { TaskItem as StudyTaskItem } from '../types/studyPlan';

interface TaskItemProps {
  task: StudyTaskItem;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className={task.done ? 'task is-done' : 'task'}>
      <label className="task-check">
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
        <span>{task.title}</span>
      </label>
      <span className={`badge badge-${task.subject}`}>{task.subject}</span>
      <button type="button" className="delete-button" onClick={() => onDelete(task.id)}>
        Eliminar
      </button>
    </li>
  );
}