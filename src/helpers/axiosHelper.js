import axios from "axios";

const apiEP = "http://www.omdbapi.com/?apikey=[yourkey]&";

const fetchMovie = (title) => {
  try {
    const response = axios.get(apiEP + "t=" + title);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
