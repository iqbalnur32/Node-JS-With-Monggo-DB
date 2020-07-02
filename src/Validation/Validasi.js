exports.validRequest = (req, res, next) => {
    const { siswa, jurusan, kelas, id_siswa } = req.body;
    if (siswa, jurusan, kelas, id_siswa) {
        if (isNaN(id_siswa)) {
            res.status(400).json({
                status: false,
                msg: 'Type Data Tidak Cocok'
            });
        }else{
            return next();
        }
    }else{
        res.status(400).json({
            status: false,
            msg: 'All fields cannot be null.'
        });
    }
}

exports.validDelete = (req, res, next) => {
    const { id_siswa } = req.body;
    if (id_siswa) {
        if (isNaN(id_siswa)) {
            res.status(400).json({
                status: false,
                msg: 'Bad Request.'
            });
        }else{
            return next();
        }
    }else{
        res.status(400).json({
            status: false,
            msg: 'All fields cannot be null.'
        });
    }
}