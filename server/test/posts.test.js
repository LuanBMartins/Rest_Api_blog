const axios = require('axios')
const postService = require('../service/postsService')
const crypto = require('crypto')
const assert = require('assert')


const generate = function () {
    return crypto.randomBytes(20).toString('hex')
}

const request = function (url, method, data) {
    return axios({ url, method, data, validateStatus: false})
}


describe('Camada de testes', function() {
    let post1, post2, post3

    this.beforeAll(async function (){
        post1 = await postService.savePost({title: generate(), content: generate()})
        post2 = await postService.savePost({title: generate(), content: generate()})
        post3 = await postService.savePost({title: generate(), content: generate()})
    })

    it('Should get a post', async function(){
        const res = await request('http://localhost:5000/posts', 'get')
        const post = res.data
        assert.strictEqual(res.status, 200)
        assert.strictEqual(post.length, 3)
    })

    it('Should save a post', async function(){
        const data = {title: generate(), content: generate()}
        const res = await request('http://localhost:5000/posts', 'post', data)
        const post = res.data
        assert.strictEqual(res.status, 201)
        assert.strictEqual(post.title, data.title)
        assert.strictEqual(post.content, data.content)
        await postService.deletePost(post.id)
    })

    it('Should update a post', async function(){
        post1.title = generate();
        post1.content = generate();
        const res = await request(`http://localhost:5000/posts/${post1.id}`, 'put', post1);
        assert.strictEqual(res.status, 204)
        const updatePost = await postService.getPost(post1.id)
        assert.strictEqual(updatePost.title, post1.title)
        assert.strictEqual(updatePost.content, post1.content)
    })

    it('Should not update a post', async function(){
        const res = await request(`http://localhost:5000/posts/${0}`, 'put', post1)
        assert.strictEqual(res.status, 404)
    })

    it('Should delete a post', async function(){
        const post = await postService.savePost({title: generate(), content: generate()})
        const res = await request(`http://localhost:5000/posts/${post.id}`, 'delete')
        assert.strictEqual(res.status, 204)
    })

    this.afterAll(async function(){
        await postService.deletePost(post1.id)
        await postService.deletePost(post2.id)
        await postService.deletePost(post3.id)
    })
})