import { useQuery } from "@tanstack/react-query";
import getNewPhotos from "../../api/getNewPhotos";
import type { IPhotoData } from "../../interfaces/new-photos/new-photo.interface";

const useGetNewPhotos = (page: number) => {
  const result = useQuery<IPhotoData[]>({
    queryKey: ["new-photos", page],
    queryFn: () => getNewPhotos(page),
    staleTime: 15 * 60 * 1000, // 15 წუთით ინახავს
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchOnReconnect: false,
  });
  return result;
};

export default useGetNewPhotos;
