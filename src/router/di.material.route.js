import { Router } from 'express'
import DIMaterialController from '../controller/di.material.controller.js'

const route = Router()

route.post('/', DIMaterialController.includeDIMaterial)
route.patch('/', DIMaterialController.updateDIMaterial)
route.get('/material/:di_id', DIMaterialController.getAllDIMaterial)
route.get('/sum/:di_id', DIMaterialController.sumTotal)
route.get('/material/sum/:di_id', DIMaterialController.sumByMaterial)
route.get('/:id', DIMaterialController.getDIMaterial)
route.delete('/:id', DIMaterialController.deleteDIMaterial)

export default route
