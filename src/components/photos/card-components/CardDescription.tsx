import React from "react";

interface DescriptionProps {
  description: string;
}

const CardDescription: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <p className="text-white m-1 text-sm cursor-pointer">
      {description?.length > 36
        ? description.slice(0, 36) + "..."
        : description}
    </p>
  );
};

export default CardDescription;
