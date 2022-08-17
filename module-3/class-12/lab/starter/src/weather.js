const socketIo = require("socket.io");

// Our socket server
const io = socketIo(3500);

const allClients = [];

let forecast = {};

// .on => same thing as addEventListner
// "connection" is a specific event for a new client
io.on("connection", (client) => {
  allClients.push(client);

  // Instrument clients will send us measurements
  client.on("measurement", (data) => {
    forecast = {
      ...forecast,
      ...data,
    };

    console.log("Got a new measurement", data);
  });
});

setInterval(() => {
  console.log("Sending a forecast");
  for (const client of allClients) {
    client.emit("forecast", forecast);
  }
}, 2000);
