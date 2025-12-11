import type { IPictureData } from "../../interfaces/IPicture/IPictureData";

const PhotoBackground = ({ photo }: { photo: IPictureData }) => {
  return (
    <img
      className="w-full h-auto rounded-lg"
      src={photo.urls.regular}
      alt={photo.alt_description}
    />
  );
};

export default PhotoBackground;
