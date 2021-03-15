import { BaseDataBase } from './BaseDataBase'

export class SearchDoctorDataBase extends BaseDataBase {

    private static TABLE_NAME = 'doctor'

    async create(search: string) {

        try {
            const result = await this.getConnection().raw(`
            SELECT * FROM ${SearchDoctorDataBase.TABLE_NAME} WHERE 
            concat(name, crm, phone, cellphone, cep, publicPlace, complement, neighborhood, locality, uf, specialty)
            LIKE "%${search}%"
            `)  
            
            return result[0]           
            
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}