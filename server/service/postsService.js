const postsData = require('../data/postsData')


exports.getPost = function () {
    return postsData.getPost()
}

exports.savePost = function (post) {
    return postsData.savePost(post)
}

exports.deletePost = function (id) {
    return postsData.deletePost(id)
}