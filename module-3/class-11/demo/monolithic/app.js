const EventEmitter = require("events");
const chance = require("chance");
const Chance = new chance();

// The weatherStation is an EventEmitter
const weatherStation = new EventEmitter();

// Weather?
// change - {temperature, cloudCover, preciptation}

// Every hour - our weather station measures tmp, clouiness, rain

function makeRecording() {
  // A utility that uses Chance to make a payload for the weather change event
  return {
    temperature: Chance.floating({ min: 0, max: 100 }),
    precipitation: Chance.floating({ min: 0, max: 5 }),
    clouds: Chance.pickone(["Clear", "Partial", "Overcast"]),
  };
}

// The first listener prints the recorded station data, the payload.
weatherStation.addListener("change", (recording) =>
  console.log("Listener 1", recording)
);

weatherStation.emit("change", { id: 2, ...makeRecording() });

// Derek is an event listener (or handler)
const derek = (recording) => {
  console.log("Derek");

  // If it's raining, put on a jacket
  if (recording.precipitation > 0.5) {
    console.log("Derek puts on a jacket");
  }
  // It it's sunny, put on a hat
  if (recording.clouds === "Clear") {
    console.log("Derek puts on a hat");
  }
};

// When the weather changes, tell Derek
weatherStation.addListener("change", derek);

// Danny is also a listener
const danny = (recording) => {
  console.log("Danny");
  // If it's snowing, go snowboarding
  if (recording.temperature < 32 && recording.precipitation > 0) {
    console.log("Danny goes snowboarding");
  }
};

weatherStation.addListener("change", danny);

// Send a weather change event to the listeners we have so far
weatherStation.emit("change", { id: 3, ...makeRecording() });

// Hugo is a listener!
const hugo = (recording) => {
  console.log("Hugo");
  if (recording.precipitation >= 2) {
    console.log("Hugo SCUBA Dives");
  }

  if (recording.temperature <= 40) {
    // But Hugo stops listening when the weather gets too bad
    weatherStation.removeListener("change", hugo);
  }
};

weatherStation.addListener("change", hugo);

const tony = (recording) => {
  console.log("Tony");
  if (recording.temperature >= 70 && recording.precipitation < 0.5) {
    console.log("Tony goes for a bike ride");
  }
};

weatherStation.addListener("change", tony);

// Every 2000 ms (that is, 2 seconds), tell everyone about the latest weather
setInterval(() => {
  weatherStation.emit("change", makeRecording());
}, 2000);
