import { NextResponse } from "next/server";

async function fetchPlants(query) {
  const response = await fetch(`https://perenual.com/api/species-list?key=${process.env.API_KEY}&q=${query}`, {
    "method": "GET",
  })
  
  const plants = await response.json();
  return plants
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log(request.url)
  const query = searchParams.get('query')
  const plants = await fetchPlants(query)
}