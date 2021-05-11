const {Post} = require('../infra/Models/postsSchema')

exports.getPostAll = () => {
    return Post.findAll()
}

exports.getPost = (id) => {
    return Post.findOne({where: {id: id}, raw: true})
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