import React from 'react';

const FilterBar = ({ species, selectedSpecies, onFilter }) => {
  return (
    <select value={selectedSpecies} onChange={(e) => onFilter(e.target.value)}>
      <option value="">Todas las especies</option>
      {species.map((specie, index) => (
        <option key={index} value={specie}>
          {specie}
        </option>
      ))}
    </select>
  );
};

export default FilterBar;
