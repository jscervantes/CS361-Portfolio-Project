'use client'

import Image from 'next/image'
import { useState } from 'react';

export default function RandomPlant() {
  const [randomPlant, setRandomPlant] = useState([]);
  const [showPlant, setShowPlant] = useState(false);
  const [error, setError] = useState(null);

  function handleRandomPlant() {
    const fetchPlant = async () => {
      try {
        const response = await fetch('/api/random');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setRandomPlant(data);
        setShowPlant(true);
      } catch (error) {
        setError(error);
      }
    };
    
    fetchPlant(); 
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button 
        className="
          py-2 px-3 text-gray-900 bg-dark-green rounded hover:bg-accent-green  
          md:border-0 md:hover:text-grey-700
          " 
        onClick={handleRandomPlant}
        >
        Random Plant
      </button>
      {
      showPlant && 
      <div className="row text-left mx-auto mt-8 max-w-[1260px] gap-10">
      {randomPlant.map((plant) => (
        <div key={plant.id} className="flex mb-10 rounded shadow-md hover:shadow-lg">
          {plant.default_image ? (
            <Image 
            className="rounded-xl m-8"
              src={plant.default_image.small_url}
              width={200}
              height={200}
              alt={plant.common_name}
            />
          ) : (
            <div className="m-16">
              No image available
            </div>
          )}
          <div className="flex flex-col m-8">
            <h3>{plant.common_name}</h3>
            <p>{plant.scientific_name}</p>
            <p>{plant.description}</p>
          </div>
        </div>
      ))}
    </div> 
      }

    </div>
  );
}