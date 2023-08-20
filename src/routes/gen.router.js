const express = require("express");
const generations = require("../usecases/gen.usecase")

const router = express.Router();

router.get("/", (req, res) => {
    const allGenerations = generations.getAll();
    res.json({
        message: "All generations", 
        generation: allGenerations
    })
})

router.post("/", (req, res) => {
    const {program, generation} = req.body
    generations.create(
        program, 
        generation,
        );
    res.json({message: "Generation added successfully"})
})

router.delete("/:numberOfGeneration", (req, res) => {
    const {numberOfGeneration} = req.params;
    generations.remove(numberOfGeneration);
    res.json({message: "delete generation"})
})
module.exports = router;