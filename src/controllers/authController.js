const {PrismaClient} = require ('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports={
    signUp: (req,res) =>{
        const {body} = req;
        const saltRounds = 10;
        bcrypt.hash(body.password,saltRounds,(err,hashPassword)=>{
            const newBody = {
                ...body,
                password : hashPassword    
            }
            prisma.users.create({
                data:newBody
            })
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
        })
    },
    signIn:(req,res)=>{
        const {body} = req;
        prisma.users.findFirst({
            where:{
                email:body.email
            }
        })
        .then((data)=>{
            if(!data){
                res.send({
                    msg:"Eroor Login,User Not Found",
                    status:404
                })
            }else{
                const isValid = bcrypt.compareSync(body.password, data.password);
                console.log(isValid);
                if (!isValid) {
                    res.send({
                        msg: 'Error For Login',
                        status:403,
                        error:'Password is wrong'
                    })
                }else{
                    const payload = {
                        name: data.name,
                        username: data.username,
                        email:data.email
                    }

                    const token = jwt.sign(payload,"Asem",{
                        expiresIn:86400
                    });
                    delete data.password

                    const newData ={
                        ...data,
                        token:token
                    }
                    res.send({
                        msg:"Succes Login",
                        status: 200,
                        data:newData
                    })
                }
            }
        })
        .catch((error)=>{
            res.send({
                msh:"error login",
                status:500,
                error:error
            })
        })
    }
}