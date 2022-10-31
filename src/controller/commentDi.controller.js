import CommentDIService from '../service/commentDi.service.js'

async function createCommentDi(req, res, next){
    try {
        const commentDI = req.body
        if(!commentDI.di_id) return res.status(400).json({error: 'A DI deve ser informada!'})
        if(!commentDI.date) return res.send(400).json({error: 'A data deve ser informada!'})
        if(!commentDI.commentDI) return res.status(400).json({error: 'O comnetario deve ser informado!'})

        res.send(await CommentDIService.createCommentDi(commentDI))
        logger.info(`POST - /comment_di - ${JSON.stringify(commentDI)}`)
    } catch (error) {
        next(error)
    }
}

async function updateCommentDi(req, res, next){
    try {
        const commentDI = req.body
        if(!commentDI.di_id) return res.status(400).json({error: 'A DI deve ser informada!'})
        if(!commentDI.date) return res.send(400).json({error: 'A data deve ser informada!'})
        if(!commentDI.commentDI) return res.status(400).json({error: 'O comnetario deve ser informado!'})

        res.send(await CommentDIService.updateCommentDi(commentDI))
        logger.info(`PATCH - /comment_di - ${JSON.stringify(commentDI)}`)
    } catch (error) {
        next(error)
    }
}

async function getAllCommentDi(req, res, next){
    try {
        res.send(await CommentDIService.getAllCommentDi(req.params.di))
        logger.info(`GET - /comment_di/di/${req.params.di}`)
    } catch (error) {
        next(error)
    }
}

async function getCommentDi(req, res, next){
    try {
        res.send(await CommentDIService.getCommentDi(req.params.id))
        logger.info(`GET - /comment_di/id/${req.params.id}`)
    } catch (error) {
        next(error)
    }
}

async function deleteCommentDi(req, res, next){
    try {
        res.send(await CommentDIService.deleteCommentDi(req.params.id))
        logger.info(`DELETE - /comment_di/${req.params.id}`)
    } catch (error) {
        next(error)
    }
}

export default {
    createCommentDi,
    updateCommentDi,
    getAllCommentDi,
    getCommentDi,
    deleteCommentDi
}