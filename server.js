const express = require("express");
const app = express();
const {Musician} = require("./models/Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO
// app.use(express.static("public"))
/* app.use(express.json())

app.post("/musicians", async function(request, response) {
    try{
        const musician = await Musician.create(request.body)
        response.status(200).send(Musician.findAll())
    }
    catch(error){
        response.send(500).status({error: error.message})
    }
})

app.get("/musicians/:id", async function(request, response) {
    try{
        const musician = await Musician.findByPk(request.params.id)
        response.status(200).send(musician)
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

app.put("/musicians/:id", async function(request, response) {
    try{
        const musician = await Musician.update(request.body, {where: {id: request.params.id}})
        response.status(200).send(musician)
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

app.delete("/musicians/:id", async function(request, response) {
    try{
        const musician = await Musician.destroy({where: {id: request.params.id}})
        response.status(200).send({musician})
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
}) */

app.listen(port, () => {
    sequelize.sync();
    console.log(`Your server is listening on port: http://localhost:${port}/musicians`)
})