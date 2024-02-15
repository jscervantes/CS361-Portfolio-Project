'use client';

import { SubmitSearch } from "./Buttons"
import { useState } from 'react'

export const SearchBar = ( {setResults }) => {

  const [query, setQuery] = useState('');

  const fetchData = (value) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((json) => {
      const results = json.filter((user) => {
        return (
          value &&
          user &&
          user.name &&
          user.name.toLowerCase().includes(value)
        )
      });
      setResults(results);
    });
  }

  const handleSearch = (value) => {
    setQuery(value);
    fetchData(value);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="plant-search" className="text-sm mb-2 text-gray-900 sr-only">
          Search
        </label>
        <div className="flex justify-center">
          <input
            type="text"
            value={query}
            className="border border-gray-900 rounded mx-2 pl-2" 
            placeholder="plantssss"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <SubmitSearch />
        </div>
      </form>
    </div>
  )
}