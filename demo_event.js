const events = require("events");
const eventEmitter = new events.EventEmitter();

// Listen for an event
eventEmitter.on("scream", () => {
  console.log("I hear a scream!");
});

// Fire an event
eventEmitter.emit("scream");

// Fire an event
eventEmitter.emit("scream");
