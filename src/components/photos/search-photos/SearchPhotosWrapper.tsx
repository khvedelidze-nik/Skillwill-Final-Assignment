import { useSearchParams } from "react-router-dom";
import PaginationWrapper from "./pagination/PaginationWrapper";
import SearchPhotosList from "./SearchPhotosList";
import useGetSearchPhotos from "../../../hooks/queries/useGetSearchPhotos";
import StatusLoading from "../../statuses/StatusLoading";
import StatusNoResults from "../../statuses/StatusNoResults";
import StatusError from "../../statuses/StatusError";
import type React from "react";

const SearchPhotosWrapper: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");
  const page = Number(searchParams.get("page")) || 1;

  const {
    data: results,
    error,
    isLoading,
  } = useGetSearchPhotos(searchTerm!, page);

  if (error) return <StatusError error={error} />;
  if (isLoading) return <StatusLoading />;
  if (results!.results.length < 1) return <StatusNoResults />;
  return (
    <div className="p-4 min-h-100vh">
      <SearchPhotosList results={results!.results} />
      <PaginationWrapper totalPages={results!.total_pages} />
    </div>
  );
};

export default SearchPhotosWrapper;
