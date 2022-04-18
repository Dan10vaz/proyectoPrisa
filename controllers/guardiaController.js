import Guardia from "../models/Guardia.js";

const crear = async (req, res) => {
  try {
    const guardia = new Guardia(req.body);
    const guardarGuardia = await guardia.save();
    res.json(guardarGuardia);
  } catch (error) {
    console.log(error);
  }
};

const obtener = async (req, res) => {
  try {
    const { CURP } = req.body;
    const existeGuardia = await Guardia.findOne({ CURP });
  } catch (error) {
    console.log(error);
  }
};

export { crear, obtener };
