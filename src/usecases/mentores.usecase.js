const db = require("../lib/db");

function create(name, email) {
    const newMentor = {
        name,
        email,
    }
    const data = db.getData();
    data.mentors.push(newMentor);
    db.updateData(data);
}

function remove(name) {
    const data = db.getData();
    const newMentorList = data.mentors.filter((mentor) => mentor.name !== name);
    data.mentors = newMentorList;
    db.updateData(data);
}

function getAll() {
    const data = db.getData();
    return data.mentors;
}

module.exports = {
    create, 
    remove,
    getAll
}