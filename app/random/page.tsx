"use client"

import RandomPlant from '@/app/ui/randomplant/RandomPlant'

export default function Random() {
  return (
    <div className="container mx-auto text-center p-12">
      <h2 className="p-4">generate a random plant.</h2>
      <p>service by Luke Von Gizycki</p>
      <div className="my-6">
        <RandomPlant />
      </div>
    </div>
  );
}