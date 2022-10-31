import CommentDiRepository from '../repository/commentDi.repository.js'

async function createCommentDi(commentDi){
    try {
        commentDi.comment = commentDi.comment.toUpperCase()
        return await CommentDiRepository.createCommentDi(commentDi)
    } catch (error) {
        throw Error
    }
}

async function updateCommentDi(commentDi){
    try {
        commentDi.comment = commentDi.comment.toUpperCase()
        return await CommentDiRepository.updateCommentDi(commentDi)
    } catch (error) {
        throw error
    }
}

async function getAllCommentDi(di_id){
    try {
        return await CommentDiRepository.getAllCommentDi(di_id)
    } catch (error) {
        throw error
    }
}

async function getCommentDi(id){
    try {
        return await CommentDiRepository.getCommentDi(id)
    } catch (error) {
        
    }
}

async function deleteCommentDi(id){
    try {
        return await CommentDiRepository.deleteCommentDi(id)
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