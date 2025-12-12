import React from "react";
import CardImage from "./CardImage";
import CardStatusLoading from "./CardStatusLoading";

interface BackgroundProps {
  url: string;
  description: string;
}

const CardBackground: React.FC<BackgroundProps> = ({ url, description }) => {
  return (
    <div className="min-h-50 bg-gray-200 relative">
      <CardStatusLoading />
      <CardImage url={url} description={description} />
    </div>
  );
};

export default CardBackground;
