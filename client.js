
const { IP, PORT } = require("./constants");

const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
      console.log(data);
  });

  conn.on("connect", () => {
    conn.write('Name: GLR');
    // conn.write("Move: up"); 
    // conn.write("Move: right"); 
 
    // setTimeout(() => {
    //     conn.write("Move: up");  
    // }, 2000);

    // setTimeout(() => {
    //     conn.write("Move: left");  
    // }, 4000);

    // setInterval(() => {
    //     conn.write("Move: up");  
    // }, 1000)

});


  return conn;
};


module.exports = {
    connect
  };