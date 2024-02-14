'use client';

import { SubmitSearch } from "./Buttons"
import { useState } from 'react'
import Link from "next/link"

export default function Search({ placeholder }: {placeholder: string}) {

  {/*  
const data = await fetch(`https://perenual.com/api/species-list?key=${process.env.API_KEY}`)
const res = await data.json() 
*/}

  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://perenual.com/api/species-list?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${query}`, {
      "method": "GET",
    })
    const plants = await response.json()
    console.log(plants)
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
            placeholder={placeholder}
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