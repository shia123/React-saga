import axios from "axios";

export const loadSchedulesApi = async () =>
  await axios.get("http://localhost:5000/schedules");

export const filterSchedulesApi = async (value) =>
  await axios.get(`http://localhost:5000/schedules?topic=${value}`);

export const findScheduleByIdApi = async (schedId) =>
  await axios.get(`http://localhost:5000/schedules/${schedId}`);

export const createScheduleApi = async (details) =>
  await axios.post("http://localhost:5000/schedules", details);

export const deleteScheduleApi = async (schedId) =>
  await axios.delete(`http://localhost:5000/schedules/${schedId}`);

export const updateScheduleApi = async (schedId, payload) =>
  await axios.put(`http://localhost:5000/schedules/${schedId}`, payload);
