import { DoctorDataBase } from '../data/DoctorDataBase';
import { doctor } from '../model/Doctor'
import { IdGenerator } from '../service/idGenerator'

export class DoctorBusiness {

    async create(name: string, crm: string, phone: string, cellphone: string, cep: string, specialty: string): Promise<void> {

        try {

            if(!name || !crm || !cellphone || !cep || !specialty) {
                throw new Error("Todos os campos devem estar devidamente preenchidos!")
            }
            if(crm.length < 7) {
                throw new Error("O 'CRM' deve ter 7 dígitos.")
            }
            if(cep.length < 9) {
                throw new Error("O CEP deve ter 9 dígitos.")
            }
            if(cellphone.length < 10){
                throw new Error("O número de celular deve ter no mínimo 10 dígitos.")
            }

            const idGenerator = new IdGenerator()
            const doctorDataBase = new DoctorDataBase()

            const createdAt = new Date()


            const id = idGenerator.generate()

            await doctorDataBase.create(createdAt, id, name, crm, phone, cellphone, cep, specialty)

            
        } catch (error) {
            throw new Error(`Erro ao criar: ${error.message || error.sqlMessage}`)
        }
    }

}