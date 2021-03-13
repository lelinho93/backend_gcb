import { BaseDataBase } from './BaseDataBase'


export class DeleteDoctorDataBase extends BaseDataBase {

    private static TABLE_NAME = 'doctor'

    async create(crm: string, deletedAt: Date){

try {
    await this.getConnection().update({
        deletedAt,
    }).table(DeleteDoctorDataBase.TABLE_NAME).where({crm})

} catch (error) {
    throw new Error(error.sqlMessage || error.message)
    }
}
}