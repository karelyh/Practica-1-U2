export type Subject = 'programacion' | 'matematicas' | 'historia';
export type FilterType = 'all' | 'pending' | 'completed';
export type Filter = FilterType;

export interface TaskItem {
  id: string;
  title: string;
  subject: Subject;
  done: boolean;
}

export interface StudyPlanState {
  tasks: TaskItem[];
  filter: FilterType;
  error: string;
}