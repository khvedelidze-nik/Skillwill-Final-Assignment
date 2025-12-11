import { useNavigate, useSearchParams } from "react-router-dom";

const PageBtn = ({ direction }: { direction: "next" | "prev" }) => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const navigate = useNavigate();

  const handlePageChange = (direction: "next" | "prev") => {
    switch (direction) {
      case "next":
        navigate({ search: `?page=${page + 1}` });
        break;
      case "prev":
        navigate({ search: `?page=${Math.max(page - 1, 1)}` });
        break;
    }
  };

  return (
    <button
      onClick={() => handlePageChange(direction)}
      className={`bg-gray-800 text-white px-4 py-2 rounded-md ${
        direction !== "next" && page <= 1
          ? "cursor-not-allowed"
          : "cursor-pointer"
      }`}
    >
      {direction === "next" ? "Next" : "Previous"}
    </button>
  );
};

export default PageBtn;
