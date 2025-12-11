import type { IPictureData } from "../../interfaces/IPicture/IPictureData";

const PhotoCardContent = ({ photo }: { photo: IPictureData }) => {
  return (
    <div
      className="z-10 absolute bottom-0 rounded-md p-2 w-full"
      style={{
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.2))`,
      }}
    >
      <span className="text-white flex gap-1 align-middle font-bold">
        <img
          className="rounded-2xl"
          src={photo.user.profile_image.small}
          alt={photo.user.name}
        />
        {photo.user.name.length > 20
          ? photo.user.name?.slice(0, 20) + "..."
          : photo.user.name}
      </span>
      <p className="text-white m-1">{photo.alt_description}</p>
    </div>
  );
};

export default PhotoCardContent;
