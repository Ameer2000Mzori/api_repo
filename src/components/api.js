import axios from "axios";

const lookimages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ki0nmcV0EG11CHcA8MZIvxJW2FXJWAuw2y3QOCzpc08",
    },
    params: {
      query: "cars",
    },
  });
  console.log(response);
  return response;
};
export default lookimages;
