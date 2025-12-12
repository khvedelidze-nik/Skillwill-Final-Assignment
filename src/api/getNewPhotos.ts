import $api from "../http";

export default async function getNewPhotos(page: number) {
  try {
    const response = await $api.get("/photos", {
      params: { page: page || 1, per_page: 20 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
}
