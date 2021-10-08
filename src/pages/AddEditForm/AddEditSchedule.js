import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { PlusCircleIcon, ArrowLeftIcon, CogIcon } from "@heroicons/react/solid";
import {
  createScheduleStart,
  updateScheduleStart,
} from "../../store/actions/actions";

const initialValue = {
  topic: "",
  date: "",
  status: "",
};
function AddEditSchedule({ scheduleDetails = initialValue }) {
  const scheduleId = useParams();
  const [formData, setFormData] = useState(scheduleDetails);
  const { schedule, error, loading } = useSelector((state) => state.schedule);
  const { topic, date, status } = formData;

  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (scheduleId.id) {
      dispatch(updateScheduleStart(formData));
      toast.success("Schedule Updated");
    } else {
      if (formData.id) {
        window.location.reload();
      } else {
        dispatch(createScheduleStart(formData));
        setTimeout(() => history.push("/"), 500);
        toast.success("Schedule Added");
      }
    }
  };

  const disableField = (id, status) => {
    if (id && status === "0") {
      return true;
    } else {
      return false;
    }
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(e.target.value);
    setFormData({ ...formData, [name]: value });
    console.log(e.target.value);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center  ">
        <form
          className="max-w-md  py-4 px-8 bg-white shadow-lg rounded-lg my-20"
          onSubmit={handleSubmit}
        >
          <div className="text-blue-500 p-4 text-2xl text-center uppercase">
            <h1>{scheduleId.id ? "Update Schedule" : "Add Schedule"}</h1>
          </div>
          <div>
            <input
              type="text"
              name="topic"
              className="form-input px-4 py-3 w-full"
              placeholder="Topic"
              value={topic || ""}
              required
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <input
              type="date"
              name="date"
              value={date || ""}
              className="form-input px-4 py-3 w-full"
              onChange={handleChange}
              required
              disabled={disableField(scheduleId.id, schedule.status)}
            />
          </div>
          <br />
         
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="status"
                value="1"
                onChange={handleChange}
                disabled={disableField(scheduleId.id, schedule.status)}
              />
              <span className="ml-2">Pending</span>
            </label>
            <br />
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="status"
                value="2"
                onChange={handleChange}
                disabled={disableField(scheduleId.id, schedule.status)}
              />
              <span className="ml-2">On-going</span>
            </label>
            <br />
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="status"
                value="0"
                onChange={handleChange}
                disabled={disableField(scheduleId.id, schedule.status)}
              />
              <span className="ml-2">Done</span>
            </label>
          </div>
          <br />
          <div className="flex justify-around">
            <Link to="/">
              <ArrowLeftIcon
                style={{ height: "50px", width: "50px" }}
                className="h-5 w-5 text-gray-500 hover:text-gray-300"
              />
            </Link>
            {scheduleId.id ? (
              <button type="submit">
                <CogIcon
                  style={{ height: "50px", width: "50px" }}
                  className="h-5 w-5 text-gray-500 hover:text-green-300"
                />
              </button>
            ) : (
              <button type="submit">
                <PlusCircleIcon
                  style={{ height: "50px", width: "50px" }}
                  className="h-5 w-5 text-gray-500 hover:text-green-300"
                />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEditSchedule;
