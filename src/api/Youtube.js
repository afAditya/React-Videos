import axios from "axios";

const KEY = "AIzaSyBUVAWDrvYnZMF3eiJ0dOnPTp_n99B0Mkk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
