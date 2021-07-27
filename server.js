import dotenv from "dotenv";
/**
 * Module dependencies.
 */

import http from "http";
// eslint-disable-next-line import/extensions
import app from "./app.js";

dotenv.config();

/**
 * Get port from environment and store in Express.
 */

// eslint-disable-next-line no-use-before-define
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http
  .createServer(app)
  .listen(port)
  // eslint-disable-next-line no-use-before-define
  .on("error", onError)
  // eslint-disable-next-line no-use-before-define
  .on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  // eslint-disable-next-line no-shadow
  const port = parseInt(val, 10);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    // eslint-disable-next-line no-fallthrough
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
    // eslint-disable-next-line no-fallthrough
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
}
