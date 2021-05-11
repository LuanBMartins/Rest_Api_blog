const express = require('express')
const route = express.Router()
const postsService = require('../service/postsService')

route.get('/posts', async function(req, res) {
    const posts = await postsService.getPostAll()
    res.send(posts)
})
route.get('/posts/:id', async function(req, res) {
    const id = req.params.id
    const posts = await postsService.getPost(id)
    res.send(posts)
})
route.post('/posts', async function(req, res) {
    const post = req.body
    const result = await postsService.savePost(post)
    res.send(result)
})
route.put('/posts/:id', async function(req, res) {
    const id = req.params.id
    const post = req.body
    await postsService.updatePost(id, post)
    res.end()
})
route.delete('/posts/:id', async function(req, res) {
    const id = req.params.id
    await postsService.deletePost(id)
    res.end()
})


module.exports = route




