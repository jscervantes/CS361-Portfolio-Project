import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto text-center p-12">
      <form>
        <label for="plant-search" class="text-sm mb-2 text-gray-900 sr-only">Search</label>
        <div class="flex justify-center ">
          <input type="text" className="border border-gray-900 rounded mx-2" placeholder="search for plants..."></input>
          <button type="submit" className="block py-2 px-3 text-gray-900 bg-dark-green rounded hover:bg-cream md:hover:bg-transparent md:border-0 md:hover:text-dark-green">Search</button>
        </div> 
      </form>
      <h1 className="p-4">welcome to plant.io</h1>
      <h2 className="p-2">search for plants, see care information, begin your garden</h2>
      <h3 className="p-2">create a profile to begin a collection of plants and stay up to date on watering and sun times</h3>
    </div>
  );
}
