import connection from "../config/dbConnection";
import { IUser } from "../utils/types";

export const getAllUsers = (callback: any) => {
    const sql = "SELECT * FROM users";

    connection.query(sql, (erro: any, rows: any) => {
        if(erro){            
            callback(erro,null);
        }
        else {
            callback(null, rows);
        }
    })
}

export const getUserByName = (firstName: string, lastName: string, callback: any) => {
    const sql = "SELECT * FROM users where firstName=? and lastName=? ";
    connection.query(sql, [firstName, lastName], (err, rows) => {
        if(err){            
            const error = {
                status: 500,
                msg: err
            }
            callback(error,null);
        }
        else {
            if(rows && rows.length > 0){
                callback(null,rows[0]);
            }
            else{ 
                const error = {
                    status: 404,
                    msg: "User not found"
                }
                callback(error,null);
            }
        }
    })

}

export const getUserById = (id: string, callback: any) => {
    const sql = "SELECT * FROM users where id=?";

    connection.query(sql, [id], (err: any, rows: any) => {
        if(err){
            const error = {
                status: 500,
                msg: err
            }
            callback(error, null);
        }
        else {
            if(rows && rows.length > 0){
                callback(null,rows[0])
            }
            else{ 
                const error = {
                    status: 404,
                    msg: "user not found"
                }
                callback(error, null);
            }
        }
    })
}

export const insertUser = (user: IUser, callback: any) => {

    const sql = "INSERT INTO users(id, firstName, lastName, email, birthday) VALUES (?,?,?,?,?)"

    connection.query(sql, [user.id, user.firstName, user.lastName, user.email, user.birthday],
        (erro, rows) => {
            if(erro){
                callback(erro, null)
            }
            else {
                callback(null, user)
            }
    })    
}


export const deleteUser = (id: string, callback: any) => {
    const sql = `DELETE FROM users WHERE id=?`;

    connection.query(sql, [id], (err, rows) => {
        if(err){
            const error = {
                status: 500,
                msg: err
            }
            callback(error, null);
        }
        else {
            if(rows.affectedRows){

                callback(null, id);
            }
            else {
                const error = {
                    status: 500,
                    msg: err
                }
                callback(error, null);    
            }
        }
    })            
}