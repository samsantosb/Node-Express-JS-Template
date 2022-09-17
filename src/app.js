const express = require('express');
const { carRoutes } = require('./cars/routes/car.routes');
const { mongoConnect } = require('./db/mongo.connection');


mongoConnect();
const app = express();
app.use(express.json());
app.use("/cars", carRoutes);
app.listen(3000, () => console.log("Server is running on port 3000"));
