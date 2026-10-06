import { useState } from 'react';
import type { Subject } from '../types/studyPlan';

interface TaskFormProps {
  onAdd: (title: string, subject: Subject) => void;
  error: string | null;
}

export default function TaskForm({ onAdd, error }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState<Subject>('programacion');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(title, subject);

    if (title.trim().length >= 3) {
      setTitle('');
      setSubject('programacion');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Nueva tarea</h2>
      <p className="form-help">
        El título es obligatorio y debe tener al menos 3 caracteres.
      </p>
 
      <label htmlFor="title">Título</label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Ej. Repasar los hooks"
        autoComplete="off"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      
      <label htmlFor="task-subject">Materia</label>
      <select id="task-subject" value={subject} onChange={(e) => setSubject(e.target.value as Subject)}>
        <option value="programacion">Programación</option>
        <option value="matematicas">Matemáticas</option>
        <option value="historia">Historia</option>
      </select>

      <button type="submit" className="submit-button">Agregar</button>
      <p className="form-error">{error ?? ''}</p>
    </form>
  );
}