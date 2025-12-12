import type React from "react";
import CardContent from "./CardContent";
import CardBackground from "./CardBackground";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: string;
  user: {
    name: string;
    avatar: string;
    username: string;
  };
  url: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ id, user, url, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ pathname: `/photos/${id}` });
  };

  return (
    <div className="relative mb-4" onClick={handleClick}>
      <CardBackground url={url} description={description} />
      <CardContent
        name={user.name}
        avatar={user.avatar}
        username={user.username}
        description={description}
      />
    </div>
  );
};

export default Card;
