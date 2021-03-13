const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

module.exports={
    searchBooks:(req,res)=>{
        const{keywrod} = req.body

        prisma.books.findMany({
            where:{
                title:{
                    contains: keywrod,
                    mode: "insensitive",
                }
            }
        })
        .then((data)=>{
            res.send({
                msg:"Success Search books",
                status:200,
                data
            })
        })
        .catch((error)=>{
            res.send({
                msg:"failed Search Books",
                status:500,
                error
            })
        })
    }
}