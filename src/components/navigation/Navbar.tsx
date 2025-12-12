import type React from "react";
import NavigationLink from "./NavigationLink";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <div className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <NavigationLink to="/" children="Home" />
      <SearchInput />
    </div>
  );
};

export default Navbar;
