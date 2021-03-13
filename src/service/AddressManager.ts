import axios from 'axios'
import { address } from '../model/Address'

export async function getAddressByCep(cep: string): Promise<address> {

    const URL = 'https://viacep.com.br/ws'

    const result = await axios.get(`${URL}/${cep}/json`)

    const myAddress: address = {
        publicPlace: result.data.logradouro,
        complement: result.data.complemento,
        neighborhood: result.data.bairro,
        locality: result.data.localidade,
        uf: result.data.uf
    }
    return myAddress

}