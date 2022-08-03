// const UserSchema = require("../models/userSchema");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const secret = "MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFFsmpC0J/1nSoConVhjTd1QZSV+ceCVt3ckrNeZbk1wqhqYDr1cCQii55GjnQA4qR80LDu0stjyJ7c9czKkiCsBt28wqajtC48tc4DrSHl14E9t/lQ1c3GQ1vjRISAJZMGdr+6lyXj8B4fVyj0bvFUlFfOIC9rKwfaos5/9/m3FAgMBAAE="

// const login = (req, res) => {
//     try {
//         userSchema.findOne({ email: req.body.email }, (error, user) => {
//             if(!user) {
//                 return res.status(401).send({
//                     message: "Usuário não encontrado",
//                     email: `${req.body.email}`
//                 })
//             }

//             const validPassword = bcrypt.compareSync(req.body.password,
//                 user.password)

//                 if(!validPassword) {
//                     return res.status(401).send({
//                         message: "Login não autorizado"
//                     })
//                 }

//                 const token = jwt.sign({ name: user.name }, secret)

//                 res.status(200).send({
//                     message: "Login Autorizado",
//                     token
//                 })
//         })
//     } catch(e) {
//         console.error(e)
//     }
// }

// module.exports = {
//     login
// }
