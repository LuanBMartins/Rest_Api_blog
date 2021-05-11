const postsData = require('../data/postsData')


exports.getPostAll = function () {
    return postsData.getPostAll()
}

exports.getPost = function (id) {
    return postsData.getPost(id)
}

exports.savePost = function (post) {
    return postsData.savePost(post)
}

exports.updatePost = function(id, post) {
    return postsData.updatePost(id, post)
}

exports.deletePost = function (id) {
    return postsData.deletePost(id)
}