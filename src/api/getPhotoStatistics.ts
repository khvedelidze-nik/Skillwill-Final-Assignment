import $api from "../http";

export default async function getPhotoStatistics(id: string) {
  try {
    const response = await $api.get(`/photos/${id}/statistics`);
    return response.data;
  } catch (error) {
    console.error("Error fetching photo:", error);
    throw error;
  }
}
