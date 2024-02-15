export default function Plants({ plants }) {
  console.log(plants.data)
  if (plants.data == undefined) {
    console.log("Instance is null or undefined");
  } else {
    
    return (
      <div>
        <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10">
          {plants.data.map(plant => (
            <li key={plant.id} className="flex flex-col">
              <h3>{plant.common_name}</h3>
              <p>{plant.scientific_name}</p>
              <p>{plant.watering}</p>
              <p>{plant.sunlight}</p>
            </li>
          ))};
        </ul>
      </div>
    )
  }
}