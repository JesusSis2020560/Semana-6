import React, { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import { useCharacters } from '../hooks/useCharacters';

const Home = () => {
  const [query, setQuery] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [page, setPage] = useState(1);

  const { characters, species, totalPages } = useCharacters(page, query, selectedSpecies);

  return (
    <div>
      <SearchBar query={query} onSearch={setQuery} />
      <FilterBar species={species} selectedSpecies={selectedSpecies} onFilter={setSelectedSpecies} />
      <CharacterList characters={characters} />
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Home;
