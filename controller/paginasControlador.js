//import { Materias } from  '../models/Materias.js';
import { Hoteles } from  '../models/Hotel.js';
import {Gerente} from '../models/Gerente.js';
import {Habitaciones} from '../models/Habitaciones.js';

const paginaInicio = (req, res) => {
  res.render('inicio', {
    pagina: 'Inicio',
  })
}

const paginaCreadores = async (req, res) => {
  const hoteles = await Hoteles.findAll({
    attributes: ['nombre', 'direccion', 'telefono', 'correo'],
  })
  console.log("Aqui estan los creadores");
  console.log(hoteles);
  res.render('hoteles', {
    pagina: 'Hoteles',
    hoteles : hoteles,
  })
}

const paginaGerente = async(req, res) => {
  const gerentes = await Gerente.findAll({
    attributes: ['nombre', 'ap_paterno', 'ap_materno', 'telefono'],
  })
  console.log("Aqui estan los gerentes");
  console.log(gerentes);
  res.render('gerentes',  {
    pagina: "Gerente",
    gerentes : gerentes    
  })
}

const paginaHabitaciones = async (req, res ) => {
  const habitaciones = await Habitaciones.findAll({
    attributes: ['piso', 'nombre', 'refrigerador', 'id_htl'],
  })
  console.log("Aqui estan las habitaciones");
  console.log(habitaciones);
  res.render('habitaciones', {
    pagina: 'Habitaciones',
    habitaciones : habitaciones,
  })
}

const paginaCrearHotel = async (req, res) => {
  res.render('crearHotel' , {
    pagina: 'crearHoteles',
  })

}

const paginaComentarios = (req, res) => {
  res.render('comentarios', {
    pagina: 'Comentarios',
  })
}

export { paginaInicio, paginaCreadores, paginaComentarios ,paginaGerente , paginaHabitaciones ,paginaCrearHotel}
