import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const debouncedSearchTerm = useDebounce<string>(value, 500);
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedSearchTerm) {
      navigate({
        pathname: "/photos/",
        search: `?search=${debouncedSearchTerm.replace(/\s+/g, "-")}`,
      });
    }
  }, [debouncedSearchTerm, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="p-1 focus:outline-none border-b-2 border-white w-1/5"
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
