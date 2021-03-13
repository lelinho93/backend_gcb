import { Request, Response } from 'express'
import { DoctorBusiness } from '../business/DoctorBusiness'

export class DoctorController {

    async create(req: Request, res: Response) {
        const doctorBusiness = new DoctorBusiness()

        try {

            const name: string = req.body.name
            const crm: string = req.body.crm
            const phone: string = req.body.phone
            const cellphone: string = req.body.cellphone
            const cep: string = req.body.cep
            const specialty: string = req.body.specialty

            await doctorBusiness.create(name, crm, phone, cellphone, cep, specialty)

            res.status(200).send("Profissional cadastrado com sucesso!")

        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}