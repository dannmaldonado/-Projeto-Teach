const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,
    fullName: {
        type: String, 
        require: true
    },
    cpf: {
        type: String, 
        require: true
    },
    birthDate: {
        type: String, 
        require: true
    },
    grade: {
        type: String, 
        require: true
    },
    ra: {
        type: String, 
        require: true
    },
    email: {
        type: String, 
        require: true
    },
    password: {
        type: String, 
        require: false
    },
    phone: {
        type: String, 
        require: true
    },
    address: {
        type: String, 
        require: true
    },
    zipCode: {
        type: String, 
        require: true
    },
    fullRespName: {
        type: String, 
        require: true
    },
    cpfResp: {
        type: String, 
        require: true
    },
    phoneResp: {
        type: String, 
        require: true
    },
    emailResp: {
        type: String, 
        require: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('user', userSchema);
