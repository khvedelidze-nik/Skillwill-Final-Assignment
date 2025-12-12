import React from "react";

interface UserParams {
  user: {
    name: string;
    username: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
}

const CardUser: React.FC<UserParams> = ({ user }) => {
  return (
    <span className="flex gap-1 align-middle">
      <img
        className="w-8 h-8 rounded-full"
        src={user.profile_image.small}
        alt={user.name}
      />
      <div className="text-white flex flex-col">
        <span className="font-bold text-sm h-4">
          {user.name.length > 20 ? user.name.slice(0, 20) + "..." : user.name}
        </span>
        <span className="text-xs h-4">@{user.username}</span>
      </div>
    </span>
  );
};

export default CardUser;
