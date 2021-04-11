import {
  FETCHING_TASKS,
  FETCHING_TASKS_SUCCESS,
  FETCHING_TASKS_FAILED,
} from "../types/note";

export default function tasks(state = {}, action = {}) {
  switch (action.type) {
    case FETCHING_TASKS:
      return {
        ...state,
        loading: true,
      };
    case FETCHING_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.tasks,
      };
    case FETCHING_TASKS_FAILED:
      return {
        ...state,
        loading: false,
        tasks: null,
        error: action.error,
      };
    default:
      return state;
  }
}
