
export async function fetchRandomPlantData() {
  const zmq = require("zeromq");
  const requester = zmq.socket('req');

  return new Promise((resolve, reject) => {
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

    requester.connect("tcp://localhost:5555");
    console.log("Sending request...");
    requester.send("get_random_plant_details");
  });
}

export async function GET(req, res) {
  try {
    const random_plant = await fetchRandomPlantData();

    // Wrap the single plant in an array
    const plantArray = Array.isArray(random_plant) ? random_plant : [random_plant];

    return Response.json(plantArray);
  } catch (err) {
    console.error(err);
    return Response.status(500).json({ error: "Internal server error" });
  }
}

