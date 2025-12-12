export interface IPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  public_domain: boolean;
  description: string;
  exif: {
    make: string;
    model: string;
    name: string;
    exposure_time: string;
    aperture: string;
    focal_length: string;
    iso: number;
  };
  location: {
    city: string;
    country: string;
    position: {
      latitude: number;
      longitude: number;
    };
  };
  tags: [{ title: string }];
  current_user_collections: [
    {
      id: number;
      title: string;
      published_at: string;
      last_collected_at: string;
      updated_at: string;
      cover_photo: null | string;
      user: null | string;
    }
  ];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    portfolio_url: string;
    bio: string;
    location: string;
    total_collections: number;
    links: {
      self: string;
      html: string;
      photos: string;
      portfolio: string;
    };
  };
}
