const axios = require('axios')
const postService = require('../service/postsService')
const crypto = require('crypto')
const assert = require('assert')


const generate = function () {
    return crypto.randomBytes(20).toString('hex')
}

let post1 = {}
let post2 = {}
let post3 = {}

describe('Camada de testes', function() {

    this.beforeAll(async function (){
        post1 = await postService.savePost({title: generate(), content: generate()})
        post2 = await postService.savePost({title: generate(), content: generate()})
        post3 = await postService.savePost({title: generate(), content: generate()})
    })
    it('get Route', async function(){
        
        const res = await axios({
            url: 'http://localhost:5000/posts',
            method: 'get'
        })
        const posts = res.data

        assert.ok(3 === posts.length)
    })
    this.afterAll(async function(){
        await postService.deletePost(post1.id)
        await postService.deletePost(post2.id)
        await postService.deletePost(post3.id)
    })
})