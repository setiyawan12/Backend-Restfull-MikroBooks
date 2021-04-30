const multer = require('multer')
const path = require("path")

const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null, './public');
    },
    filename:(req,file,callback)=>{
        const nameFormat = `${Date.now()}-${file.fieldname}${path.extname(
            file.originalname
        )}`;
        callback(null,nameFormat)
    }
})
const upload = multer({
    storage:storage,
    limit:2*1000*1000
})

const singelUpload = (req,res,next)=>{
    const uploadSingle = upload.single("cover_books");
    uploadSingle(req,res,(err)=>{
        if(err){
            res.status(500).send({
                msg : "multererror",
                error:err
            })
        }else{
            next()
        }
    })
}

module.exports=singelUpload