import type { IPhoto } from "../photo/photo.interface";

export interface ISearchPhotos {
  total: number;
  total_pages: number;
  results: IPhoto[];
}
