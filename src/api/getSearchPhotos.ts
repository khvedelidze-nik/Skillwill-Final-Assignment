import $api from "../http";

const getSearchPhotos = async (searchTerm: string, page?: number) => {
  try {
    const response = await $api.get("/search/photos", {
      params: { query: searchTerm, page: page || 1, per_page: 20 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};

export default getSearchPhotos;
