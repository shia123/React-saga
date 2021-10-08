import * as types from "./actionTypes";

//fetch ation
export const loadSchedulesStart = () => ({
  type: types.LOAD_SCHEDULES_START,
});

export const loadSchedulesSucces = (data) => ({
  type: types.LOAD_SCHEDULES_SUCCESS,
  payload: data,
});
export const loadSchedulesFail = (err) => ({
  type: types.LOAD_SCHEDULES_FAIL,
  payload: err,
});



//filter action
export const filterSchedulesStart = (params) => ({
  type: types.FILTER_SCHEDULES_START,
  payload:params
});

export const filterSchedulesSucces = (data) => ({
  type: types.FILTER_SCHEDULES_SUCCESS,
  payload: data,
});
export const filterSchedulesFail = (err) => ({
  type: types.FILTER_SCHEDULES_FAIL,
  payload: err,
});

// fetch by id action
export const findScheduleByIdStart = (scheduleId) => ({
  type: types.FIND_SCHEDULEBYID_START,
  payload:scheduleId
});

export const findScheduleByIdSucces = (data) => ({
  type: types.FIND_SCHEDULEBYID_SUCCESS,
  payload: data,
});
export const findSheduleByIdFail = (err) => ({
  type: types.FIND_SCHEDULEBYID_FAIL,
  payload: err,
});

export const createScheduleStart = (details) => ({
  type: types.CREATE_SCHEDULE_START,
  payload: details,
});

// create action
export const createScheduleSucces = () => ({
  type: types.CREATE_SCHEDULE_SUCCESS,
});
export const createScheduleFail = (err) => ({
  type: types.CREATE_SCHEDULE_FAIL,
  payload: err,
});



// update action
export const updateScheduleStart = (details) => ({
  type: types.UPDATE_SCHEDULE_START,
  payload:details,
});

export const updateScheduleSucces = () => ({
  type: types.UPDATE_SCHEDULE_SUCCESS,

});
export const updateScheduleFail = (err) => ({
  type: types.UPDATE_SCHEDULE_FAIL,
  payload: err,
});


// delete action
export const deleteScheduleStart = (scheduleId) => ({
  type: types.DELETE_SCHEDULE_START,
  payload: scheduleId,
});

export const deleteScheduleSucces = (scheduleId) => ({
  type: types.DELETE_SCHEDULE_SUCCESS,
  payload: scheduleId,
});
export const deleteScheduleFail = (err) => ({
  type: types.DELETE_SCHEDULE_FAIL,
  payload: err,
});

