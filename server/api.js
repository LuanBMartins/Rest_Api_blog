const express = require('express')
const app = express()
const postsRoute = require('./route/postsRoutes')


app.use(express.json())
app.use('/', postsRoute)


app.listen(5000, ()=> {
    console.log(`app listen to localhost:5000`);
})