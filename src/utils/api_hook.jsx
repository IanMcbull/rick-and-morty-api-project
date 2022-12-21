const baseUrl = "https://rickandmortyapi.com/api";
const fetchCharacters = async (page) => {
  const res = await fetch(`${baseUrl}/character/?page=${page}`);
  const results = await res.json();
  return results;
};

const fetchCharacter = async (id) => {
  const res = await fetch(`${baseUrl}/character/${id}`);
  const results = await res.json();
  return results;
};

export { fetchCharacter, fetchCharacters };
