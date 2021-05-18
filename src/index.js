const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const connectDB = require("./config/mongo-connection");

const route = require("./routes");
// const db = require("./config/mongo-connection");
// db.connectDB();
connectDB();

app.use("/static", express.static(path.resolve(__dirname, "./asset")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", route);

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});