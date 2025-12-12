import type React from "react";
import type { IPhotoData } from "../../../../interfaces/new-photos/new-photo.interface";
import NewPhotoCardContent from "./NewPhotoCardContent";
import CardBackground from "../../card-components/CardBackground";

interface CardInterface {
  photo: IPhotoData;
}

const NewPhotoCard: React.FC<CardInterface> = ({ photo }) => {
  return (
    <div className="relative mb-4">
      <CardBackground urls={photo.urls} description={photo.description} />
      <NewPhotoCardContent photo={photo} />
    </div>
  );
};

export default NewPhotoCard;
