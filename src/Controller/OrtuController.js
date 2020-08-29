const Ortu = require('../Models/OrtuModel');

// Get All Ortu Data
exports.getAll = async (req, res) => {
    await Ortu.find((err, result) => {
        res.json({
            status: 200,
            data: result
        })
    })
}

exports.createOrtu = async (req, res) => {
    try {
        const { id_siswa, nama_ortu, alamat } = req.body
        
        const ortu_create = await Ortu.create({
            id_siswa: id_siswa,
            nama_ortu: nama_ortu,
            alamat: alamat
        });

        if(ortu_create) {
            res.json({
                status: 200,
                data: ortu_create
            })
        } else {
            res.json({
                status: 401,
                data: "error insert data!"
            })
        }

    } catch (error) {
        console.error(error);
    }
}

exports.updateOrtu = async (req, res) => {

    try{

        const { id_ortu, id_siswa, nama_ortu, alamat } = req.body
        const checkIdOrtu = await Ortu.find({id_ortu: id_ortu})

        if(checkIdOrtu.length > 0) {

            const updateOrtu = await Ortu.updateOne({ id_ortu: id_ortu},{$set: { alamat: alamat }})

            if(updateOrtu) {
                res.status(200).json({
                    data: updateOrtu
                })
            } else {
                res.status(401).json({
                    data: 'failed update data'
                })
            }
        } else {
            res.json({
                status: 500,
                data: "ID " + id_ortu + "not found"
            })
        }

    } catch (err) {
        console.log(err)
    }

}

exports.deleteOrtu = async (req, res) => {
    const { id_siswa } = req.body
    
    if(id_siswa) {
        const checkIdSiswa = await Ortu.find({id_siswa: id_siswa})

        if(checkIdSiswa.length > 0) {
            const removeOrtu = await Ortu.deleteOne({id_siswa: id_siswa})

            if(removeOrtu) {
                res.json({
                    status: 200,
                    data: 'berhasil di remove'
                })
            } else {
                res.json({
                    status: 401,
                    data: 'gagal di hapus'
                })
            }
        } else {
            res.json({
                status: 401,
                data: 'Id tidak di temukan'
            })
        }
    } else {
        res.json({
            status: 500,
            msg: 'All fields cannot be null.'
        })
    }
}