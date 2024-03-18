import Image from 'next/image'

export default function Plants({ plants }) {

  if (!plants || !plants.data) {
    console.log("Instance is null or undefined");
    return null;
  }

  console.log(plants)

  return (
    <div>
      <ul className="row text-left mx-auto max-w-[1260px] gap-10">
        {plants.data.map(plant => (
          <li key={plant.id} className="flex mb-10 rounded shadow-md hover:shadow-lg">
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
              <p>{plant.cycle}</p>
            </div>
          </li>
        ))};
      </ul>
    </div>
  )
}