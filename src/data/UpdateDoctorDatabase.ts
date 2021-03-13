import { BaseDataBase } from './BaseDataBase'


export class UpdateDoctorDataBase extends BaseDataBase {

    private static TABLE_NAME = 'doctor'

    async create(crm: string, name: string, phone: string, cellphone: string, cep: string, specialty: string, updatedAt: Date){

try {
    await this.getConnection().update({
        updatedAt,
        name,
        phone,
        cellphone,
        cep,
        specialty
    }).table(UpdateDoctorDataBase.TABLE_NAME).where({crm})

} catch (error) {
    throw new Error(error.sqlMessage || error.message)
    }
}
}