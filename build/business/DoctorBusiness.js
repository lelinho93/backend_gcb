"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorBusiness = void 0;
const DoctorDataBase_1 = require("../data/DoctorDataBase");
const idGenerator_1 = require("../service/idGenerator");
class DoctorBusiness {
    create(name, crm, phone, cellphone, cep, publicPlace, complement, neighborhood, locality, uf, specialty) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!name || !crm || !cellphone || !cep || !specialty) {
                    throw new Error("Todos os campos devem estar devidamente preenchidos!");
                }
                if (crm.length < 7) {
                    throw new Error("O 'CRM' deve ter 7 dígitos.");
                }
                if (cep.length < 9) {
                    throw new Error("O CEP deve ter 9 dígitos.");
                }
                if (cellphone.length < 10) {
                    throw new Error("O número de celular deve ter no mínimo 10 dígitos.");
                }
                const idGenerator = new idGenerator_1.IdGenerator();
                const doctorDataBase = new DoctorDataBase_1.DoctorDataBase();
                const createdAt = new Date();
                const id = idGenerator.generate();
                yield doctorDataBase.create(createdAt, id, name, crm, phone, cellphone, cep, publicPlace, complement, neighborhood, locality, uf, specialty);
            }
            catch (error) {
                throw new Error(`Erro ao criar: ${error.message || error.sqlMessage}`);
            }
        });
    }
}
exports.DoctorBusiness = DoctorBusiness;
