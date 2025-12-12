import React from "react";
import PhotoStat from "./PhotoStat";
import VerticalRule from "../../../rules/VerticalRule";

interface StatisticsProps {
  downloads: number;
  views: number;
}

const PhotoStatistics: React.FC<StatisticsProps> = ({ downloads, views }) => {
  return (
    <div className="flex gap-1 mb-1 mt-1">
      <VerticalRule className="border-gray-400" />
      <PhotoStat stat="Downloads" value={downloads} />
      <VerticalRule className="border-gray-400" />
      <PhotoStat stat="Views" value={views} />
      <VerticalRule className="border-gray-400" />
    </div>
  );
};

export default PhotoStatistics;
