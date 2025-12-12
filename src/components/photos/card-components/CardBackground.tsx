import React from "react";

interface BackgroundParams {
  url: string;
  description: string;
}

const CardBackground: React.FC<BackgroundParams> = ({ url, description }) => {
  return <img className="w-full h-auto" src={url} alt={description} />;
};

export default CardBackground;
