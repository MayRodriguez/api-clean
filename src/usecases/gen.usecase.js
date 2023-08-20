const db = require("../lib/db");

function create(program, generation) {
    const newGeneration = {
        program,
        generation,
    }
    const data = db.getData();
    data.generations.push(newGeneration);
    db.updateData(data);
}

function remove(generation) {
    const data = db.getData();
    const newGenerationList = data.generations.filter((gen) => gen.generation !== generation);
    data.generations = newGenerationList;
    db.updateData(data);
}

function getAll() {
    const data = db.getData();
    return data.generations;
}

module.exports = {
    create, 
    remove,
    getAll
}