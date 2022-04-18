import mongoose from "mongoose";

const guardiasSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
      trim: true,
    },
    apellidos: {
      type: String,
      require: true,
      trim: true,
    },
    edad: {
      type: String,
      require: true,
      trim: true,
    },
    direccion: {
      type: String,
      require: true,
      trim: true,
    },
    codigoPostal: {
      type: String,
      require: true,
      trim: true,
    },
    correo: {
      type: String,
      unique: true,
      trim: true,
    },
    tarjetaDebito: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    celular: {
      type: String,
      require: true,
      trim: true,
    },
    salario: {
      type: String,
      require: true,
      trim: true,
    },
    tipoGuardia: {
      type: String,
      require: true,
      trim: true,
    },
    RFC: {
      type: String,
      require: true,
      trim: true,
    },
    NSS: {
      type: String,
      require: true,
      trim: true,
    },
    CURP: {
      type: String,
      require: true,
      trim: true,
    },
    fechaIngreso: {
      type: Date,
      require: true,
      default: Date.now(),
    },
    servicio: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Guardia = mongoose.model("Guardia", guardiasSchema);
export default Guardia;
