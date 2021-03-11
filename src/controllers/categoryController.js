const {PrismaClient} = require ('@prisma/client')
const prisma = new PrismaClient()
const response = require('../helper/response')
module.exports={
    getCategory :(req,res)=>{
        prisma.category.findMany()
        .then((data) =>{
            response.success(res,"Succes Get All Category",200,data)
        })
        .catch((error)=>{
            response.error(res,500,error)
        })
    },
    getCategoryById: (req, res) => {
        const { id } = req.params;
        prisma.category
          .findUnique({
            where: {
              id_category: parseInt(id),
            },
          })
          .then((data) => {
            response.success(res,"Succes Get Data By Id",200,data)
          })
          .catch((error) => {
            response.error(res,500,error)
          });
      },
      createCategory:(req,res)=>{
          const {body} = req
          const newBody = {
            ...body,
            category_cover:req.file.path
          }

          prisma.category.create({
              data:newBody
          })
        .then((data)=>{
            response.success(res,"Succes Menambah Category",200,data)
        })
        .catch((error)=>{
            response.error(res,500,error)
        })
      },
      updateCategory:(req,res)=>{
          const {id} = req.params;
          const {body} = req;

          prisma.category.update({
              where:{
                  id_category: parseInt(id)
              },
              data:body
          })
          .then((data)=>{
            response.success(res,"Succes Mengubah Category",200,data)
        })
        .catch((error)=>{
            response.error(res,500,error)
        })
      }
}