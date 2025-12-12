import type React from "react";

interface StatusInterface {
  error: Error;
}

const StatusError: React.FC<StatusInterface> = ({ error }) => {
  return (
    <h3 className="m-4 font-bold w-fit text-transparent bg-clip-text bg-linear-to-r from-red-700 to-red-500">
      {error.message}
    </h3>
  );
};

export default StatusError;
