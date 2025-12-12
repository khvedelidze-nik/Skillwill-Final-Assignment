import React from "react";

interface BackgroundParams {
  urls: {
    regular: string;
  };
  description: string;
}

const CardBackground: React.FC<BackgroundParams> = ({ urls, description }) => {
  return <img className="w-full h-auto" src={urls.regular} alt={description} />;
};

export default CardBackground;
