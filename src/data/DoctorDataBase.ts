import { doctor } from '../model/Doctor'
import { BaseDataBase } from './BaseDataBase'

export class DoctorDataBase extends BaseDataBase {

    private static TABLE_NAME = 'doctor'

    async create(id: string, name: string, crm: number, phone: number, cellphone: number, cep: number, specialty: string){

    try {
        await this.getConnection().insert({
            id,
            name,
            crm,
            phone,
            cellphone,
            cep,
            specialty
        }).into(DoctorDataBase.TABLE_NAME)
        
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}
}