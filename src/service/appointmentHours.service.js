import AppointmentHoursRepository from '../repository/appointmentHours.repository.js'


async function createAppointmentHours(appointmentHours){
    try {
        return await AppointmentHoursRepository.createAppointmentHours(appointmentHours)
    } catch (error) {
        throw error
    }
}

async function updateAppointmentHours(appointmentHours){
    try {
        return await AppointmentHoursRepository.updateAppointmentHours(appointmentHours)
    } catch (error) {
        throw error
    }
}

async function getAllAppointmentHours(){
    try {
        return await AppointmentHoursRepository.getAllAppointmentHours()
    } catch (error) {
        throw erro
    }
}

async function getAppointmentHours(id){
    try {
        return await AppointmentHoursRepository.getAppointmentHours(id)
    } catch (error) {
        throw error
    }
}

async function getAppointmentHoursByDI(di_id){
    try {
        return await AppointmentHoursRepository.getAppointmentHoursByDI(di_id)
    } catch (error) {
        throw error
    }
}

async function deleteAppointmentHours(id){
    try {
        return await AppointmentHoursRepository.deleteAppointmentHours(id)
    } catch (error) {
        throw error
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