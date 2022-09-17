const express = require('express');
const { mongoConnect } = require('./db/mongo.connection');


mongoConnect();
const app = express();
app.use(express.json());
//app.use("/users", userRoutes);
app.listen(3000, () => console.log("Server is running on port 3000"));