const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

// Pemangilan Fungsi Controller & Validasi 
const SiswaController = require('./src/Controller/SiswaController'); 
const Validasi = require('./src/Validation/Validasi');
const mongod = require('./src/Config/Database');

// Express
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
app.get('/', SiswaController.testData);
app.get('/all', SiswaController.getAll);
app.post('/create', Validasi.validRequest, SiswaController.createSiswa);
app.post('/update', SiswaController.updateSiswa);
app.post('/remove', Validasi.validDelete, SiswaController.removeSiswa);

// Server Listen
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server running *:${PORT}`)
});