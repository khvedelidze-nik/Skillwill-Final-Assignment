import React from "react";

interface ImageProps {
  url: string;
  description: string;
}

const CardImage: React.FC<ImageProps> = ({ url, description }) => {
  return (
    <img className="w-full h-auto relative z-0" src={url} alt={description} />
  );
};

export default CardImage;
