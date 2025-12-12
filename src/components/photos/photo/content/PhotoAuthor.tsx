import React from "react";

interface AuthorProps {
  name: string;
  username: string;
  avatar: string;
}

const PhotoAuthor: React.FC<AuthorProps> = ({ name, username, avatar }) => {
  return (
    <span className="flex gap-1 align-middle cursor-pointer mb-4 mt-4">
      <img className="w-8 h-8 rounded-full" src={avatar} alt={name} />
      <div className="text-gray-900 flex flex-col">
        <span className="font-bold text-sm h-4">
          {name.length > 20 ? name.slice(0, 20) + "..." : name}
        </span>
        <span className="text-xs h-4">@{username}</span>
      </div>
    </span>
  );
};

export default PhotoAuthor;
