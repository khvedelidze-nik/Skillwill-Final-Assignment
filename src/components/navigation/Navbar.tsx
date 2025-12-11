import NavigationLink from "./NavigationLink";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <div className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <NavigationLink to="/" children="Home" />
      <SearchInput />
    </div>
  );
};

export default Navbar;
