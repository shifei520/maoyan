import { request } from "./request";

export function cityPicker() {
  return request({
    url: "../cities.json",
  });
}
