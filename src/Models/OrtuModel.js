const mongoose = require('mongoose')

const OrtuSchema = new mongoose.Schema({
    nama_ortu : {type: String},
    alamat: {type: String},
    id_ortu: { type: Number },
    id_siswa: { type: Number }
})

module.exports = mongoose.model('ortu', OrtuSchema, 'ortu');  