import { Request, Response } from 'express'
import { SearchDoctorBusiness } from '../business/SearchDoctorBusiness'

export class SearchDoctorController {

    async create(req: Request, res: Response) {
        const searchDoctorBusiness = new SearchDoctorBusiness()

        try {

            const search = req.query.search

            const result = await searchDoctorBusiness.create(search as string)

            res.status(200).send(result)
            
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}