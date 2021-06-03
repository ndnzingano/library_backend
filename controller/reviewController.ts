import connection from "../config/dbConnection"
import { IDBError, IReview, IUser } from "../utils/types"
const jwt = require('jsonwebtoken')
import {v4 as uuidv4 } from 'uuid'
import {getAllReviews, insertReview, getReviewById, getReviewByBookId, getReviewByUserId, deleteReview} from './../repository/reviewRepository'

export const getAllReviewsController = (req: any, res: any) => {
  getAllReviews((error: IDBError, reviews: IReview) => {
        if(error){
          res.status(500).json(
            {
                "Type": "There has been a database error!",
                "Message": error.sqlMessage,
                "Query": error.sql
            })     
        }
        else {
            res.json(reviews)
        }
    })
}

export const insertReviewController = (req:any, res:any) => {    
    const review = req.body;
    review.id = uuidv4();
    
    insertReview(review, (error: IDBError, savedReview: IReview) => {
        if(error){
            res.status(500).json(
                {
                    "Type": "There has been a database error!",
                    "Message": error.sqlMessage,
                    "Query": error.sql
                })
        }
        else {
            res.status(201).json(savedReview)
        }
    })
}

export const getReviewByIdController = (req: any, res: any) => {
  const id = req.params.id;
  getReviewById(id, (error: any, review: IReview) => {
      if(error){
        res.status(error.status).json(
          {
            "Type": "There has been a network error!",
            "Status": error.status,
            "Message": error.message,
        })
      }
      else {
          res.json(review)
      }
  })
}

export const getReviewByBookIdController = (req: any, res: any) => {    
    if(req.query){
        const id = req.query.book;

        getReviewByBookId(id, (err: any, review: IReview) => {
            if(err){
                res.status(err.status).json(err);
            }
            else {
                res.json(review);
            }
        });
    }
    else{
        res.status(400).json({"status":400, "msg":"Necessario especificar nome completo."})
    }
}

export const getReviewByUserIdController = (req: any, res: any) => {    
  if(req.query){
      const id = req.query.user;

      getReviewByUserId(id, (err: any, review: IReview) => {
          if(err){
              res.status(err.status).json(err);
          }
          else {
              res.json(review);
          }
      });
  }
  else{
      res.status(400).json({"status":400, "msg":"Necessario especificar nome completo."})
  }
}

export const updateReviewController = (req:any, res:any) => {
    const id = req.params.id;
    const review: IReview = req.body;

    const sql = `UPDATE reviews SET book=?, user=?, startDate=?, finishDate=?, rating=?, review=? WHERE id=?`;
    connection.query(sql, [review.book, review.user, review.startDate, review.finishDate, review.rating, review.review, id], (error, rows) => {
        if(error){
          res.status(error.code).json(
            {
              "Type": "There has been a database error!",
              "Code": error.code,
              "Message": error.sqlMessage,
              "Query": error.sql          
          })
        }
        else {
            res.json(review);
        }
    })
}

export const deleteReviewController = (req:any, res:any) => {
  const id = req.params.id;    
  getReviewById(id, (error: any, review: IReview) => {
      if(error){
        res.status(error.status).json(
          {
            "Type": "There has been a network error!",
            "Status": error.status,
            "Message": error.message
          })
      }
      else {
        deleteReview(id, (error: any, id: string) => {
          if(error){
            res.status(error.status).json(
              {
                "Type": "There has been a network error!",
                "Status": error.status,
                "Message": error.message
              })
          }
          else {
            res.json(review)
          }        
        })
      }
    })
}

