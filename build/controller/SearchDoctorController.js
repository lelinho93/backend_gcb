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
exports.SearchDoctorController = void 0;
const SearchDoctorBusiness_1 = require("../business/SearchDoctorBusiness");
class SearchDoctorController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchDoctorBusiness = new SearchDoctorBusiness_1.SearchDoctorBusiness();
            try {
                const search = req.query.search;
                const result = yield searchDoctorBusiness.create(search);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send({ message: error.message });
            }
        });
    }
}
exports.SearchDoctorController = SearchDoctorController;
