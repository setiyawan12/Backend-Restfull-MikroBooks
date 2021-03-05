const {PrismaClient} = require ('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const response = require('../helper/response')

module.exports={
    signUp: (req, res) => {
        const register = {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        };
        const saltRounds = 10;
        bcrypt.hash(register.password, saltRounds, (err, hashPassword) => {
          const newData = {
            ...register,
            password: hashPassword,
          };
          prisma.users
            .create({
              data: newData,
            })
            .then((data) => {
              response.success(res,200,"Success Login",data)
            })
            .catch((err) => {
              response.success(res,500,err)
            });
        });
      },
      signIn: (req, res) => {
        const body = {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        };
        prisma.users
          .findFirst({
            where: {
              email: body.email,
            },
          })
          .then((data) => {
            if (!data) {
              res.send({
                message: "Error Login User Not Found",
                status: 404,
              });
            } else {
              console.log("passwordnya", data.password);
              const isValid = bcrypt.compareSync(body.password, data.password);
              if (!isValid) {
                res.send({
                  message: "Error Login ",
                  status: 404,
                  Error: "Password Is Wrong",
                });
              } else {
                const payload = {
                  username: data.username,
                  email: data.email,
                  password:data.passsword,
                };
    
                const token = jwt.sign(payload, "PLUGIN007", {
                  expiresIn: 86400,
                });
                const newData = {
                  ...data,
                  token: token,
                };
                res.send({
                  message: "Success Login",
                  status: 200,
                  data: newData,
                });
              }
            }
          })
          .catch((error) => {
            res.send({
              message: "Login Error",
              status: 404,
              error: error,
            });
          });
      },
}