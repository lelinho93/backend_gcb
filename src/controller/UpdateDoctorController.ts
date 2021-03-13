import { Request, Response } from 'express'
import { UpdateDoctorBusiness } from '../business/UpdateDoctorBusiness'

export class UpdateDoctorController {

    async create(req: Request, res: Response){
    const updateDoctorBusiness = new UpdateDoctorBusiness()

    try {

        const crm: string = req.body.crm as string
        const name: string = req.body.name
        const phone: string = req.body.phone
        const cellphone: string = req.body.cellphone
        const cep: string = req.body.cep
        const specialty: string = req.body.specialty
        
        await updateDoctorBusiness.create(crm, name, phone, cellphone, cep, specialty)

        res.status(200).send("Informações do profissional atualizadas!")

    } catch (error) {
        res.status(400).send({message: error.message})
    }

}
}