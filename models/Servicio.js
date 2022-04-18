import mongoose from "mongoose";

const servicioSchema = mongoose.schema({
  determinante: {
    type: String,
    requiere: true,
    trim: true,
  },
  nombre: {
    type: String,
    require: true,
    trim: true,
  },
  cantidadGuardias: {
    type: String,
    require: true,
    trim: true,
  },
  cantidadPatruyas: {
    type: String,
    require: true,
    trim: true,
  },
  guardiasTropa: {
    type: String,
    require: true,
    trim: true,
  },
  guardiasElite: {
    type: String,
    require: true,
    trim: true,
  },
  jefeServicio: {
    type: String,
    require: true,
    trim: true,
  },
  fechaInicio: {
    type: Date,
    require: true,
  },
});

const Servicio = mongoose("Servicio", servicioSchema);
export default Servicio;
