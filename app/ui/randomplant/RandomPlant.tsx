import { unstable_noStore as noStore } from 'next/cache';

async function getRandomPlant() {
  noStore();

  const zmq = require("zeromq");
  const requester = zmq.socket('req');

  const replyPromise = new Promise((resolve, reject) => {
    requester.on("message", function(reply) {
      try {
        const random_plant = JSON.parse(reply);
        console.log(random_plant);
        resolve(random_plant);
      } catch (error) {
        reject(error);
      } finally {
        requester.close();
      }
    });
  });

  try {
    await requester.connect("tcp://localhost:5555");
    console.log("Sending request...");
    await requester.send("get_random_plant_details");

    const random_plant = await replyPromise;

    // Wrap the single plant in an array
    const plantArray = Array.isArray(random_plant)
      ? random_plant
      : [random_plant];

    return plantArray;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default async function RandomPlant() {
  noStore();

  try {
    const randomplant = await getRandomPlant();

    console.log(randomplant);

    if (!Array.isArray(randomplant)) {
      console.log("Random plant response is not an array.");
      return <div>Error: Invalid response format</div>;
    }

    if (randomplant.length === 0) {
      console.log("Random plant array is empty.");
      return <div>No random plants available</div>;
    }

    console.log("Yay, go random plant go!");

    return (
      <div className="row text-left mx-auto max-w-[1260px] gap-10">
        {randomplant.map((plant) => (
          <div key={plant.id} className="flex mb-10 rounded shadow-md hover:shadow-lg">
            <div className="flex flex-col">
              <h3>{plant.common_name}</h3>
              <p>{plant.scientific_name}</p>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching random plant:", error);
    return <div>Error fetching random plant</div>;
  }
}