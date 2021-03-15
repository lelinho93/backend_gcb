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
exports.SearchDoctorBusiness = void 0;
const SearchDoctorDataBase_1 = require("../data/SearchDoctorDataBase");
class SearchDoctorBusiness {
    create(search) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!search) {
                    throw new Error("Digite um valor para pesquisar!");
                }
                const searchDoctorDataBase = new SearchDoctorDataBase_1.SearchDoctorDataBase();
                const result = yield searchDoctorDataBase.create(search);
                if (!result[0]) {
                    throw new Error('Nenhum usuário encontrado!');
                }
                return result;
            }
            catch (error) {
                throw new Error(`Erro ao criar: ${error.message || error.sqlMessage}`);
            }
        });
    }
}
exports.SearchDoctorBusiness = SearchDoctorBusiness;
