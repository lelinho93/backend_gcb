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
exports.DeleteDoctorBusiness = void 0;
const DeleteDoctorDataBase_1 = require("../data/DeleteDoctorDataBase");
class DeleteDoctorBusiness {
    create(crm) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!crm) {
                    throw new Error("Você precisa informar um CRM!");
                }
                if (crm.length < 7) {
                    throw new Error("O CRM deve ter 7 dígitos!");
                }
                const updateDoctorDataBase = new DeleteDoctorDataBase_1.DeleteDoctorDataBase();
                const deletedAt = new Date();
                yield updateDoctorDataBase.create(crm, deletedAt);
            }
            catch (error) {
                throw new Error(`Erro ao criar: ${error.message || error.sqlMessage}`);
            }
        });
    }
}
exports.DeleteDoctorBusiness = DeleteDoctorBusiness;
