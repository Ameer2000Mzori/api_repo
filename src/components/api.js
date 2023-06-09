import axios from "axios";

const lookimages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ki0nmcV0EG11CHcA8MZIvxJW2FXJWAuw2y3QOCzpc08",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};
export default lookimages;
