const express = require("express");
const mentors = require("../usecases/mentores.usecase")

const router = express.Router();

router.get("/", (req, res) => {
    const allMentors = mentors.getAll();
    res.json({
        message: "All mentors", 
        mentores: allMentors
    })
})

router.post("/", (req, res) => {
    const {name, email} = req.body
    mentors.create(
        name,
        email,
        );
    res.json({message: "Mentor added successfully"})
})

router.delete("/:name", (req, res) => {
    const {name} = req.params;
    mentors.remove(name);
    res.json({message: "delete mentor"})
})
module.exports = router;