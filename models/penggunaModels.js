//import modul db 
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var penggunaSchema = new Schema({
    nama : {
        type: String,
        required: [true, "ini harus di isi"],
    },
    telepon : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
    },
    username :{
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    status : {
        type : Boolean,
        required: false,
        default: true
    },
    create_at : {
        type: Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Pengguna', penggunaSchema);
//bungkus dengan menggunakan "Pengguna" untuk di pakai di controller

