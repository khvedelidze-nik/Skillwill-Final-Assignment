import { useQuery } from "@tanstack/react-query";
import getPhotoStatistics from "../../api/getPhotoStatistics";
import type { IPhotoStatistics } from "../../interfaces/photo/statistics.interface";

const useGetPhotoStatistics = (id: string) => {
  const result = useQuery<IPhotoStatistics>({
    queryKey: ["photo-statistics", id],
    queryFn: () => getPhotoStatistics(id),
    staleTime: 2 * 60 * 1000, // 2 წუთით ინახავს ქეშს
  });
  return result;
};

export default useGetPhotoStatistics;
