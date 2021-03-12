import { DoctorDataBase } from '../data/DoctorDataBase';
import { doctor } from '../model/Doctor'
import { IdGenerator } from '../service/idGenerator'

export class DoctorBusiness {

    async create(name: string, crm: number, phone: number, cellphone: number, cep: number, specialty: string): Promise<void> {

        try {

            const idGenerator = new IdGenerator()
            const doctorDataBase = new DoctorDataBase()

            const id = idGenerator.generate()

            await doctorDataBase.create(id, name, crm, phone, cellphone, cep, specialty)
            
        } catch (error) {
            throw new Error(`Erro ao criar: ${error.message || error.sqlMessage}`)
        }
    }

}