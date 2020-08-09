export default class AnimeService {
  _apiBase = "https://shikimori.org/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllAnimes(sortBy = "popularity") {
    const res = await this.getResource(`/animes?limit=50&order=${sortBy}`);
    return res;
  }

  getAnime(id) {
    return this.getResource(`/animes/${id}`);
  }

  async getAllGenres() {
    const res = await this.getResource(`/genres`);
    return res;
  }
}
