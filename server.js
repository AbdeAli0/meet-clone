require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
const Routes = require("./app/routes");

app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  Routes,
]);

const io = (module.exports.io = require("socket.io")(server));
const socketManager = require("./app/socketManager");
io.on("connection", socketManager);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000'​, 'http://localhost:8080'​, 'https://shrouded-journey-38552.heroku...​]
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))