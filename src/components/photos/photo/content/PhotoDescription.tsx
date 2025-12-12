import React from "react";

interface DescriptionProps {
  description: string;
}

const PhotoDescription: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <span className="text-gray-900">
      {description.length < 1 ? "No description..." : description}
    </span>
  );
};

export default PhotoDescription;
