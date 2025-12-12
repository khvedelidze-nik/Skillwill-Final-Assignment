import type React from "react";
import Card from "./card-components/Card";
import type { IPhoto } from "../../interfaces/photo/photo.interface";

interface ListProps {
  photos: IPhoto[];
}

const PhotosList: React.FC<ListProps> = ({ photos }) => {
  return (
    <div className="relative columns-1 sm:columns-2 lg:columns-4">
      {photos.map((photo) => (
        <Card
          key={photo.id}
          id={photo.id}
          user={{
            name: photo.user.name,
            avatar: photo.user.profile_image.small,
            username: photo.user.username,
          }}
          url={photo.urls.regular}
          description={photo.description}
        />
      ))}
    </div>
  );
};

export default PhotosList;
