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
exports.DoctorController = void 0;
const DoctorBusiness_1 = require("../business/DoctorBusiness");
const AddressManager_1 = require("../service/AddressManager");
class DoctorController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const doctorBusiness = new DoctorBusiness_1.DoctorBusiness();
            try {
                const cep = req.body.cep;
                const getAddress = yield AddressManager_1.getAddressByCep(cep.replace("-", ""));
                if (!getAddress.publicPlace || !getAddress.locality || !getAddress.uf) {
                    throw new Error("Cep incorreto!");
                }
                const name = req.body.name;
                const crm = req.body.crm;
                const phone = req.body.phone;
                const cellphone = req.body.cellphone;
                const specialty = req.body.specialty;
                const publicPlace = getAddress.publicPlace;
                const complement = getAddress.complement;
                const neighborhood = getAddress.neighborhood;
                const locality = getAddress.locality;
                const uf = getAddress.uf;
                yield doctorBusiness.create(name, crm, phone, cellphone, cep, publicPlace, complement, neighborhood, locality, uf, specialty);
                res.status(200).send("Profissional cadastrado com sucesso!");
            }
            catch (error) {
                res.status(400).send({ message: error.message });
            }
        });
    }
}
exports.DoctorController = DoctorController;
