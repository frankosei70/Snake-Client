const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // register "connect" handler
  conn.on("connect", () => {
    console.log("Successfully connected to game server");

     // send a message to the server
    conn.write("Name: FRK");
    
  });
  
  

  return conn;
};


module.exports ={connect}