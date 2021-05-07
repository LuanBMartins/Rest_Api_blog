const express = require('express')
const route = express.Router()
const postsService = require('../service/postsService')

route.get('/posts', async function(req, res) {
    const posts = await postsService.getPost()
    res.send(posts)
})
// route.get('/posts/:id', async function() {

// })
// route.post('/posts', async function() {

// })
// route.put('/posts/:id', async function() {

// })
// route.delete('/posts/:id', async function() {

// })


module.exports = route




