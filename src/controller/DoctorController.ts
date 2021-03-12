import { Request, Response } from 'express'
import { DoctorBusiness } from '../business/DoctorBusiness'

export class DoctorController {

    async create(req: Request, res: Response) {
        const doctorBusiness = new DoctorBusiness()

        try {

            const name: string = req.body.name
            const crm: number = req.body.crm
            const phone: number = req.body.phone
            const cellphone: number = req.body.cellphone
            const cep: number = req.body.cellphone
            const specialty: string = req.body.specialty

        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}