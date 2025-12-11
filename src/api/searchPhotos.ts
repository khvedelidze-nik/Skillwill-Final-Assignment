import $axios from "../http";

const searchPhotos = async (searchTerm: string) => {
  try {
    const response = await $axios.get("/search/photos", {
      params: { query: searchTerm, per_page: 20 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};

export default searchPhotos;
