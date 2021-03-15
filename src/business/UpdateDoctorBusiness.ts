import { UpdateDoctorDataBase } from '../data/UpdateDoctorDatabase'

export class UpdateDoctorBusiness {

    async create(crm: any, name?: any, phone?: any, cellphone?: any, cep?: any, specialty?: any): Promise<void> {

        try {
            if(!crm){
                throw new Error("O CRM deve ser fornecido!")
            }
            const updateDoctorDataBase = new UpdateDoctorDataBase()

            const updatedAt = new Date()

            await updateDoctorDataBase.create(crm, name, phone, cellphone, cep, specialty, updatedAt)
            
        } catch (error) {
            throw new Error(`Erro ao criar: ${error.message || error.sqlMessage}`)
        }
    }
}