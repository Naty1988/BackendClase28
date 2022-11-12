import express from "express";
import cluster from "cluster";
import os from "os";

const routeRandom = require("./routeRandom");


const app = express();
const cpus = os.cpus();
const PORT = Number(process.argv[2]) || 8081;
const iscluster = process.argv[3] == "cluster";

if (iscluster && cluster.isMaster) {
  cpus.map(() => {
    cluster.fork();
  });
} else {
  app.post("/api/randoms", routeRandom.postRandom);

  app.listen(PORT, () => {
    console.log("Server listening port 8081");
  });
}