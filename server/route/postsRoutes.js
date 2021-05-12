const express = require('express')
const route = express.Router()
const postsService = require('../service/postsService')

route.get('/posts', async function(req, res) {
    const posts = await postsService.getPostAll()
    res.json(posts)
})

route.get('/posts/:id', async function(req, res) {
    const id = req.params.id
    const posts = await postsService.getPost(id)
    res.json(posts)
})

route.post('/posts', async function(req, res) {
    const post = req.body
    const result = await postsService.savePost(post)
    res.status(201).json(result)
})

route.put('/posts/:id', async function(req, res) {
    const id = req.params.id
    const post = req.body
    try{
        await postsService.updatePost(id, post)
        res.status(204).end()
    }catch(error){
        res.status(404).end()
    }
})

route.delete('/posts/:id', async function(req, res) {
    const id = req.params.id
    await postsService.deletePost(id)
    res.status(204).end()
})


module.exports = route




