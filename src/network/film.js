import { request } from "./request";

export function hotFilm(limit, offset, ct) {
  return request({
    url: "/mmdb/movie/v2/list/hot.json",
    params: {
      limit,
      offset,
      ct,
    },
  });
}
export function comingFilmV1(limit, offset, ci) {
  return request({
    url: "/mmdb/movie/v1/list/wish/order/coming.json",
    params: {
      limit,
      offset,
      ci,
    },
  });
}

export function comingFilmV2(limit, ci) {
  return request({
    url: "/mmdb/movie/v2/list/rt/order/coming.json",
    params: {
      limit,
      ci,
    },
  });
}
