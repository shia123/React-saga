import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { findScheduleByIdStart } from "../../store/actions/actions";
import AddEditSchedule from "./AddEditSchedule";

const AddEditForm = () => {
  const { schedule, error, loading } = useSelector((state) => state.schedule);
  const dispatch = useDispatch();
  const scheduleId = useParams();

  useEffect(() => {
    if (scheduleId.id) {
      dispatch(findScheduleByIdStart(scheduleId.id));
    }
  }, []);

  if (loading) {
    return (
      <div className=" flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
    );
  }

  return <AddEditSchedule scheduleDetails={scheduleId.id ? schedule : ""} />;
};

export default AddEditForm;
