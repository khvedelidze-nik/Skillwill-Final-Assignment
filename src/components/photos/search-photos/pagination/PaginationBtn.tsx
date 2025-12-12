import type React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface PaginationBtnProps {
  direction: number | "next" | "prev";
  totalPages: number;
}

const PaginationBtn: React.FC<PaginationBtnProps> = ({
  direction,
  totalPages,
}) => {
  const [searchParams] = useSearchParams();
  const currPage = Number(searchParams.get("page")) || 1;
  const searchTerm = searchParams.get("search") || "";
  const navigate = useNavigate();

  const handlePageChange = (direction: number | "next" | "prev") => {
    switch (direction) {
      case "next":
        navigate({
          search: `?search=${searchTerm}&page=${Math.min(
            currPage + 1,
            totalPages
          )}`,
        });
        break;
      case "prev":
        navigate({
          search: `?search=${searchTerm}&page=${Math.max(currPage - 1, 1)}`,
        });
        break;
      default:
        navigate({ search: `?search=${searchTerm}&page=${direction}` });
        break;
    }
  };

  return (
    <button
      onClick={() => handlePageChange(direction)}
      className={`bg-gray-800 text-white px-4 py-2 ${
        currPage === Number(direction) ? "text-yellow-300 font-bold" : null
      } rounded-md ${
        (direction === "prev" && currPage <= 1) || Number(direction) < 1
          ? "hidden"
          : "cursor-pointer"
      }`}
    >
      {direction === "prev" ? "previous" : direction}
    </button>
  );
};

export default PaginationBtn;
