import React from "react";

interface UserParams {
  name: string;
  avatar: string;
  username: string;
}

const CardUser: React.FC<UserParams> = ({ name, avatar, username }) => {
  return (
    <span className="flex gap-1 align-middle cursor-pointer">
      <img className="w-8 h-8 rounded-full" src={avatar} alt={name} />
      <div className="text-white flex flex-col">
        <span className="font-bold text-sm h-4">
          {name.length > 20 ? name.slice(0, 20) + "..." : name}
        </span>
        <span className="text-xs h-4">@{username}</span>
      </div>
    </span>
  );
};

export default CardUser;
