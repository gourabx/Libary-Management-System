const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // ✅ Add this

const PORT = 8001;
require("./config/mySql.js");

const server = express();

// ✅ CORS Middleware
server.use(
  cors({
    origin: ["http://localhost:3000", "http://192.168.1.5:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

server.use(bodyParser.urlencoded({ extended: false, limit: "500MB" }));
server.use(express.json());
server.use(bodyParser.json());

const Route = require("./src/routes/routes.js");
server.use("/", Route);

server.get("/getuser", (req, res) => {
  res.status(200).send({ status: true, msg: "get data success" });
});

server.listen(PORT, () => {
  console.log("server connected", PORT);
});
