const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null, './public/category_image');
    },
    filename:(req,file,callback)=>{
        const nameFormat =
        `${Date.now()}-${file.fieldname}${path.extname(
            file.originalname
        )}`;
        callback(null,nameFormat)
    }
})
const upload = multer({
    storage:storage,
    limits:2*1000*1000
})

const singleUpload= (req,res,next) =>{
    const uploadSingle= upload.single("category_cover");
    uploadSingle(req,res,(err)=>{
        if(err){
            res.status(500).send({
                msg:"mullter error",
                error:err
            })
        }else{
            next()
        }
    })
}
module.exports=singleUpload