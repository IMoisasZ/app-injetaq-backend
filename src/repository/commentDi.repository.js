import CommentDIModel from '../model/commentDI.model.js'
import DIModel from '../model/di.model.js'

async function createCommentDi (commentDi) {
    try {
        const newCommentDi = await CommentDIModel.create(commentDi)
        return await getCommentDi(newCommentDi.id)
    } catch (error) {
        throw error
    }
}

async function updateCommentDi(commentDi){
    try {
        await CommentDIModel.update(commentDi, {
            where: {
                id: commentDi.id
            }
        })
        return await getCommentDi(commentDi.id)
    } catch (error) {
        throw error
    }
}

async function getAllCommentDi(di_id){
    try {
        return await CommentDIModel.findAll({
            where: {
                di_id
            },
            include:[
                {
                    model: DIModel
                }
            ],
        })
    } catch (error) {
        throw error
    }
}

async function getCommentDi(id){
    try {
        return await CommentDIModel.findByPk(id,{
            include:[
                {
                    model: DIModel
                }
            ],
        })
    } catch (error) {
        throw error
    }
}

async function deleteCommentDi(id){
    try {
        return await CommentDIModel.destroy({
            where: id
        })
    } catch (error) {
        throw error
    }
}

export default {
    createCommentDi,
    updateCommentDi,
    getAllCommentDi,
    getCommentDi,
    deleteCommentDi
}