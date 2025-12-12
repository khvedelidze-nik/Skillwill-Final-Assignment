import $api from "../http";

export default async function getPhoto(id: string) {
  try {
    const response = await $api.get("/photos/", {
      params: { id: id },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching photo:", error);
    throw error;
  }
}
