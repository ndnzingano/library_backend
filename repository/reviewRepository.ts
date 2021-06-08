import connection from "../config/dbConnection";
import { IReview } from "../utils/types";

export const getAllReviews = (callback: any) => {
    const sql = "SELECT * FROM reviews";

    connection.query(sql, (erro: any, rows: any) => {
        if(erro){            
            callback(erro,null);
        }
        else {
            callback(null, rows);
        }
    })
}

export const getReviewByUserId = (id: string, callback: any) => {
    const sql = "SELECT * FROM reviews where  user=? ";
    connection.query(sql, [id], (err, rows) => {
        if(err){            
            const error = {
                status: 500,
                message: err
            }
            callback(error,null);
        }
        else {
            if(rows && rows.length > 0){
                callback(null,rows);
            }
            else{ 
                const error = {
                    status: 404,
                    message: `Review that contains an user with id: '${id}' not found.`
                }
                callback(error,null);
            }
        }
    })

}

export const getReviewByBookId = (id: string, callback: any) => {
  const sql = "SELECT * FROM reviews where book=? ";
  connection.query(sql, [id], (err, rows) => {
      if(err){            
          const error = {
              status: 500,
              message: err
          }
          callback(error,null);
      }
      else {
          if(rows && rows.length > 0){
              callback(null,rows);
          }
          else{ 
              const error = {
                  status: 404,
                  message: `Review that contains a book with id: '${id}' not found.`
                }
              callback(error,null);
          }
      }
  })

}

export const getReviewById = (id: string, callback: any) => {
    const sql = "SELECT * FROM reviews where id=?";

    connection.query(sql, [id], (err: any, rows: any) => {
        if(err){
            const error = {
                status: 500,
                message: err
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
                    message: `Review with id: '${id}' not found.`
                }
                callback(error, null);
            }
        }
    })
}

export const insertReview = (review: IReview, callback: any) => {

    const sql = "INSERT INTO reviews(id, book, user, startDate, finishDate, rating, review) VALUES (?,?,?,?,?,?,?)"

    connection.query(sql, [review.id, review.book, review.user, review.startDate, review.finishDate, review.rating, review.review],
        (erro, rows) => {
            if(erro){
                callback(erro, null)
            }
            else {
                callback(null, review)
            }
    })    
}

export const deleteReview = (id: string, callback: any) => {
    const sql = `DELETE FROM reviews WHERE id=?`;

    connection.query(sql, [id], (err, rows) => {
        if(err){
            const error = {
                status: 500,
                message: err
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
                    message: err
                }
                callback(error, null);    
            }
        }
    })            
}