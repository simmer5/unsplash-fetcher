import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 0673268b68982726f77be69a7b3e8470f8970871b2d61248f65467e8717c7f68"
  }
});
