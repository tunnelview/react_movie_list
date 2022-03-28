import axios from "axios";

const apiEP = "http://www.omdbapi.com/?apikey=fe9d441f&";

export const fetchMovie = (title) => {
  try {
    const response = axios.get(apiEP + "t=" + title);
    return response;
  } catch (error) {
    return error.message;
  }
};
