import type React from "react";
import CardUser from "./CardUser";
import CardDescription from "./CardDescription";

interface ContentInterface {
  name: string;
  avatar: string;
  username: string;
  description: string;
}

const CardContent: React.FC<ContentInterface> = ({
  name,
  avatar,
  username,
  description,
}) => {
  return (
    <div className="z-10 absolute flex flex-col cursor-zoom-in justify-end bottom-0 top-0 p-2 w-full bg-black/30 transition-opacity ease-in opacity-0 hover:opacity-100">
      <CardUser name={name} avatar={avatar} username={username} />
      <CardDescription description={description} />
    </div>
  );
};

export default CardContent;
