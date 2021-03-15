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
exports.UpdateDoctorController = void 0;
const UpdateDoctorBusiness_1 = require("../business/UpdateDoctorBusiness");
class UpdateDoctorController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateDoctorBusiness = new UpdateDoctorBusiness_1.UpdateDoctorBusiness();
            try {
                const crm = req.body.crm;
                const name = req.body.name;
                const phone = req.body.phone;
                const cellphone = req.body.cellphone;
                const cep = req.body.cep;
                const specialty = req.body.specialty;
                yield updateDoctorBusiness.create(crm, name, phone, cellphone, cep, specialty);
                res.status(200).send("Informações do profissional atualizadas!");
            }
            catch (error) {
                res.status(400).send({ message: error.message });
            }
        });
    }
}
exports.UpdateDoctorController = UpdateDoctorController;
