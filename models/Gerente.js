import Sequelize from "sequelize";
import db from '../config/db.js'

export const Gerente = db.define('gerentes', {

    nombre: {
        type: Sequelize.STRING
    },
    ap_paterno: {
        type: Sequelize.STRING
    },
    ap_materno: {
        type: Sequelize.STRING
    },
    telefono: {
        type: Sequelize.STRING
    }
}, {timestamps: false});