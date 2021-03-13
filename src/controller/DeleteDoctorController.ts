import { Request, Response } from 'express'
import { DeleteDoctorBusiness } from '../business/DeleteDoctorBusiness'

export class DeleteDoctorController {

    async create(req: Request, res: Response){
    const updateDoctorBusiness = new DeleteDoctorBusiness()

    try {

        const crm: string = req.headers.crm as string
                
        await updateDoctorBusiness.create(crm)

        res.status(200).send("Profissional deletado com sucesso!")

    } catch (error) {
        res.status(400).send({message: error.message})
    }

}
}