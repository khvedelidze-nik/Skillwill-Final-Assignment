import React from "react";

interface DescriptionParams {
  description: string;
}

const CardDescription: React.FC<DescriptionParams> = ({ description }) => {
  return (
    <p className="text-white m-1 text-sm">
      {description?.length > 36
        ? description.slice(0, 36) + "..."
        : description}
    </p>
  );
};

export default CardDescription;
