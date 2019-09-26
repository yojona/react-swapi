const API = process.env.REACT_APP_API_URL;

export default {
  async getFilms() {
    try {
      const req = await fetch(`${API}/films/`);
      const films = await req.json();
      return films.results;
    } catch (e) {
      throw Error('Failed to fetch films')
    }
  },
  async getFilm(id) {
    try {
      const req = await fetch(`${API}/films/${id}`);
      const film = await req.json();
      return film;
    } catch (e) {
      throw Error('Failed to fetch film')
    }
  },
  async getCharacters(characters) {
    const names = []
    try {

      await Promise.all(characters.map(async char => {
        const req = await fetch(`${char}`);
        const data = await req.json();
        return names.push({name: data.name, url: data.url})
      }));

      return names;
    } catch (e) {
      throw Error('Failed to fetch film')
    }
  },
  async getSpecies(species) {
    const names = []
    try {

      await Promise.all(species.map(async specie => {
        const req = await fetch(`${specie}`);
        const data = await req.json();
        return names.push({name: data.name, url: data.url})
      }));

      return names;
    } catch (e) {
      throw Error('Failed to fetch film')
    }
  },
}
