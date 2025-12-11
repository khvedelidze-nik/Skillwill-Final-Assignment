import $axios from "../http";

const getPhotos = async (page?: number) => {
  try {
    const response = await $axios.get("/photos", {
      params: { page: page || 1, per_page: 20 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};
export default getPhotos;
