import Image from 'next/image'

export default function Plants({ plants }) {

  if (plants.data == undefined) {
    console.log("Instance is null or undefined");
  } else {
    return (
      <div>
        <ul className="row text-left mx-auto max-w-[1260px] gap-10">
          {plants.data.map(plant => (
            <li key={plant.id} className="flex mb-10 rounded shadow-md hover:shadow-lg">
              {/*<Image 
              src={plant.default_image.small_url}
              width={500}
              height={500}
              alt={plant.common_name}
          />*/}
              <div className="flex flex-col">
                <h3>{plant.common_name}</h3>
                <p>{plant.scientific_name}</p>
              </div>
            </li>
          ))};
        </ul>
      </div>
    )
  }
}