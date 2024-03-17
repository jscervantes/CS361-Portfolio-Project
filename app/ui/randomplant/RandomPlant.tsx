'use client'

import { useEffect, useState } from 'react';

export default function RandomPlant() {
  const [randomPlant, setRandomPlant] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const response = await fetch('/api/random');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setRandomPlant(data);
      } catch (error) {
        setError(error);
      }
    };
    
    fetchPlant();  
}, []);  

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="row text-left mx-auto max-w-[1260px] gap-10">
      {randomPlant.map((plant) => (
        <div key={plant.id} className="flex mb-10 rounded shadow-md hover:shadow-lg">
          <div className="flex flex-col">
            <h3>{plant.common_name}</h3>
            <p>{plant.scientific_name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}