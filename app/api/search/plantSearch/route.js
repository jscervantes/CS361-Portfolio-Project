import { NextResponse } from "next/server";

async function fetchPlants() {
  const response = await fetch(`https://perenual.com/api/species-list?key=${process.env.NEXT.PUBLIC_API_KEY}`, {
    "method": "GET",
  })
  
  const plants = await response.json();
  return plants;
}

export async function GET(request) {
  const plants = await fetchPlants();
  const { searchParams } = new URL(request.url);
  console.log(request.url);
  console.log("im gay")
  const query = searchParams.get('query');
  
  const filteredPlants = plants.data.filter((plant) => {
    return plant.common_name.toLowerCase().includes(query.toLowerCase())
  })

  return NextResponse.json(filteredPlants)
}