'use client'

import Search from '@/app/ui/search/Search'

import Plants from '@/app/ui/Plants'
import { SetStateAction, useState } from "react"

export default function Home() { 
  const [plants, setPlants] = useState([]);


  return (
    <div className="container mx-auto text-center p-12">
      <h1 className="pb-4">welcome to plant.io</h1>
      <h2 className="p-2">search for plants, see care information, begin your garden</h2>
      <h3 className="p-2">create a profile to begin a collection of plants and stay up to date on watering and sun times</h3>
      <div className="my-6">
        <Search 
        getSearchResults={(plants: SetStateAction<any[]>) => setPlants(plants)}
        />
      </div>
      <Plants plants={plants} />
    </div>
  );
}
