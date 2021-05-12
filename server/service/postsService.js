const postsData = require('../data/postsData')


exports.getPostAll = function () {
    return postsData.getPostAll()
}

exports.getPost = async function (id) {
    const post = await postsData.getPost(id)
    if(!post) throw new Error('Post not found')
    return post
}

exports.savePost = function (post) {
    return postsData.savePost(post)
}

exports.updatePost = async function(id, post) {
    await exports.getPost(id)
    return postsData.updatePost(id, post)
}

exports.deletePost = function (id) {
    return postsData.deletePost(id)
}