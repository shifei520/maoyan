import { request } from "./request";
// i_url, ci;
export function getDetailData(i_url, ci) {
  return request({
    url: "/mmdb/movie/v5/" + i_url + ".json",
    params: {
      ci,
    },
  });
}
//演员/配音信息
export function getCelebrities(id) {
  return request({
    url: "/mmdb/v7/movie/" + id + "/celebrities.json",
  });
}
//票房排名信息
export function mbox(id) {
  return request({
    url: "/mmdb/movie/" + id + "/feature/v1/mbox.json",
  });
}
//评论信息
export function getComments(id, limit) {
  return request({
    url: "/mmdb/comments/movie/" + id + ".json",
    params: {
      limit,
    },
  });
}
