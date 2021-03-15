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
exports.UpdateDoctorBusiness = void 0;
const UpdateDoctorDatabase_1 = require("../data/UpdateDoctorDatabase");
class UpdateDoctorBusiness {
    create(crm, name, phone, cellphone, cep, specialty) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!crm) {
                    throw new Error("O CRM deve ser fornecido!");
                }
                const updateDoctorDataBase = new UpdateDoctorDatabase_1.UpdateDoctorDataBase();
                const updatedAt = new Date();
                yield updateDoctorDataBase.create(crm, name, phone, cellphone, cep, specialty, updatedAt);
            }
            catch (error) {
                throw new Error(`Erro ao criar: ${error.message || error.sqlMessage}`);
            }
        });
    }
}
exports.UpdateDoctorBusiness = UpdateDoctorBusiness;
