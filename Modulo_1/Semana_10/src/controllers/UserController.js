const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({
      message: "Usuários não encontrados.",
    });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({
      message: "Não foi possível buscar o usuário.",
    });
  }
};

const createUser = async (req, res) => {
  const { name, email, username, password } = req.body;

  if (!name || !email || !username || !password) {
    return res.status(400).json({
      message: "Preencha name, email, username, password.",
    });
  }

  const newUser = {
    name,
    email,
    username,
    password,
  };

  try {
    const data = await User.create(newUser);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({
      message: "Não foi possível cadastrar. Tente novamente mais tarde.",
    });
  }
};

const updateUser = async (req, res) => {
  const { id: userID } = req.params;
  const data = req.body;

  const user = await User.findByPk(userID);

  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado.",
    });
  }

  const newData = { ...user, ...data };

  try {
    await User.update(newData, { where: { id: userID } });
    return res.status(200).json({ message: "Dados atualizados com sucesso." });
  } catch (error) {
    return res.status(400).json({
      message: "Não foi possível atualizar o registro.",
    });
  }
};

const deleteUser = async (req, res) => {
  const { id: userID } = req.params;

  const user = await User.findByPk(userID);

  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado.",
    });
  }

  try {
    await User.destroy({ where: { id: userID } });
    return res.status(204);
  } catch (error) {
    return res.status(400).json({
      message: "Não foi possível remover o registro.",
    });
  }
};

const createSession = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username e Senha obrigatórios." });
    }

    const user = await User.findOne({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(404).json({ message: "Senha ou E-mail incorreto." });
    }

    const token = jwt.sign({ id: user.id }, process.env.TOKEN, {
      expiresIn: "1d",
    });

    res.json({
      userID: user.id,
      token,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Erro ao logar. Tente novamente mais tarde." });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  createSession,
};
