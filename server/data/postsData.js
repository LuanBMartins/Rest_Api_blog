const {Post} = require('../infra/Models/postsSchema')


exports.getPost = () => {
    return Post.findAll()
}

exports.savePost = async (post) => {
    const {dataValues} = await Post.create(post)
    return dataValues 
}

exports.updatePost = (id, post) => {
    return Post.update(post, {where: {id: id}})
}

exports.deletePost = (id) => {
    return Post.destroy({where: {id: id}})
}