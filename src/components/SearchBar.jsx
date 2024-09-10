import React from 'react';

const SearchBar = ({ query, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Buscar personajes..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
