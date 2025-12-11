import { useEffect, useState } from "react";
import type { IPictureData } from "../../interfaces/IPicture/IPictureData";
import getPhotos from "../../api/getPhotos";
import PhotoCard from "./PhotoCard";
import { useSearchParams } from "react-router-dom";
import PageBtn from "./PageBtn";

const PhotosWrapper = () => {
  const [photos, setPhotos] = useState<IPictureData[]>([]);

  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    getPhotos(page).then((res) => setPhotos([...res]));
  }, [page]);

  if (photos.length === 0) {
    return <div>Loading photos...</div>;
  }

  return (
    <div className="p-4 min-h-20">
      <h2 className="text-2xl font-bold mb-4">
        New Photos {page > 1 && `- Page ${page}`}
      </h2>
      <div className="relative columns-1 sm:columns-2 lg:columns-3">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <PageBtn direction="prev" />
        <PageBtn direction="next" />
      </div>
    </div>
  );
};

export default PhotosWrapper;
