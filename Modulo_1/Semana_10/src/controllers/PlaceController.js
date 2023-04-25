const Place = require("./../models/Place");

const getPlaces = async (req, res) => {
  try {
    const places = await Place.findAll();
    return res.status(200).json(places);
  } catch (error) {
    return res.status(400).json({
      message: "Não foi possível buscar os lugares cadastrados.",
    });
  }
};

const getPlace = async (req, res) => {
  const { id } = req.params;

  try {
    const place = await Place.findByPk(id);

    if (!place) {
      return res.status(404).json({ message: "Lugar não encontrado." });
    }

    return res.status(200).json(place);
  } catch (error) {
    return res.status(400).json({
      message: "Não foi possível buscar os lugares cadastrados.",
    });
  }
};

const createPlace = async (req, res) => {
  const { name, phone, opening_hours, description, latitude, longitude } =
    req.body;

  if (
    !name ||
    !phone ||
    !opening_hours ||
    !description ||
    !latitude ||
    !longitude
  ) {
    return res.status(400).json({
      message:
        "Preencha nome, telefone, horário de atendimento, descrição, latitude e longitude.",
    });
  }

  const newPlace = {
    name,
    phone,
    opening_hours,
    description,
    latitude,
    longitude,
  };

  try {
    const data = await Place.create(newPlace);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({
      message: "Não foi possível cadastrar. Tente novamente mais tarde.",
    });
  }
};

const updatePlace = async (req, res) => {
  const { id: placeID } = req.params;
  const data = req.body;

  const place = await Place.findByPk(placeID);

  if (!place) {
    return res.status(404).json({
      message: "Registro não encontrado.",
    });
  }

  const newData = { ...place, ...data };

  try {
    await Place.update(newData, { where: { id: placeID } });
    return res.status(200).json({ message: "Dados atualizados com sucesso." });
  } catch (error) {
    return res.status(400).json({
      message: "Não foi possível atualizar o registro.",
    });
  }
};

const deletePlace = async (req, res) => {
  const { id: placeID } = req.params;

  const place = await Place.findByPk(placeID);

  if (!place) {
    return res.status(404).json({
      message: "Registro não encontrado.",
    });
  }

  try {
    await Place.destroy({ where: { id: placeID } });
    return res.status(204);
  } catch (error) {
    return res.status(400).json({
      message: "Não foi possível remover o registro.",
    });
  }
};

module.exports = {
  getPlaces,
  getPlace,
  createPlace,
  updatePlace,
  deletePlace,
};
