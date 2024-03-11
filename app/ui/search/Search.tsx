'use client';

import { SubmitSearch } from "./Buttons"
import { useState } from 'react'

export default function Search({ getSearchResults }: {getSearchResults: any}) {

  const [query, setQuery] = useState('');

  const handleSearch = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const response = await fetch(`https://perenual.com/api/species-list?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${query}`, {
      "method": "GET",
    })
    const plant = await response.json()
    console.log(plant)

    getSearchResults(plant)
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
            min="1"
            required
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <SubmitSearch />
        </div>
      </form>
    </div>
  )
}