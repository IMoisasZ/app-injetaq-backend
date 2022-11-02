import AppointmentHoursService from '../service/appointmentHours.service.js'

async function createAppointmentHours(req, res, next){
    try {
        const appointmentHours = req.body
        if(!appointmentHours.date) return res.status(400).json({error: 'A data deve ser informada!'})      
        if(!appointmentHours.employee_id) return res.status(400).json({error: 'O funcionário deve ser informado!'})
        if(!appointmentHours.workstation_id) return res.status(400).json({error: 'O posto deve ser informado!'})
        if(!appointmentHours.di_id) return res.status(400).json({error: 'A di deve ser informada!'})
        if(!appointmentHours.start) return res.status(400).json({error: 'O inicio deve ser informado'})
        if(!appointmentHours.interval) return res.status(400).json({error: 'O intervalo deve ser informado'})    
        if(!appointmentHours.finish) return res.status(400).json({error: 'O termino deve ser informado'}) 
        if(!appointmentHours.appointment_code_id) return res.status(400).json({error: 'O código do apontamento deve ser informado'})  
        
        res.send(await AppointmentHoursService.createAppointmentHours(appointmentHours))
        logger.info(`POST - /appointment_hours - ${JSON.stringify(appointmentHours)}`)
    } catch (error) {
        next(error)
    }
}

async function updateAppointmentHours(req, res, next){
    try {
        const appointmentHours = req.body
        if(!appointmentHours.date) return res.status(400).json({error: 'A data deve ser informada!'})      
        if(!appointmentHours.employee_id) return res.status(400).json({error: 'O funcionário deve ser informado!'})
        if(!appointmentHours.workstation_id) return res.status(400).json({error: 'O posto deve ser informado!'})
        if(!appointmentHours.di_id) return res.status(400).json({error: 'A di deve ser informada!'})
        if(!appointmentHours.start) return res.status(400).json({error: 'O inicio deve ser informado'})
        if(!appointmentHours.interval) return res.status(400).json({error: 'O intervalo deve ser informado'})    
        if(!appointmentHours.finish) return res.status(400).json({error: 'O termino deve ser informado'}) 
        if(!appointmentHours.appointment_code_id) return res.status(400).json({error: 'O código do apontamento deve ser informado'})  
        
        res.send(await AppointmentHoursService.updateAppointmentHours(appointmentHours))
        logger.info(`PATCH - /appointment_hours - ${JSON.stringify(appointmentHours)}`)
    } catch (error) {
        next(error)
    }
}

async function getAllAppointmentHours(req, res, next){
    try {
        res.send(await AppointmentHoursService.getAllAppointmentHours())
        logger.info(`GET - /appointment_hours - ALL APPOINTMENTS}`)
    } catch (error) {
        next(error)
    }
}

async function getAppointmentHours(req, res ,next){
    try {
        res.send(await AppointmentHoursService.getAppointmentHours(req.params.id))
        logger.info(`GET - /appointment_hours/${req.params.id}}`)
    } catch (error) {
        next(error)
    }
}

async function getAppointmentHoursByDI(req, res, next){
    try {
        res.send(await AppointmentHoursService.getAppointmentHoursByDI(req.params.di))
        logger.info(`GET - /appointment_hours/di/${req.params.di}`)
    } catch (error) {
        next(error)
    }
}

async function deleteAppointmentHours(req, res ,next){
    try {
        res.send(await AppointmentHoursService.deleteAppointmentHours(req.params.id))
        logger.info(`DELETE - /appointment_hours/${req.params.id}}`)
    } catch (error) {
        next(error)
    }
}


export default {
    createAppointmentHours,
    updateAppointmentHours,
    getAllAppointmentHours,
    getAllAppointmentHours,
    getAppointmentHours,
    getAppointmentHoursByDI,
    deleteAppointmentHours
}