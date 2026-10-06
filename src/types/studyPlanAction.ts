import type { Subject, FilterType } from './studyPlan';

export type StudyPlanAction =
  | { type: 'ADD'; payload: { title: string; subject: Subject } }
  | { type: 'TOGGLE'; payload: string }
  | { type: 'DELETE'; payload: string }
  | { type: 'SET_FILTER'; payload: FilterType };