
const { connect } = require("./client");
const {setupInput} = require("./play");

console.log("Connecting ...");
connect();

setupInput();

