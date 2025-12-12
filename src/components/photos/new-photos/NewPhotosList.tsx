import type React from "react";
import type { IPhotoData } from "../../../interfaces/new-photos/new-photo.interface";
import NewPhotoCard from "./card/NewPhotoCard";

interface ListProps {
  photos: IPhotoData[];
}

const NewPhotosList: React.FC<ListProps> = ({ photos }) => {
  return (
    <div className="relative columns-1 sm:columns-2 lg:columns-3">
      {photos.map((photo) => (
        <NewPhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default NewPhotosList;
