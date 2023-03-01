const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

module.exports = {
  VERSION: require('./package.json').version,
  SESSION_ID:process.env.SESSION_ID || " ",
  BRANCH: "master",
  PACKNAME: process.env.PACKNAME || "WHATS-KRIZ-AI",
  AUTHOR: process.env.AUTHOR || "TEAM-TOXIC",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
};
