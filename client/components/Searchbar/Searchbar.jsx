import { useState } from 'react';
import './Searchbar.css';

const Searchbar = () => {
  const [searchParam, setSearchParam] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ${searchParam}`);
  };

  return (
    <div className="searchbar">
      <div className="searchBarContainer">
        <input
          type="text"
          placeholder="Search for your favourite dish..."
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <button className="primaryButton" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
