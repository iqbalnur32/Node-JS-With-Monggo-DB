const Siswa = require('../Models/SiswaModel');

// Testing
exports.testData = (req, res) => {
    res.json({
        status: true,
        msg: 'Test'
    })
}

// Get All Siswa
exports.getAll = async (req, res) => {  
    await Siswa.find((err, result) => {
        res.json({
            status: 200,
            data: result
        })
    })
}

// Insert Siswa
exports.createSiswa = async (req, res) => {
    const {id_siswa, kelas, siswa, jurusan} = req.body;
    const createSiswa = await Siswa.create({id_siswa:id_siswa, kelas: kelas, siswa: siswa, jurusan: jurusan});
    if(createSiswa){
        res.json({
            status: 200,
            msg: 'Success Created Siswa',
            data: createSiswa
        });
    }else{
        res.json({
            status: 401,
            msg: 'Error Failed Create Siswa'
        })
    }
}

exports.updateSiswa = async (req, res) => {
    const {kelas, siswa, jurusan, id_siswa} = req.body;
    const checkIdSiswa = await Siswa.find({id_siswa: id_siswa});
    if(checkIdSiswa.length > 0) {
        const updateSiswa = await Siswa.updateOne({id_siswa: id_siswa}, {kelas: kelas, siswa: siswa, jurusan: jurusan});
        if(updateSiswa){
            res.json({
                status: 200,
                msg: 'Success Update Siswa',
                data: {id_siswa: id_siswa}
            })
        }else{
            res.json({
                status: 401,
                msg: 'Error Failed Update Siswa'
            })
        }
    }else{
        res.json({
            status: 401,
            msg: 'Siswa ID ' + id_siswa + ' No Found'
        })
    }
}

exports.removeSiswa = async (req, res) => {
    const {id_siswa} = req.body
    if(id_siswa){
        const checkIdSiswa = await Siswa.find({id_siswa: id_siswa});
        if(checkIdSiswa.length > 0){
            const removeSiswa = await Siswa.remove({id_siswa: id_siswa});
            if(removeSiswa){
                res.json({
                    status: 200,
                    msg: 'Id Siswa ' + id_siswa + ' Success Remove' 
                })
            }else{
                res.json({
                    status: 401,
                    msg: 'Failed Remove'
                })
            }
        }else{
            res.json({
                status: 401,
                msg: 'Siswa ID ' + id_siswa + ' No Found'
            })
        }
    }else{
        res.status(500).json({
            status: 500,
            msg: 'All fields cannot be null.'
        });
    } 
}

// Get Siswa by Params
exports.getSiswaParams = async (req, res) => {
    try{
        const id_siswa  = req.params.id_siswa
        const siswaParams = await Siswa.find({id_siswa: id_siswa})

        if (siswaParams){
            res.status(200).json({
                data: siswaParams
            })

        } else {
            res.status(401).json({
                data: "gagal"
            })
        }

    } catch (Error) {
        console.log(Error)
    }
}