import {
  all,
  takeEvery,
  put,
  call,
  fork,
  delay,
  take,
  takeLatest,
} from "redux-saga/effects";
import {
  createScheduleApi,
  deleteScheduleApi,
  filterSchedulesApi,
  findScheduleByIdApi,
  loadSchedulesApi,
  updateScheduleApi,
} from "../utils/api";
import {
  createScheduleFail,
  createScheduleSucces,
  deleteScheduleFail,
  deleteScheduleSucces,
  findScheduleByIdSucces,
  loadSchedulesFail,
  loadSchedulesSucces,
  findSheduleByIdFail,
  updateScheduleSucces,
  updateScheduleFail,
} from "./actions/actions";
import {
  CREATE_SCHEDULE_START,
  DELETE_SCHEDULE_START,
  FILTER_SCHEDULES_START,
  FIND_SCHEDULEBYID_START,
  LOAD_SCHEDULES_START,
  UPDATE_SCHEDULE_START,
} from "./actions/actionTypes";
import history from "../components/history";

// SAGA FUNCTIONS

// Fetch all Generator Function
export function* scheduleList() {
  try {
    const response = yield call(loadSchedulesApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadSchedulesSucces(response.data));
    }
  } catch (err) {
    yield put(loadSchedulesFail(err));
  }
}

// create Generator Function
export function* createSchedule({ payload }) {
  try {
    const response = yield call(createScheduleApi, payload);
    if (response.status === 200) {
      yield put(createScheduleSucces(response.data));
    }
  } catch (err) {
    yield put(createScheduleFail(err.message));
  }
}

// delete Generator Function
export function* deleteSchedule(scheduleId) {
  try {
    const response = yield call(deleteScheduleApi, scheduleId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteScheduleSucces(scheduleId));
    }
  } catch (err) {
    yield put(deleteScheduleFail(err.message));
  }
}

// findbyId Generator Function
export function* findScheduleById(scheduleId) {
  try {
    const response = yield call(findScheduleByIdApi, scheduleId);
    if (response.status === 200) {
      yield put(findScheduleByIdSucces(response.data));
      console.log(response.data);
    }
  } catch (err) {
    yield put(findSheduleByIdFail(err.message));
  }
}

// update Generator Function
export function* updateSchedule({ payload }) {
  try {
    const response = yield call(updateScheduleApi, payload.id, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(updateScheduleSucces(response.data));
      history.push("/");
    }
  } catch (err) {
    yield put(updateScheduleFail(err.message.data));
  }
}

// filter Generator Function
export function* filterByTopic(params) {
  try {
    const response = yield call(filterSchedulesApi, params);
    // console.log(response.data)
    if (response.status === 200) {
      yield put(loadSchedulesSucces(response.data));
      console.log(response.data);
    }
  } catch (err) {
    yield put(loadSchedulesFail(err.message));
  }
}
/// SAGA ACTIONS

export function* createScheduleSaga() {
  yield takeEvery(CREATE_SCHEDULE_START, createSchedule);
}

export function* onDeleteSchedule() {
  while (true) {
    const { payload: scheduleId } = yield take(DELETE_SCHEDULE_START);
    yield call(deleteSchedule, scheduleId);
  }
}

export function* onUpdateSchedule() {
  yield takeLatest(UPDATE_SCHEDULE_START, updateSchedule);
}

export function* showScheduleSaga() {
  yield takeEvery(LOAD_SCHEDULES_START, scheduleList);
}

export function* filterSchedulesSaga() {
  while (true) {
    const { payload: params } = yield take(FILTER_SCHEDULES_START);
    yield call(filterByTopic, params);
  }
}
export function* onfindByIdSchedule() {
  while (true) {
    const { payload: scheduleId } = yield take(FIND_SCHEDULEBYID_START);
    yield call(findScheduleById, scheduleId);
  }
}

const scheduleSaga = [
  fork(showScheduleSaga),
  fork(createScheduleSaga),
  fork(onDeleteSchedule),
  fork(onfindByIdSchedule),
  fork(onUpdateSchedule),
  fork(filterSchedulesSaga)
];
export default function* rootSaga() {
  yield all([...scheduleSaga]);
}
