import axios from "axios"; // HTTP 클라이언트

export default class Fakeyoutube {
  constructor() {}

  // 키워드로 비디오 검색
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular(); // 키워드에 따라 검색 또는 인기 비디오 반환
  }

  // 키워드 검색 요청
  async #searchByKeyword() {
    return axios
      .get(`/videos/search.json`) // 검색 API 호출
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId }))); // 비디오 ID 매핑
  }

  // 인기 비디오 요청
  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items); // 인기 비디오 API 호출
  }
}
