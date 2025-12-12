import { useSearchParams } from "react-router-dom";
import PaginationBtn from "./PaginationBtn";
import type React from "react";

interface PaginationWrapperProps {
  totalPages: number;
}

const PaginationWrapper: React.FC<PaginationWrapperProps> = ({
  totalPages,
}) => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const pages = [-8, -5, -3, -1, 0, 1, 3, 5, 8]
    .map((num) => page + num)
    .filter((p) => p > 0 && p <= totalPages);
  return (
    <div className="flex justify-center gap-4 mt-4">
      <PaginationBtn direction="prev" totalPages={totalPages} />
      {pages.map((p) => (
        <PaginationBtn key={p} direction={p} totalPages={totalPages} />
      ))}
      <PaginationBtn direction="next" totalPages={totalPages} />
    </div>
  );
};

export default PaginationWrapper;
