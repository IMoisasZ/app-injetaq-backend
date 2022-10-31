import {Router} from 'express'
import CommentDiController from '../controller/commentDi.controller.js'

const route = Router()

route.post('/', CommentDiController.createCommentDi)
route.patch('/', CommentDiController.updateCommentDi)
route.get('/di/:di', CommentDiController.getAllCommentDi)
route.get('/di/:id', CommentDiController.getCommentDi)
route.delete('/:id', CommentDiController.deleteCommentDi)

export default route