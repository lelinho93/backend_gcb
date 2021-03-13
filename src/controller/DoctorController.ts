import { Request, Response } from 'express'
import { DoctorBusiness } from '../business/DoctorBusiness'
import { address } from '../model/Address'
import { getAddressByCep } from '../service/AddressManager'

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

            const getAddress: address = await getAddressByCep(cep.replace("-", ""))
            const publicPlace = getAddress.publicPlace
            const complement = getAddress.complement
            const neighborhood = getAddress.neighborhood
            const locality = getAddress.locality
            const uf = getAddress.uf

            await doctorBusiness.create(name, crm, phone, cellphone, cep, publicPlace, complement, neighborhood, locality, uf, specialty)

            res.status(200).send("Profissional cadastrado com sucesso!")
            

        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}