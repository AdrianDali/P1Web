//const express = require('express');
import express from 'express';
import {
  paginaComentarios,
  paginaCreadores,
  paginaInicio,
 
  paginaGerente,
  paginaHabitaciones,
  paginaCrearHotel
} from '../controller/paginasControlador.js';

const rutas = express.Router()

rutas.get('/', paginaInicio)

rutas.get('/hoteles', paginaCreadores)

rutas.get('/gerentes', paginaGerente)

rutas.get('/habitaciones', paginaHabitaciones)

rutas.get('/crearHotel', paginaCrearHotel)


rutas.get('../', paginaComentarios)

export default rutas