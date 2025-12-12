import { useSearchParams } from "react-router-dom";
import useGetNewPhotos from "../../../hooks/queries/useGetNewPhotos";
import PaginationWrapper from "./pagination/PaginationWrapper";
import StatusError from "../../statuses/StatusError";
import StatusLoading from "../../statuses/StatusLoading";
import PhotosList from "../PhotosList";

const NewPhotosWrapper = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data: photos, error, isLoading } = useGetNewPhotos(page);

  if (error) return <StatusError error={error} />;
  if (isLoading) return <StatusLoading />;
  return (
    <div className="p-4 min-h-100vh">
      <PhotosList photos={photos!} />
      <PaginationWrapper />
    </div>
  );
};

export default NewPhotosWrapper;
