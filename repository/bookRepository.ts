import connexion from './../config/dbConnexion'

export const getAllBooks = (callback: any) => {
    const sql = "SELECT * FROM produto";

    connexion.query(sql, (erro, rows) => {
        if(erro){            
            callback(erro,null);
        }
        else {
            callback(null, rows);
        }
    })
}

export const insertBook = (produto: any, callback: any) => {   
    //SQL
    const sql = "INSERT INTO produto(nome,preco) VALUES (?,?)"

    connexion.query(sql, [produto.nome, produto.preco],
        (erro, rows) => {
            if(erro){
                callback(erro, null)
            }
            else {
                produto.id = rows.insertId;
                callback(null, produto)
            }
    })    
}

export const getByBookId = (id: string, callback: any) => {

    const sql = "SELECT * FROM produto WHERE id=?";

    connexion.query(sql, [id], (err, rows) => {
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
                    msg: "produto nao encontrado"
                }
                callback(error, null);
            }
        }
    })
}

export const deleteBook = (id: string, callback: any) => {
    const sql = `DELETE FROM produto WHERE id=?`;
    connexion.query(sql, [id], (err, rows) => {
        if(err){
            const error = {
                status: 500,
                msg: err
            }
            callback(err, null);
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
                callback(err, null);    
            }
        }
    })            
}