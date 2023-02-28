const express = require("express");
const app = express();
const musicianRouter = require("./routes/musician")
const {sequelize} = require("./db")
const port = 3000;

app.use("/musicians", musicianRouter)

app.listen(port, () => {
    sequelize.sync();
    console.log(`Your server is listening on port: http://localhost:${port}/musicians`)
})