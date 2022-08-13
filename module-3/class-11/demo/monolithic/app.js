const EventEmitter = require("events");
const chance = require("chance");
const Chance = new chance();

// Weather?
// change - {temperature, cloudCover, preciptation}

// Every hour - our weather station measures tmp, clouiness, rain

function makeRecording() {
  return {
    temperature: Chance.floating({ min: 0, max: 100 }),
    precipitation: Chance.floating({ min: 0, max: 5 }),
    clouds: Chance.pick(["Clear", "Partial", "Overcast"]),
  };
}

const weatherStation = new EventEmitter();

weatherStation.addListener("change", (recording) =>
  console.log("Listener 1", recording)
);

// weatherStation.emit("change", { id: 1, ...makeRecording() });

// weatherStation.addListener("change", (recording) =>
//   console.log("Listener 2", recording)
// );

weatherStation.emit("change", { id: 2, ...makeRecording() });

weatherStation.addListener("change", (recording) => {
  console.log("Derek");
  // If it's raining, put on a jacket
  if (recording.precipitation > 0.5) {
    console.log("Derek puts on a jacket");
  }
  // It it's sunny, put on a hat
  if (recording.clouds === "Clear") {
    console.log("Derek puts on a hat");
  }
});

weatherStation.addListener("change", (recording) => {
  console.log("Danny");
  // If it's snowing, go snowboarding
  if (recording.temperature < 32 && recording.precipitation > 0) {
    console.log("Danny goes snowboarding");
  }
});

weatherStation.emit("change", { id: 3, ...makeRecording() });

weatherStation.addListener("change", (recording) => {
  console.log("Hugo");
  if (recording.precipitation >= 2) {
    console.log("Hugo SCUBA Dives");
  }
});

setInterval(() => {
  weatherStation.emit("change", makeRecording());
}, 2000);

weatherStation.addListener("change", (recording) => {
  console.log("Tony");
  if (recording.temperature >= 70 && recording.precipitation < 0.5) {
    console.log("Tony goes for a bike ride");
  }
});
