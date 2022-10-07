import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Habitaciones = db.define('habitaciones',{

    piso: {
        type: Sequelize.INTEGER
    },
    nombre: {
        type: Sequelize.STRING
    },
    refrigerador: {
        type: Sequelize.INTEGER
    },
    id_htl: {
        type: Sequelize.INTEGER
    },


}, {timestamps: false});