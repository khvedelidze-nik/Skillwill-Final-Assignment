import { useQuery } from "@tanstack/react-query";
import getNewPhotos from "../../api/getNewPhotos";
import type { IPhoto } from "../../interfaces/photo/photo.interface";

const useGetNewPhotos = (page: number) => {
  const result = useQuery<IPhoto[]>({
    queryKey: ["new-photos", page],
    queryFn: () => getNewPhotos(page),
    staleTime: 20 * 60 * 1000, // 20 წუთით ინახავს
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchOnReconnect: false,
  });
  return result;
};

export default useGetNewPhotos;
