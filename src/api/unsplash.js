import axios from "axios";

const KEY = ""; // Add your key here

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${KEY}`,
  },
});
