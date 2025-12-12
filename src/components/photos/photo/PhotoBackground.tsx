import React from "react";
import PhotoStatusLoading from "./content/PhotoStatusLoading";
import PhotoImage from "./content/PhotoImage";
// import DownloadButton from "../../buttons/DownloadButton";

interface BackgroundProps {
  url: string;
  description: string;
  download_url: string;
}

const PhotoBackground: React.FC<BackgroundProps> = ({
  url,
  description,
  // download_url,
}) => {
  return (
    <div className="min-h-50 bg-gray-900 relative flex justify-center">
      <PhotoStatusLoading />
      <PhotoImage url={url} description={description} />
      {/* <DownloadButton url={download_url} /> // ეს გავაუქმე, რადგან არ იწერდა ფოტოს */}
    </div>
  );
};

export default PhotoBackground;
