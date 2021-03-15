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
exports.UpdateDoctorDataBase = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
class UpdateDoctorDataBase extends BaseDataBase_1.BaseDataBase {
    create(crm, name, phone, cellphone, cep, specialty, updatedAt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().update({
                    updatedAt,
                    name,
                    phone,
                    cellphone,
                    cep,
                    specialty
                }).table(UpdateDoctorDataBase.TABLE_NAME).where({ crm });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.UpdateDoctorDataBase = UpdateDoctorDataBase;
UpdateDoctorDataBase.TABLE_NAME = 'doctor';
