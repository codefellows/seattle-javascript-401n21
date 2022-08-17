const { io } = require("socket.io-client");
const Chance = new require("chance")();

// Create a connection to the server
const socket = io("ws://localhost:3500");

function sendTemperature() {
  // Emit any events we want
  socket.emit("measurement", {
    temperature: Chance.natural({ min: 0, max: 100 }),
  });

  setTimeout(sendTemperature, Chance.natural({ min: 5000, max: 10000 }));
}

sendTemperature();

// setTimeout(() => {
//   // When we're done, disconnect!
//   socket.disconnect();
// }, 1000);
