
export async function getRandomPlant() {

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
