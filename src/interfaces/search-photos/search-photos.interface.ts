import type { ISearchPhotoData } from "./search-photo.interface";

export interface ISearchPhotos {
  total: number;
  total_pages: number;
  results: ISearchPhotoData[];
}
