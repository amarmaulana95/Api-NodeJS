//import db dari models dengan nama "Pengguna"
const Pengguna = require('./../models/penggunaModels');
const bcrypt = require('bcrypt');
const saltRounds = 10; 

//fungsi let untuk mendeklarasikan variable layaknya var.
let index = (req, res) => {
    Pengguna.find({}).exec((err, data)=>{
        return res.json({
           data 
        });
    });
}

let simpan = (req, res) => {
    let pengguna = new Pengguna({
        nama: req.body.nama,
        telepon: req.body.telepon,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    });

    pengguna.save((err, penggunaNew)=>{
        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }
        return res.status(201).json({
            ok: true,
            pengguna: penggunaNew
        });
    });
}

let getid = (req, res) => {
    Pengguna.findById(req.params.id).exec((err, data)=>{
        return res.json({
           data 
        });
    });
}

let edit = (req, res) => {
    let pengguna = {
        nama: req.body.nama,
        telepon: req.body.telepon,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    }

    Pengguna.findByIdAndUpdate(req.params.id, pengguna, { new : true }, (err, penggunaNew)=>{

        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            penggunaNew
        });

    });
}

let hapus = (req, res) => {

    Pengguna.findByIdAndUpdate(req.params.id, {status : req.params.status}, { new : true }, (err, penggunaNew)=>{

        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            penggunaNew
        });
    });
}
module.exports = {
    index,
    simpan,
    getid,
    edit,
    hapus
}