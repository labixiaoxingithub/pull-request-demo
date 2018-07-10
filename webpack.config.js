// devlopment mode refer to ./config folder for webpack.dev.js

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;

if (ENV === "build") {
  process.env.NODE_ENV = "prod";
}
switch (process.env.NODE_ENV) {
  case "prod":
  case "production":
    module.exports = require("./config/webpack.prod");
    break;
  case "dev":
  case "development":
  default:
    module.exports = require("./config/webpack.dev");
}
