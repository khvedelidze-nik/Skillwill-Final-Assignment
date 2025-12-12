import type React from "react";
import type { ISearchPhotoData } from "../../../../interfaces/search-photos/search-photo.interface";

interface BgInterface {
  photo: ISearchPhotoData;
}

const SearchPhotoBackground: React.FC<BgInterface> = ({ photo }) => {
  return (
    <img
      className="w-full h-auto rounded-lg"
      src={photo.urls.regular}
      alt={photo.description}
    />
  );
};

export default SearchPhotoBackground;
