const express = require("express");
const koders = require("../usecases/koders.usecase")

const router = express.Router();

router.get("/", (req, res) => {
    const allKoders = koders.getAll();
    res.json({
        message: "All koders", 
        koders: allKoders
    })
})

router.post("/", (req, res) => {
    const {name, email, program, generation} = req.body
    koders.create(
        name,
        email,
        program,
        generation
        );
    res.json({message: "koder added successfully"})
})

router.delete("/:name", (req, res) => {
    const {name} = req.params;
    koders.remove(name);
    res.json({message: "delete koder"})
})
module.exports = router;