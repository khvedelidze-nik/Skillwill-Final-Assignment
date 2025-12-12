export interface IPhotoStatistics {
  id: string;
  downloads: {
    total: number;
    historical: {
      change: number;
      resolution: string;
      quantity: number;
      values: [{ date: string; value: number }];
    };
  };
  views: {
    total: number;
    historical: {
      change: number;
      resolution: string;
      quantity: number;
      values: [{ date: string; value: number }];
    };
  };
}
