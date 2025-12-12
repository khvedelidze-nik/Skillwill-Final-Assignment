import SearchPhotoCard from "./card/SearchPhotoCard";
import type { ISearchPhotoData } from "../../../interfaces/search-photos/search-photo.interface";
import type React from "react";

interface SearchPhotosListProps {
  results: ISearchPhotoData[];
}

const SearchPhotosList: React.FC<SearchPhotosListProps> = ({ results }) => {
  return (
    <div className="relative columns-1 sm:columns-2 lg:columns-3">
      {results.map((photo) => (
        <SearchPhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default SearchPhotosList;
