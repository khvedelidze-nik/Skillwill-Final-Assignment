import { useNavigate, useSearchParams } from "react-router-dom";

const PaginationBtn = ({
  direction,
}: {
  direction: number | "next" | "prev";
}) => {
  const [searchParams] = useSearchParams();
  // const page = Number(searchParams.get("page")) || 1;
  const currPage = Number(searchParams.get("page")) || 1;
  const navigate = useNavigate();

  const handlePageChange = (direction: number | "next" | "prev") => {
    switch (direction) {
      case "next":
        navigate({ search: `?page=${currPage + 1}` });
        break;
      case "prev":
        navigate({ search: `?page=${Math.max(currPage - 1, 1)}` });
        break;
      default:
        navigate({ search: `?page=${direction}` });
        break;
    }
  };

  return (
    <button
      onClick={() => handlePageChange(direction)}
      className={`bg-gray-800 text-white px-4 py-2 rounded-md ${
        (direction === "prev" && currPage <= 1) || Number(direction) < 1
          ? "hidden"
          : "cursor-pointer"
      } ${currPage === direction ? "red-200" : ""}`}
    >
      {direction === "prev" ? "previous" : direction}
    </button>
  );
};

export default PaginationBtn;
