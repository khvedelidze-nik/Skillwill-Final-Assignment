import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchPhotosWrapper from "../components/photos/search-photos/SearchPhotosWrapper";

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));
  const searchTerm = searchParams.get("search");
  return (
    <div>
      <h4 className="text-2xl font-bold ml-4 mt-4">
        Search results of <span className="font-light">{searchTerm}</span>{" "}
        {page > 1 && `- Page ${page}`}
      </h4>
      <SearchPhotosWrapper />
    </div>
  );
};

export default SearchPage;
