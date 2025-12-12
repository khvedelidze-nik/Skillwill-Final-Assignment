import { useQuery } from "@tanstack/react-query";
import type { ISearchPhotos } from "../../interfaces/search-photos/search-photos.interface";
import getSearchPhotos from "../../api/getSearchPhotos";

const useGetSearchPhotos = (searchTerm: string, page: number) => {
  const result = useQuery<ISearchPhotos>({
    queryKey: ["search-photo", searchTerm, page],
    queryFn: () => getSearchPhotos(searchTerm, page),
    staleTime: 20 * 60 * 1000, // 20 წუთით ინახავს
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchOnReconnect: false,
  });
  return result;
};

export default useGetSearchPhotos;
