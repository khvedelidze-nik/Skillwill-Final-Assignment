import type React from "react";
import type { ISearchPhotoData } from "../../../../interfaces/search-photos/search-photo.interface";
import CardUser from "../../card-components/CardUser";
import CardDescription from "../../card-components/CardDescription";

interface ContentInterface {
  photo: ISearchPhotoData;
}

const SearchPhotoCardContent: React.FC<ContentInterface> = ({ photo }) => {
  return (
    <div className="z-10 absolute bottom-0 rounded-b-md p-2 w-full bg-linear-to-t from-black/80 from-20% to-black/20">
      <CardUser user={photo.user} />
      <CardDescription description={photo.description} />
    </div>
  );
};

export default SearchPhotoCardContent;
