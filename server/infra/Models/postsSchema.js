const sequelize = require('sequelize')
const con = require('../database')

const schema = {
    name: 'post',
    schema: {
        title: {
            type: sequelize.TEXT,
            required:true,
            unique: true
        },
        content: {
            type: sequelize.TEXT,
            required: true
        }
    },
    options: {
        tableName: 'post',
        freezeTableName: false,
        timestamps: false,
        schema: 'blog'
    }
}

const Post = con.define(
    schema.name,
    schema.schema,
    schema.options
);

Post.sync()

module.exports = {Post}