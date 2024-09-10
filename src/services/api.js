import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async (page = 1) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

export const fetchAllCharacters = async () => {
  let allCharacters = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    try {
      const response = await axios.get(`${API_URL}?page=${page}`);
      const { results, info } = response.data;
      allCharacters = [...allCharacters, ...results];
      totalPages = info.pages;
      page += 1;
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  }

  return allCharacters;
};
