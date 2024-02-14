import Image from "next/image";
import Search from '@/app/ui/search/Search'

export default function Home() { 
  return (
    <div className="container mx-auto text-center p-12">
      <div className="mb-4">
        <Search placeholder="plantssssss" />
      </div>
      <h1 className="p-4">welcome to plant.io</h1>
      <h2 className="p-2">search for plants, see care information, begin your garden</h2>
      <h3 className="p-2">create a profile to begin a collection of plants and stay up to date on watering and sun times</h3>
    </div>
  );
}
