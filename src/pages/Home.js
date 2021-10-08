import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import {
  deleteScheduleStart,
  filterSchedulesStart,
  loadSchedulesStart,
} from "../store/actions/actions";
import { toast } from "react-toastify";

function Home() {
  const dispatch = useDispatch();
  const { schedules, loading } = useSelector((state) => state.schedule);

  const handleDelete = (value) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteScheduleStart(value));
      toast.warning("Schedule Deleted");
      dispatch(loadSchedulesStart());
    }
  };
  const handleStatus = (value) => {
    if (value == 1) {
      return <label className="text-yellow-500">Pending</label>;
    } else if (value == 2) {
      return <label className="text-blue-400">On-going</label>;
    } else {
      return <label className="text-green-400">Done</label>;
    }
  };
  const handleChange = (e) => {
    if(!e.target.value){
      dispatch(loadSchedulesStart());
    }
    else{
      dispatch(filterSchedulesStart(e.target.value));
    }
   
  };

  useEffect(() => {
    dispatch(loadSchedulesStart());
  }, []);

  if (loading) {
    return (
      <div className=" flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4">
      <div className="text-blue-500 p-4 text-2xl text-center uppercase">
        <h1>List of schedules</h1>
        <br />
        <input
          type="text"
          name="topic"
          className="form-input px-4 py-3 "
          placeholder="Search Meeting"
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-center">
        <div className="flex-col ">
          {schedules &&
            schedules.map((values, index) => (
              <div
                key={index}
                className="max-w-md  py-4 px-8 bg-white shadow-lg rounded-lg my-20"
              >
                <div>
                  <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">
                      {values.topic}
                    </h2>
                    <br />
                    <p className="mt-2 text-lg=2 text-gray-600">
                      {values.date}
                    </p>
                    <br />
                    <br />
                    <h3>{handleStatus(values.status)}</h3>
                  </div>
                  <div className="flex justify-around mt-4">
                    <Link to={`/details/${values.id}`}>
                      <PencilIcon
                        style={{ height: "50px", width: "50px" }}
                        className="text-purple-500 hover:text-green-300"
                      />
                    </Link>

                    <button onClick={() => handleDelete(values.id)}>
                      <TrashIcon
                        style={{ height: "50px", width: "50px" }}
                        className="h-5 w-5 text-gray-500 hover:text-green-300"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
