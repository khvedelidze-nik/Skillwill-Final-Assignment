import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  url: string;
}

const DownloadButton: React.FC<ButtonProps> = ({ url }) => {
  return (
    <Link
      to={url}
      download="downloaded-image"
      className="font-serif text-2xl font-bold w-8 h-8 text-center place-content-center rounded-md absolute z-50 bg-white text-black bottom-4 right-4"
    >
      ⇓
    </Link>
  );
};

export default DownloadButton;
