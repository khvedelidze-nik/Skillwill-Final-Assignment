import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetPhoto from "../../../hooks/queries/useGetPhoto";
import StatusError from "../../statuses/StatusError";
import StatusLoading from "../../statuses/StatusLoading";
import PhotoInformation from "./PhotoInformation";
import PhotoBackground from "./PhotoBackground";
import useGetPhotoStatistics from "../../../hooks/queries/useGetPhotoStatistics";

const PhotoWrapper: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data: photo, error, isLoading } = useGetPhoto(params.id!);
  const { data: statistics } = useGetPhotoStatistics(params.id!);

  useEffect(() => {
    if (params.id!.length < 1) {
      navigate(-1);
    }
  }, [params, navigate]);

  if (error) return <StatusError error={error} />;
  if (isLoading) return <StatusLoading />;
  return (
    <div className="p-4">
      <PhotoBackground
        url={photo!.urls.regular}
        description={photo!.description}
        download_url={photo!.links.download}
      />
      <PhotoInformation
        user={{
          name: photo!.user.name,
          username: photo!.user.username,
          avatar: photo!.user.profile_image.small,
        }}
        description={photo!.description}
        downloads={statistics!.downloads.total}
        views={statistics!.views.total}
      />
    </div>
  );
};

export default PhotoWrapper;
