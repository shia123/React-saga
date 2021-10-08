import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
 
      <div className="bg-blue-500 text-white p-4  uppercase flex justify-between ">
        <h1 className="text-2xl hover:text-blue-200">
          <Link to="/">Calendar App</Link>
        </h1>
        <div>
          <ul className="flex justify-between space-x-2.5">
            <li className="hover:text-blue-200">
              <Link to="/add/schedule">Add</Link>
            </li>
          </ul>
        </div>
      </div>

  );
};

export default MainPage;
