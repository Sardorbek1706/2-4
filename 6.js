const events = require('events');

function eventfulEvening() {
  const emitter = new events.EventEmitter();
  emitter.on('dataReceived', (d) => {
    console.log('Received event data:', d);
  });
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => {
    const text = chunk.toString().trim();
    if (text.length > 0) emitter.emit('dataReceived', text);
  });
  console.log('Type something and press enter. Press Ctrl+C to exit.');
}

eventfulEvening();