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
exports.DeleteDoctorController = void 0;
const DeleteDoctorBusiness_1 = require("../business/DeleteDoctorBusiness");
class DeleteDoctorController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateDoctorBusiness = new DeleteDoctorBusiness_1.DeleteDoctorBusiness();
            try {
                const crm = req.body.crm;
                yield updateDoctorBusiness.create(crm);
                res.status(200).send("Profissional deletado com sucesso!");
            }
            catch (error) {
                res.status(400).send({ message: error.message });
            }
        });
    }
}
exports.DeleteDoctorController = DeleteDoctorController;
