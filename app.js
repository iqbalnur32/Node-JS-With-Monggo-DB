const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

// Pemangilan Fungsi Controller & Validasi 
const SiswaController = require('./src/Controller/SiswaController'); 
const OrtuController = require('./src/Controller/OrtuController');
const Validasi = require('./src/Validation/Validasi');
const mongod = require('./src/Config/Database');

// Express
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing Siswa
app.get('/', SiswaController.testData);
app.get('/all', SiswaController.getAll);
app.post('/create', Validasi.validRequest, SiswaController.createSiswa);
app.post('/update', SiswaController.updateSiswa);
app.post('/remove', Validasi.validDelete, SiswaController.removeSiswa);
app.get('/siswa/:id_siswa', SiswaController.getSiswaParams)

// Routing Ortu
app.get('/ortu', OrtuController.getAll);
app.post('/ortu/add', OrtuController.createOrtu);
app.post('/ortu/update', OrtuController.updateOrtu);
app.post('/ortu/delete', OrtuController.deleteOrtu);

// Server Listen
const PORT = process.env.PORT || 4444
app.listen(PORT, () => {
    console.log(`server running *:${PORT}`)
});