const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');

// const secret = "MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFFsmpC0J/1nSoConVhjTd1QZSV+ceCVt3ckrNeZbk1wqhqYDr1cCQii55GjnQA4qR80LDu0stjyJ7c9czKkiCsBt28wqajtC48tc4DrSHl14E9t/lQ1c3GQ1vjRISAJZMGdr+6lyXj8B4fVyj0bvFUlFfOIC9rKwfaos5/9/m3FAgMBAAE="

const getAll = (req, res) => {
  // db.users.find({})
  // const allUsers = await UserSchema.find()
  // res.status(200).send(allUsers)

  //
  // const authHeader = req.get('Authorization');
  // const token = authHeader.split('')(1);

  //     if (!token) {
  //         return res.status(401).send("Erro de Header")
  //     }

  // jwt.verify(token, secret, (error) => {
  //     if(err) {
  //         return res.status(401).send("Não autorizado")
  //     }
  // })

  UserSchema.find(function (err, users) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(200).send(users);
  });
};

const createUser = async (req, res) => {
  // body da minha requisição vai trazer o nome, o email e a senha usuário
  try {
    // hashea a senha
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;

    // cria o novo usuário

    const newUser = new UserSchema(req.body);

    // salva esse usuário no banco de dados
    const savedUser = await newUser.save();

    // envia a resposta

    res.status(201).send({
      message: "User criado com sucesso",
      savedUser,
    });
  } catch (e) {
    console.error(e);
  }
};

const updateUserById = async (req, res) => {
  try {
    const findUser = await UserSchema.findById(req.params.id);

    if (findUser) {
      findUser.fullName = req.body.fullName || findUser.fullName;
      findUser.CPF = req.body.CPF || findUser.CPF;
      findUser.birthDate = req.body.birthDate || findUser.birthDate;
      findUser.grade = req.body.grade || findUser.grade;
      findUser.RA = req.body.RA || findUser.RA;
      findUser.email = req.body.email || findUser.email;
      findUser.phone = req.body.phone || findUser.phone;
      findUser.address = req.body.address || findUser.address;
      findUser.zipCode = req.body.zipCode || findUser.zipCode;
      findUser.fullRespName = req.body.fullRespName || findUser.fullRespName;
      findUser.CPFResp = req.body.CPFResp || findUser.CPFResp;
      findUser.phoneResp = req.body.phoneResp || findUser.phoneResp;
      findUser.emailResp = req.body.emailResp || findUser.emailResp;
    }

    const savedUser = await findUser.save();

    res.status(200).json({
      message: "User atualizada com sucesso",
      savedUser,
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const userFound = await UserSchema.findByIdAndDelete(req.params.id);

    //    await userFound.delete()

    res.status(200).json({
      mensagem: `Usuário '${userFound.email}' deletada com sucesso!`,
    });
  } catch (err) {
    res.status(400).json({
      mensagem: err.message,
    });
  }
};

module.exports = {
  getAll,
  createUser,
  updateUserById,
  deleteUserById,
};
