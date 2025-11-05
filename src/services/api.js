const BASE_URL = "https://rickandmortyapi.com/api";

export async function fetchCharacters(name = "") {
  try {
    const response = await fetch(`${BASE_URL}/character?name=${name}`);
    const data = await response.json();

    return data.results ?? [];
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    return [];
  }
}

export async function fetchCharacterById(id) {
  try {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar personagem:", error);
    return null;
  }
}
