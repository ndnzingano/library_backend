// import connexion from '../config/dbConnection'

export const getAllUsers = (callback: any) => {
    // const sql = "SELECT * FROM usuario";

    // connexion.query(sql, (erro, rows) => {
    //     if(erro){            
    //         callback(erro,null);
    //     }
    //     else {
    //         callback(null, rows);
    //     }
    // })
}

export const getByUsername = (username: string, callback: any) => {
    // const sql = "SELECT * FROM usuario where username=?";
    // connexion.query(sql, [username], (err, rows) => {
    //     if(err){            
    //         const error = {
    //             status: 500,
    //             msg: err
    //         }
    //         callback(error,null);
    //     }
    //     else {
    //         if(rows && rows.length > 0){
    //             callback(null,rows[0]);
    //         }
    //         else{ 
    //             const error = {
    //                 status: 404,
    //                 msg: "usuario nao encontrado"
    //             }
    //             callback(error,null);
    //         }
    //     }
    // })

}