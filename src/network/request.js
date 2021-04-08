import axios from "axios";

export function request(config) {
  return new Promise((resolve, reject) => {
    const Axios = axios.create({
      baseURL: "",
      timeout: 50000,
    });

    Axios(config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
