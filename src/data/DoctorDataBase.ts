import { BaseDataBase } from './BaseDataBase'

export class DoctorDataBase extends BaseDataBase {

    private static TABLE_NAME = 'doctor'

    async create(createdAt: Date,  id: string, name: string, crm: string, phone: string, cellphone: string, cep: string, publicPlace: string, complement:string, neighborhood: string, locality: string, uf: string ,specialty: string){

    try {
        await this.getConnection().insert({
            createdAt,
            id,
            name,
            crm,
            phone,
            cellphone,
            cep,
            publicPlace,
            complement,
            neighborhood,
            locality,
            uf,
            specialty
        }).into(DoctorDataBase.TABLE_NAME)
        
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}
}