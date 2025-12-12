import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useNavigate, useLocation } from "react-router-dom";

const SearchInput: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const debouncedSearchTerm = useDebounce<string>(value, 500);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (debouncedSearchTerm) {
      navigate({
        pathname: "/photos/search",
        search: `?search=${debouncedSearchTerm}`,
      });
    }
  }, [debouncedSearchTerm, navigate]);

  useEffect(() => {
    async function checkPath(path: string) {
      if (path === "/") {
        setValue("");
        navigate("/");
      }
    }
    checkPath(location.pathname);
  }, [location.pathname, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="p-1 border-gray-400 focus:outline-none focus:border-white border-b-2 w-1/5"
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
