const express = require("express");
const bodyParser = require("body-parser");
const moongose = require("mongoose");
const connectdB = require("./src/db/db");
const routes = require("./src/routes/crmRoutes");

const app = express();
const PORT = 3000;
// mongoose connection
// moongose.Promise = global.Promise;
// moongose.connect("mongodb://localhost:27017/CRMdb", {
//   useNewUrlParser: true,
// });
connectdB();
//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.get("/", (req, res) => {
  res.send(`Node and express server is runing on port ${PORT}`);
});
app.listen(PORT, () => {
  console.log(`your server is running ${PORT}`);
});
