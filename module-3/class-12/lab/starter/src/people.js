const { io } = require("socket.io-client");

// Create a connection to the server
const socket = io("ws://localhost:3500");

socket.on("forecast", (forecast) => {
  console.log("Forecaset is", forecast);
});
