import Sequelize from 'sequelize'
import DBCONNECTION from '../connection/db.connection.js'
import DIModel from './di.model.js'
import UserModel from './user.model.js'


const CommentDI = DBCONNECTION.define('comment_di',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    di_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{tableName: 'comment_di'})

export default CommentDI

CommentDI.sync()

CommentDI.belongsTo(DIModel, {foreignKey: 'di_id'})
CommentDI.belongsTo(UserModel, {foreignKey: 'user_id'})