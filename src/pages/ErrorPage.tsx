import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <h1 className="m-2 p-2 text-2xl font-bold text-red-600">
      Error! Please go back to{" "}
      <Link
        to={"/"}
        className=" text-white font-bold rounded-md bg-gray-700 p-1"
      >
        Home page
      </Link>
    </h1>
  );
};

export default ErrorPage;
