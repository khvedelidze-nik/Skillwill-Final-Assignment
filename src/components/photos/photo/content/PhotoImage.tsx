import React from "react";

interface ImageProps {
  url: string;
  description: string;
}

const PhotoImage: React.FC<ImageProps> = ({ url, description }) => {
  return (
    <img
      className="max-h-lvh max-w-full relative z-0"
      src={url}
      alt={description}
    />
  );
};

export default PhotoImage;
