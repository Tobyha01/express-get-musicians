const express = require ("express")
/* const {sequleize} = require ("../db") */
const router = express.Router()
const {Musician} = require("../models/index")
const seedMusician = require("../seedData")
const {check, validationResult} = require("express-validator")

router.use(express.json())

router.post("/", [check("name").trim().not().isEmpty(), check("instrument").trim().not().isEmpty()] ,async function(request, response) {
    try{
        const errors = validationResult(request)
        if(!errors.isEmpty()){
            response.send(400).status(errors)
        } 
        else{
            await Musician.create(request.body)
            response.status(200).send(await Musician.findAll())
        }
    }
    catch(error){
        response.send(500).status({error: error.message})
    }
})

router.get("/:id", async function(request, response) {
    try{
        const musician = await Musician.findByPk(request.params.id)
        response.status(200).send(musician)
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

router.put("/:id", async function(request, response) {
    try{
        const musician = await Musician.update(request.body, {where: {id: request.params.id}})
        response.status(200).send(musician)
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

router.delete("/:id", async function(request, response) {
    try{
        const musician = await Musician.destroy({where: {id: request.params.id}})
        response.status(200).send({musician})
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

module.exports = router