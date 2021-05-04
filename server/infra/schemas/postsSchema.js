const sequelize = require('sequelize')

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


module.exports = schema