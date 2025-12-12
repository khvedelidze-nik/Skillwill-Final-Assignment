import React from "react";
import PhotoDescription from "./content/PhotoDescription";
import PhotoAuthor from "./content/PhotoAuthor";
import PhotoStatistics from "./content/PhotoStatistics";

interface InformationProps {
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  description: string;
  downloads: number;
  views: number;
}

const PhotoInformation: React.FC<InformationProps> = ({
  user,
  description,
  downloads,
  views,
}) => {
  return (
    <div>
      <PhotoStatistics downloads={downloads} views={views}></PhotoStatistics>
      <PhotoAuthor
        name={user.name}
        username={user.username}
        avatar={user.avatar}
      />
      {description && <PhotoDescription description={description} />}
    </div>
  );
};

export default PhotoInformation;
