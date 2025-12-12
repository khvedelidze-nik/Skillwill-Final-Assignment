import type React from "react";
import type { IPhotoData } from "../../../../interfaces/new-photos/new-photo.interface";
import CardUser from "../../card-components/CardUser";
import CardDescription from "../../card-components/CardDescription";
import { Link } from "react-router-dom";

interface ContentInterface {
  photo: IPhotoData;
}

const NewPhotoCardContent: React.FC<ContentInterface> = ({ photo }) => {
  return (
    <div className="z-10 absolute flex flex-col justify-end p-2 bottom-0 top-0 w-full bg-black/30 opacity-0 transition ease-out hover:opacity-100">
      <CardUser user={photo.user} />
      <CardDescription description={photo.description} />
      <Link
        to={photo.links.download}
        className="absolute w-8 h-8 rounded-md bottom-3 right-3 bg-white text-center font-serif"
      >
        ⟬⇩⟭
      </Link>
    </div>
  );
};

export default NewPhotoCardContent;
