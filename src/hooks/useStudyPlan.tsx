import { useReducer } from 'react';
import type { TaskItem, StudyPlanState, Subject, FilterType } from '../types/studyPlan';
import type { StudyPlanAction } from '../types/studyPlanAction';

const initialState: StudyPlanState = {
  tasks: [],
  filter: 'all',
  error: ''
};

function studyPlanReducer(state: StudyPlanState, action: StudyPlanAction): StudyPlanState {
  switch (action.type) {
    case 'ADD': {
      const { title, subject } = action.payload;
      const trimmedTitle = title.trim();

      if (trimmedTitle.length < 3) {
        return {
          ...state,
          error: 'Escribe un título de al menos 3 caracteres.'
        };
      }

      const newTask: TaskItem = {
        id: crypto.randomUUID(),
        title: trimmedTitle,
        subject,
        done: false
      };

      return {
        ...state,
        tasks: [...state.tasks, newTask],
        error: ''
      };
    }
    case 'TOGGLE': {
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        )
      };
    }
    case 'DELETE': {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    }
    case 'SET_FILTER': {
      return {
        ...state,
        filter: action.payload
      };
    }
    default:
      return state;
  }
}

export function useStudyPlan() {
  const [state, dispatch] = useReducer(studyPlanReducer, initialState);

  function addTask(title: string, subject: Subject) {
    dispatch({ 
      type: 'ADD', 
      payload: { title, subject } 
    });
  }

  function toggleTask(id: string) {
    dispatch({ 
      type: 'TOGGLE', 
      payload: id 
    });
  }

  function deleteTask(id: string) {
    dispatch({ 
      type: 'DELETE', 
      payload: id 
    });
  }

  function setFilter(filter: FilterType) {
    dispatch({ 
      type: 'SET_FILTER', 
      payload: filter 
    });
  }

  return {
    state,
    addTask,
    toggleTask,
    deleteTask,
    setFilter
  };
}