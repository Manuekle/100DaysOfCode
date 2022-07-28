import axios from "axios";

export default (route = "") => {
  let url = "";
  if (route == "1") {
    url = "https://api.github.com/users/Manuekle/";
  } else {
    url = "https://api.github.com/users/Manuekle/";
  }

  return axios.create({
    baseURL: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};