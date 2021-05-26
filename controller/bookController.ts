import connexion from './../config/dbConnexion'
import { deleteBook, getAllBooks, getByBookId, insertBook } from './../repository/bookRepository'

export const getAllBooksController= (req:any, res:any) => {
    // getAllBooks((erro,produtos) => {
    //     if(erro){
    //         res.status(500).json({"erro:":"Database Error"})
    //         console.log(erro)
    //     }
    //     else {
    //         res.json(produtos)
    //     }
    // })
}

export const insertBookController = (req:any, res:any) => {    
    //Obter o dado do request - nome e o preco
    // const produto = req.body;
    
    // insertBook(produto, (erro, produtoSalvo) => {
    //     if(erro){
    //         res.status(500).json({"erro:":"Database Error"})
    //         console.log(erro)
    //     }
    //     else {
    //         res.status(201).json(produtoSalvo)
    //     }
    // })
}
export const getByBookIdController = (req:any, res:any) => {    
    // const id = +req.params.id;
    // if(isNaN(id)){
    //     const error = {
    //         status: 400,
    //         msg: "Id deve ser um numero"
    //     }
    //     res.status(error.status).json(error)
    // }
    // else{
    //     getByBookId(id, (erro, produto) => {
    //         if(erro){
    //             res.status(erro.status).json(erro)
    //         }
    //         else {
    //             res.json(produto)
    //         }
    //     })
    // }
}

export const updateBookController = (req:any, res:any) => {
    // const id = req.params.id;
    // const prod = req.body;

    // const sql = `UPDATE produto SET nome=?, preco=? WHERE id=?`;
    // connexion.query(sql, [prod.nome, prod.preco, id], (erro, rows) => {
    //     if(erro){
    //         res.status(500).json({"erro:":"Database Error"})
    //         console.log(erro)
    //     }
    //     else {
    //         prod.id = +id; //Sinal de "+" -> converte String para number (ou usar parseInt)
    //         res.json(prod);
    //     }
    // })
}

export const deleteBookController = (req:any, res:any) => {
    // const id = +req.params.id;
    // if(isNaN(id)){
    //     const error = {
    //         status: 400,
    //         msg: "Id deve ser um numero"
    //     }
    //     res.status(error.status).json(error)
    // }
    // else{
    //     getByBookId(id, (erro, produto) => {
    //         if(erro){
    //             res.status(erro.status).json(erro)
    //         }
    //         else {
    //             deleteBook(id, (erro, id) => {
    //                 if(erro){
    //                     res.status(erro.status).json(erro)
    //                 }
    //                 else {
    //                     res.json(produto)
    //                 }        
    //             })
    //         }
    //     })
    // }
}