const mongoose = require('mongoose');

const SiswaSchema = new mongoose.Schema({
    kelas: { type: String },
    siswa: { type: String },
    jurusan: { type: String },
    id_siswa: { type: Number }
});

module.exports = mongoose.model('siswa', SiswaSchema, 'siswa');