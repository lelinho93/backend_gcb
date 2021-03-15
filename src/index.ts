import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import { DoctorController } from './controller/DoctorController'
import { UpdateDoctorController } from './controller/UpdateDoctorController'
import { DeleteDoctorController } from './controller/DeleteDoctorController'
import { SearchDoctorController } from './controller/SearchDoctorController'

dotenv.config()

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_NAME
    }
})

const cors = require('cors')

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors())
    next()
})

app.use(express.json())

/****************************ENDPOINTS HERE**************************************** */

app.post('/doctor', new DoctorController().create)
app.put('/doctor/update', new UpdateDoctorController().create)
app.delete('/doctor/delete', new DeleteDoctorController().create)
app.get('/doctor/search', new SearchDoctorController().create)

/********************************************************************************** */
app.listen(process.env.PORT || 3306)
    