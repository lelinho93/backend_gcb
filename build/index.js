"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
const DoctorController_1 = require("./controller/DoctorController");
const UpdateDoctorController_1 = require("./controller/UpdateDoctorController");
const DeleteDoctorController_1 = require("./controller/DeleteDoctorController");
const SearchDoctorController_1 = require("./controller/SearchDoctorController");
dotenv_1.default.config();
exports.connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_NAME
    }
});
const cors = require('cors');
const app = express_1.default();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});
app.use(express_1.default.json());
app.post('/doctor', new DoctorController_1.DoctorController().create);
app.put('/doctor/update', new UpdateDoctorController_1.UpdateDoctorController().create);
app.delete('/doctor/delete', new DeleteDoctorController_1.DeleteDoctorController().create);
app.get('/doctor/search', new SearchDoctorController_1.SearchDoctorController().create);
app.listen(process.env.PORT || 3306);
