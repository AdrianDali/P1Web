import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Hoteles = db.define('hoteles', {

    nombre: {
        type: Sequelize.STRING
    },
    direccion: {
        type: Sequelize.STRING
    },
    telefono: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    id_grt:{
        type: Sequelize.INTEGER
    },


}, {timestamps: false});