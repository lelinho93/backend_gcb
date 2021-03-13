import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import { DoctorController } from './controller/DoctorController'
import { UpdateDoctorBusiness } from './business/UpdateDoctorBusiness'
import { UpdateDoctorController } from './controller/UpdateDoctorController'

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

/********************************************************************************** */

const server = app.listen(process.env.PORT || 3306, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log('Failure upon starting')
    }
})