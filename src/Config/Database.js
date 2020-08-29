const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/siswa";

mongoose.connect(url, {
    useNewUrlParser: true
})
.then(() => console.log('Connect database mongo'))
.catch(err => {
    console.log(err)
    process.exit();
})