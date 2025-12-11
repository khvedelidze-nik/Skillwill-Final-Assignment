import type { IPictureData } from "../../interfaces/IPicture/IPictureData";
import PhotoBackground from "./PhotoBackground";
import PhotoCardContent from "./PhotoCardContent";

const PhotoCard = ({ photo }: { photo: IPictureData }) => {
  return (
    <div key={photo.id} className="relative mb-4">
      <PhotoBackground photo={photo} />
      <PhotoCardContent photo={photo} />
    </div>
  );
};

export default PhotoCard;
