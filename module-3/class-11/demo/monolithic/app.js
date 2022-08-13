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

weatherStation.addListener("change", (recording) =>
  console.log("Listener 1", recording)
);

weatherStation.emit("change", { id: 2, ...makeRecording() });

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

weatherStation.addListener("change", derek);

const danny = (recording) => {
  console.log("Danny");
  // If it's snowing, go snowboarding
  if (recording.temperature < 32 && recording.precipitation > 0) {
    console.log("Danny goes snowboarding");
  }
};

weatherStation.addListener("change", danny);

weatherStation.emit("change", { id: 3, ...makeRecording() });

const hugo = (recording) => {
  console.log("Hugo");
  if (recording.precipitation >= 2) {
    console.log("Hugo SCUBA Dives");
  }

  if (recording.temperature <= 40) {
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

setInterval(() => {
  weatherStation.emit("change", makeRecording());
}, 2000);
