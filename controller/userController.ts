import connection from "../config/dbConnection"
import { IDBError, IUser } from "../utils/types"
const jwt = require('jsonwebtoken')
import { getAllUsers, getUserByName } from './../repository/userRepository'

export const getAllUsersController = (req: any, res: any) => {
  getAllUsers((error: IDBError, users: IUser) => {
        if(error){
          res.status(500).json(
            {
                "Type": "There has been a database error!",
                "Message": error.sqlMessage,
                "Query": error.sql
            })     
        }
        else {
            res.json(users)
        }
    })
}

export const insertUser = (req: any, res: any) => {
    // //Obter o dado do request - nome, email, username, senha
    // const usuario = req.body;
    
    // //SQL
    // const sql = "INSERT INTO usuario(nome,email,username,senha) VALUES (?,?,?,?)"

    // conexao.query(sql, [usuario.nome, usuario.email, usuario.username, usuario.senha],
    //     (erro, rows) => {
    //     if(erro){
    //         res.status(500).json({"erro:":"Database Error"})
    //         console.log(erro)
    //     }
    //     else {
    //         usuario.id = rows.insertId;
    //         res.status(201).json(usuario)
    //     }
    // })
}

export const getUserById = (req: any, res: any) => {
    // const id = req.params.id;
    // const sql = "SELECT * FROM usuario WHERE id=?";

    // conexao.query(sql, [id], (erro, rows) => {
    //     if(erro){
    //         res.status(500).json({"erro:":"Database Error"})
    //         console.log(erro)
    //     }
    //     else {
    //         if(rows && rows.length > 0){
    //             res.json(rows[0])
    //         }
    //         else{ 
    //             res.status(404).json({"msg":"usuario nao encontrado"})
    //         }
    //     }
    // })
}

export const getByNameController = (req: any, res: any) => {    
    if(req.query){
      console.log('req.query :>> ', req.query);
        const firstName = req.query.firstName;
        const lastName = req.query.lastName;

        getUserByName(firstName, lastName, (err: any, user: IUser) => {
            if(err){
                res.status(err.status).json(err);
            }
            else {
                res.json(user);
            }
        });
    }
    else{
        res.status(400).json({"status":400, "msg":"Necessario especificar username."})
    }


}

export const updateUser = (req: any, res: any) => {
    // const id = req.params.id;
    // const usuario = req.body;

    // const sql = `UPDATE usuario SET nome=?, email=?, username=?, senha=? WHERE id=?`;
    // conexao.query(sql, [usuario.nome, usuario.email, usuario.username, usuario.senha, id], 
    //     (erro, rows) => {
    //     if(erro){
    //         res.status(500).json({"erro:":"Database Error"})
    //         console.log(erro)
    //     }
    //     else {
    //         usuario.id = +id; //Sinal de "+" -> converte String para number (ou usar parseInt)
    //         res.json(usuario);
    //     }
    // })
}

export const deleteUser = (req: any, res: any) => {
    // const id = req.params.id;

    // const sql = `DELETE FROM usuario WHERE id=?`;
    // conexao.query(sql, [id], (erro, rows) => {
    //     if(erro){
    //         res.status(500).json({"erro:":"Database Error"})
    //         console.log(erro)
    //     }
    //     else {
    //         if(rows.affectedRows)
    //         res.json({"msg": `Usuario ${id} removido com sucesso`});
    //     }
    // })
}

export const validateUser = (req: any, res: any) => {
    // if(req.body && req.body.username && req.body.senha){
    //     const username = req.body.username;
    //     const senha = req.body.senha;
    //     usuarioRepository.buscarPorUsername(username, (err,usuario) => {
    //         if(err){
    //             if(err.status == 404){
    //                 const erro = {
    //                     status: 401,
    //                     msg: "Usuario invalido"
    //                 }
    //                 res.status(erro.status).json(erro);
    //             }
    //             else {
    //                 res.status(err.status).json(err);
    //             }
    //         }
    //         else {
    //             if(usuario.senha == senha){
    //                 const token = jwt.sign({
    //                     id: usuario.id,
    //                     nome: usuario.nome
    //                 }, "Sen@cr5", {expiresIn: "1h"});
    //                 res.status(201).json({"token":token});
    //             }
    //             else {
    //                 const erro = {
    //                     status: 401,
    //                     msg: "Senha invalida"
    //                 }
    //                 res.status(erro.status).json(erro);
    //             }
    //         }
    //     })
    // }
    // else {
    //     const erro = {
    //         status: 400,
    //         msg: "Usuario ou senha inexistentes"
    //     }
    //     res.status(erro.status).json(erro);
    // }
}

export const validateToken = (req: any, res: any, next: any) => {
    // const token = req.get("x-auth-token");
    // if(!token){
    //     const error = { 
    //         status: 403,
    //         msg: "Nao tem token de acesso"
    //     }
    //     res.status(error.status).json(error);
    // }
    // else {
    //     jwt.verify(token, "Sen@cr5", (err, payload) => {
    //         if(err){
    //             const error = { 
    //                 status: 403,
    //                 msg: "Token invalido"
    //             }
    //             res.status(error.status).json(error);        
    //         }
    //         else{
    //             console.log("Id do Usuario: "+payload.id);
    //             next();
    //         }
    //     })
    // }
}