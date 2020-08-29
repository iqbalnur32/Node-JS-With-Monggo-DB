// Join data berdasarkan id object pembuat todo
db.siswa.aggregate([
    {
        $lookup: {
            from: "ortu",
            localField: "id_siswa",
            foreignField: "id_siswa",
            as: "ortudetails"
        }
    }, 
    {
        $match: {
            "_id" : ObjectId("5f49dd57815a715d4aee6214")
        }
    }
])