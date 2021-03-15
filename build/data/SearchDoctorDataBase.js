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
exports.SearchDoctorDataBase = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
class SearchDoctorDataBase extends BaseDataBase_1.BaseDataBase {
    create(search) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection().raw(`
            SELECT * FROM ${SearchDoctorDataBase.TABLE_NAME} WHERE 
            concat(name, crm, phone, cellphone, cep, publicPlace, complement, neighborhood, locality, uf, specialty)
            LIKE "%${search}%"
            `);
                return result[0];
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.SearchDoctorDataBase = SearchDoctorDataBase;
SearchDoctorDataBase.TABLE_NAME = 'doctor';
