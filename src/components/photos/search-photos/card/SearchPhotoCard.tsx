import type React from "react";
import type { ISearchPhotoData } from "../../../../interfaces/search-photos/search-photo.interface";
import SearchPhotoCardContent from "./SearchPhotoCardContent";
import CardBackground from "../../card-components/CardBackground";

interface CardProps {
  photo: ISearchPhotoData;
}

const SearchPhotoCard: React.FC<CardProps> = ({ photo }) => {
  return (
    <div className="relative mb-4">
      <CardBackground urls={photo.urls} description={photo.description} />
      <SearchPhotoCardContent photo={photo} />
    </div>
  );
};

export default SearchPhotoCard;
