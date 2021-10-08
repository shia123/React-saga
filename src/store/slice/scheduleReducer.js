import {
  CREATE_SCHEDULE_FAIL,
  CREATE_SCHEDULE_START,
  CREATE_SCHEDULE_SUCCESS,
  DELETE_SCHEDULE_FAIL,
  DELETE_SCHEDULE_START,
  DELETE_SCHEDULE_SUCCESS,
  FIND_SCHEDULEBYID_FAIL,
  FIND_SCHEDULEBYID_START,
  FIND_SCHEDULEBYID_SUCCESS,
  LOAD_SCHEDULES_FAIL,
  LOAD_SCHEDULES_START,
  LOAD_SCHEDULES_SUCCESS,
  UPDATE_SCHEDULE_FAIL,
  UPDATE_SCHEDULE_START,
  UPDATE_SCHEDULE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  schedules: [],
  schedule:[],
  loading: false,
  error: null,
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SCHEDULES_START:
    case CREATE_SCHEDULE_START:
    case FIND_SCHEDULEBYID_START:
    case UPDATE_SCHEDULE_START:
    case DELETE_SCHEDULE_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SCHEDULES_SUCCESS:
      return {
        ...state,
        loading: false,
        schedules: action.payload,
      };
    case FIND_SCHEDULEBYID_SUCCESS:
      return {
        ...state,
        loading: false,
        schedule:action.payload
      };
    case CREATE_SCHEDULE_SUCCESS:
    case UPDATE_SCHEDULE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_SCHEDULE_SUCCESS:
      return {
        ...state,
        loading: false,
        schedules: state.schedules.filter((item) => item.id !== action.payload),
      };
    case LOAD_SCHEDULES_FAIL:
    case CREATE_SCHEDULE_FAIL:
    case UPDATE_SCHEDULE_FAIL:
    case FIND_SCHEDULEBYID_FAIL:
    case DELETE_SCHEDULE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default scheduleReducer;
