import React from "react";
import NewPhotosWrapper from "../components/photos/new-photos/NewPhotosWrapper";
import { useSearchParams } from "react-router-dom";

const HomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  return (
    <div>
      <h4 className="text-2xl font-bold ml-4 mt-4">
        New Photos {page > 1 && `- Page ${page}`}
      </h4>
      <NewPhotosWrapper />
    </div>
  );
};

export default HomePage;
