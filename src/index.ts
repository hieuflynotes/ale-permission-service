import { MongoConnector } from "./database/MongoConnector";
import { initContext } from "./context/Context";
import { apiApplication } from "./application/Express";
var requireDir = require("require-dir");

let port = 3000;

new MongoConnector("mongodb://localhost:27017", "ale", (db) => {
  apiApplication.listen(port);
  console.log(`------- App started successfully with port ${port} ----`);
  initContext(db);
  requireDir("./controller");
});
