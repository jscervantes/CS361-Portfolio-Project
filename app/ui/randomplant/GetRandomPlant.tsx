
async function connectToMicroservice( requesterObject, promiseObject, zmqObject ) {

  try {
    await requesterObject.connect("tcp://localhost:5555");
    await requesterObject.send("get_random_plant_details");

    const random_plant = await promiseObject;

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

export async function getRandomPlant() {

  const zmq = require("zeromq");
  const requester = zmq.socket('req');

  const replyPromise = new Promise((resolve, reject) => {
    requester.on("message", function(reply) {
      try {
        const random_plant = JSON.parse(reply);
        resolve(random_plant);
      } catch (error) {
        reject(error);
      } finally {
        requester.close();
      }
    });
  });

  connectToMicroservice(requester, replyPromise, zmq)
}
