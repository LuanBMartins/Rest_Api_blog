const schema = require('../infra/schemas/postsSchema')
const Database = require('./../infra/database')


// configurando conexão
async function connect() {
    const con = await Database.connect()
    const model = await Database.defineModel(con, schema)
    return new Database(con, model)
}

// conexão realizada
connect().then(con => {
    const db = con
    
    exports.getPosts = () => {
        return db.read()
    }
})