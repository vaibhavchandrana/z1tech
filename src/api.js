import axios from "axios";
const api_key = import.meta.env.VITE_API_KEY;
import { backendUrl } from "./backendUrl";

export async function getBreedList() {
  const response = await axios.get(`${backendUrl}/breeds`);
  if (response.status == 200) {
    return response.data;
  } else {
    return [];
  }
}

export async function getCatImages(limit, breed, page_number) {
  const breedParam = breed ? `&breed_ids=${breed}` : "";
  const response = await axios.get(
    `${backendUrl}/images/search?limit=${limit}${breedParam}&api_key=${api_key}&page=${page_number}&has_breeds=1`
  );
  if (response.status === 200) {
    return response.data;
  } else {
    return [];
  }
}
