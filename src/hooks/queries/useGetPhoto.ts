import { useQuery } from "@tanstack/react-query";
import getPhoto from "../../api/getPhoto";
import type { IPhoto } from "../../interfaces/photo/photo.interface";

const useGetPhoto = (id: string) => {
  const result = useQuery<IPhoto>({
    queryKey: ["photo", id],
    queryFn: () => getPhoto(id),
    staleTime: 20 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchOnReconnect: false,
  });
  return result;
};

export default useGetPhoto;
