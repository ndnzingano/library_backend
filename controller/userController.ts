import connection from "../config/dbConnection";
import { IDBError, IUser } from "../utils/types";
import jwt from 'jsonwebtoken';
import {v4 as uuidv4 } from 'uuid';
import { getAllUsers, getUserByName, getUserById, insertUser, deleteUser, getUserByEmail } from './../repository/userRepository';
import dotenv from 'dotenv'


dotenv.config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;

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
          res.status(200).json({"users": users})
        }
    })
}

export const insertUserController = (req:any, res:any) => {    
    const user = req.body;
    user.id = uuidv4();
    
    insertUser(user, (error: IDBError, savedUser: IUser) => {
        if(error){
            res.status(500).json(
                {
                    "Type": "There has been a database error!",
                    "Message": error.sqlMessage,
                    "Query": error.sql
                })
        }
        else {
          res.status(201).json({
            "status":201,
            "result":savedUser
          })  
        }
    })
}

export const getUserByIdController = (req: any, res: any) => {
  const id = req.params.id;
  getUserById(id, (error: any, user: IUser) => {
      if(error){
        res.status(error.status).json(error)

      }
      else {
        res.status(200).json({
          "status": 200,
          "result":user
        })      
      }
  })
}


export const getUserByEmailController = (req: any, res: any) => {    

  if (req.query.email) {
    const email = req.query.email;

    getUserByEmail(email, (err: any, user: IUser) => {
        if(err){
            res.status(err.status).json(err);
        }
        else {
          res.status(200).json({
            "status": 200,
            "result": user
          })           
        }
    });
  } else {
    res.status(400).json({
      "status": 400, 
      "message":"There has been a problem with the query, check the information provided"
    })
  }  
}

export const updateUserController = (req:any, res:any) => {
    const id = req.params.id;
    const user: IUser = req.body;

    const sql = `UPDATE users SET firstName=?, lastName=?, email=?, birthday=? WHERE id=?`;
    connection.query(sql, [user.firstName, user.lastName, user.email, user.birthday, id], (error, rows) => {
        if(error){
          res.status(500).json(
            {
              "Type": "There has been a database error!",
              "Code": error.code,
              "Message": error.sqlMessage,
              "Query": error.sql          
          })
        }
        else {
          res.status(201).json({
            "status":201,
            "result":user
          })
        }
    })
}

export const deleteUserController = (req:any, res:any) => {
  const id = req.params.id;    
    getUserById(id, (error: any, user: IUser) => {
      if(error){
        res.status(error.status).json(
          {
            "Type": "There has been a network error!",
            "Status": error.status,
            "Message": error.message
          })
      }
      else {
        deleteUser(id, (error: any, id: string) => {
          if(error){
            res.status(error.status).json(
              {
                "Type": "There has been a network error!",
                "Status": error.status,
                "Message": error.message.sqlMessage ? error.message.sqlMessage : error.message 
              })
          }
          else {
            res.status(204).json({
              'status': 204,
              'result': user
            })          
          }        
        })
      }
    })
}

export const validateUser = (req: any, res: any) => {
    if(req.body && req.body.email && req.body.password){
        const email = req.body.email;
        const password = req.body.password;
        getUserByEmail(email, (err: any, user: IUser) => {
            if(err){
                if(err.status == 404){
                    const erro = {
                        status: 401,
                        message: "Invalid user"
                    }
                    res.status(erro.status).json(erro);
                }
                else {
                    res.status(err.status).json(err);
                }
            }
            else {
                if(user.password == password){
                    const token = jwt.sign({
                        id: user.id,
                        name: user.firstName + " " + user.lastName
                    }, ACCESS_TOKEN_SECRET, {expiresIn: "1h"});
                    res.status(201).json({"token": token});
                }
                else {
                    const erro = {
                        status: 401,
                        message: "Invalis password"
                    }
                    res.status(erro.status).json(erro);
                }
            }
        })
    }
    else {
        const erro = {
            status: 400,
            msg: "User or password not found"
        }
        res.status(erro.status).json(erro);
    }
}

export const validateToken = (req: any, res: any, next: any) => {
    const token = req.get("x-auth-token");

    if(token == null){
        const error = { 
            status: 403,
            msg: "Nao tem token de acesso"
        }
        res.status(error.status).json(error);
    }
    else {
        jwt.verify(token, ACCESS_TOKEN_SECRET, (err: any, user: any) => {
            if(err){
                const error = { 
                    status: 403,
                    msg: "Token invalido"
                }
                res.status(error.status).json(error);        
            }
            else{
                req.user = user
                next();
            }
        })
    }
}