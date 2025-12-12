import React from "react";

interface StatProps {
  stat: string;
  value: number;
}

const PhotoStat: React.FC<StatProps> = ({ stat, value }) => {
  return (
    <span className="m-1">
      {stat}: {value}
    </span>
  );
};

export default PhotoStat;
