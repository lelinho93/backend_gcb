import { SearchDoctorDataBase } from '../data/SearchDoctorDataBase'

export class SearchDoctorBusiness {

    async create(search: string):Promise<any> {

        try {
            if(!search){
                throw new Error("Digite um valor para pesquisar!")
            }

                const searchDoctorDataBase = new SearchDoctorDataBase()               

            
            const result = await searchDoctorDataBase.create(search)
            
            return result
            
            
        } catch (error) {
            throw new Error(`Erro ao criar: ${error.message || error.sqlMessage}`)
        }
    }
}