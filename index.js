const server= require("./src/server")
const db = require("./src/lib/db")
const PORT = 8080;

db.createIfNotExists();
server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})