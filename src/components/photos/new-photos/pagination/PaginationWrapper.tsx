import { useSearchParams } from "react-router-dom";
import PaginationBtn from "./PaginationBtn";

const PaginationWrapper = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));
  const pages = [-5, -3, -2, -1, 0, 1, 2, 3, 5]
    .map((num) => page + num)
    .filter((p) => p > 0);
  return (
    <div className="flex justify-center gap-4 mt-4">
      <PaginationBtn direction="prev" />
      {pages.map((p) => (
        <PaginationBtn key={p} direction={p} />
      ))}
      <PaginationBtn direction="next" />
    </div>
  );
};

export default PaginationWrapper;
