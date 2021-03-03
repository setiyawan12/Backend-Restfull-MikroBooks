const {PrismaClient} = require ('@prisma/client')
const prisma = new PrismaClient()

module.exports={
    getBooks :(req,res)=>{
        prisma.books.findMany()
        .then(data =>{
            res.send({
                message:'success',
                status:true,
                data:data
            })
        })
        .catch(error=>{
            res.send({
                message:'gagal',
                status:500,
                error:error
            })
        })
    }
}