import { DeleteDoctorDataBase } from '../data/DeleteDoctorDataBase'

export class DeleteDoctorBusiness {

    async create(crm: string): Promise<void> {

        try {

            if(!crm) {
                throw new Error("Você precisa informar um CRM!")
            }
            if(crm.length < 7) {
                throw new Error("O CRM deve ter 7 dígitos!")
            }

            const updateDoctorDataBase = new DeleteDoctorDataBase()

            const deletedAt = new Date()

            await updateDoctorDataBase.create(crm, deletedAt)
            
        } catch (error) {
            throw new Error(`Erro ao criar: ${error.message || error.sqlMessage}`)
        }
    }
}