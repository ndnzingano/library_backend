import connection from "../config/dbConnection";

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